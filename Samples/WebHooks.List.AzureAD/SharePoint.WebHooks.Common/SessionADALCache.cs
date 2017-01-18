using Microsoft.IdentityModel.Clients.ActiveDirectory;
using System.Web;

namespace SharePoint.WebHooks.Common
{
    /// <summary>
    /// ADAL session based token cache implementation
    /// </summary>
    public class SessionADALCache : TokenCache
    {
        private static readonly object FileLock = new object();
        string UserObjectId = string.Empty;
        string CacheId = string.Empty;

        public SessionADALCache(string userId)
        {
            UserObjectId = userId;
            CacheId = UserObjectId + "_TokenCache";
            this.AfterAccess = AfterAccessNotification;
            this.BeforeAccess = BeforeAccessNotification;

            Load();
        }

        /// <summary>
        /// Deserialize the user's tokens from the session cache
        /// </summary>
        public void Load()
        {
            lock (FileLock)
            {
                this.Deserialize((byte[])HttpContext.Current.Session[CacheId]);
            }
        }

        /// <summary>
        /// Serialize the user's tokens to the session cache
        /// </summary>
        public void Persist()
        {
            lock (FileLock)
            {
                // reflect changes in the persistent store             
                HttpContext.Current.Session[CacheId] = this.Serialize();

                // once the write operation took place, restore the HasStateChanged bit to false             
                this.HasStateChanged = false;
            }
        }

        /// <summary>
        /// Empties the persistent store.
        /// </summary>
        public override void Clear()
        {
            base.Clear();
            HttpContext.Current.Session.Remove(CacheId);
        }

        /// <summary>
        /// Delete token from the cache
        /// </summary>
        /// <param name="item">Token to delete</param>
        public override void DeleteItem(TokenCacheItem item)
        {
            base.DeleteItem(item);
            Persist();
        }

        // Triggered right before ADAL needs to access the cache.     
        // Reload the cache from the persistent store in case it changed since the last access.      
        void BeforeAccessNotification(TokenCacheNotificationArgs args)
        {
            Load();
        }

        // Triggered right after ADAL accessed the cache.     
        void AfterAccessNotification(TokenCacheNotificationArgs args)
        {
            // if the access operation resulted in a cache update         
            if (this.HasStateChanged)
            {
                Persist();
            }
        }
    }
}