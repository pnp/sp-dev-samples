using Microsoft.IdentityModel.Clients.ActiveDirectory;
using Microsoft.SharePoint.Client;
using OfficeDevPnP.Core;
using System;
using System.Security.Claims;

namespace SharePoint.WebHooks.Common
{
    /// <summary>
    /// Provides SharePoint ClientContext objects based on Azure AD user/certificate authentication
    /// </summary>
    public static class ContextProvider
    {
        /// <summary>
        /// Create an app-only client context created using Azure AD app-only authentication using a certificate. Using this context all site collections in the tenant can be changed
        /// </summary>
        /// <param name="siteUrl">Url to create the client context for</param>
        /// <returns>Created client context</returns>
        public static ClientContext GetAppOnlyClientContext(String siteUrl)
        {
            string tenantID = ClaimsPrincipal.Current.HasClaim(c => c.Type == "http://schemas.microsoft.com/identity/claims/tenantid") ?
                ClaimsPrincipal.Current.FindFirst("http://schemas.microsoft.com/identity/claims/tenantid").Value :
                Settings.Tenant;

            AuthenticationManager authManager = new AuthenticationManager();
            ClientContext context = authManager.GetAzureADAppOnlyAuthenticatedContext(
                siteUrl,
                Settings.ClientId,
                tenantID,
                Settings.AppOnlyCertificate);

            return (context);
        }

        /// <summary>
        /// Create a client context created using the user's refresh token which we obtained when the user logged in to the application. Using this context only sites collections that the user can 
        /// access can be updated
        /// </summary>
        /// <param name="siteUrl">Url to create the client context for</param>
        /// <returns>Created client context</returns>
        public static ClientContext GetWebApplicationClientContext(String siteUrl)
        {
            string signedInUserID = ClaimsPrincipal.Current.FindFirst(ClaimTypes.NameIdentifier).Value;
            var cache = new SessionADALCache(signedInUserID);

            AuthenticationManager authManager = new AuthenticationManager();
            ClientContext context = authManager.GetAzureADWebApplicationAuthenticatedContext(
                siteUrl,
                (s) => GetTokenForApplication(s, cache));

            return (context);
        }

        /// <summary>
        /// Obtains an access token for requested service URI
        /// </summary>
        /// <param name="serviceUri">Service URI for which we want an access token (e.g. https://contoso.sharepoint.com/) </param>
        /// <param name="tokenCache">The token cache used to grab the user's refresh token from, ADAL will use that to issue a new access token for the requested resource </param>
        /// <returns>The access token</returns>
        private static string GetTokenForApplication(String serviceUri, TokenCache tokenCache)
        {
            string tenantID = ClaimsPrincipal.Current.FindFirst("http://schemas.microsoft.com/identity/claims/tenantid").Value;
            // Important: UserIdentifierType.UniqueId requires the objectidentifier claim
            string signedInUserID = ClaimsPrincipal.Current.FindFirst("http://schemas.microsoft.com/identity/claims/objectidentifier").Value;

            // Get a token for the Graph without triggering any user interaction (from the cache, via multi-resource refresh token, etc)
            ClientCredential clientcred = new ClientCredential(Settings.ClientId, Settings.AppKey);

            // Initialize AuthenticationContext with the token cache of the currently signed in user, as kept in the app's database
            AuthenticationContext authContext = new AuthenticationContext(Settings.Authority, tokenCache);

            // Get the Access Token
            //AuthenticationResult authenticationResult = authContext.AcquireTokenSilent(serviceUri.ToString(),clientcred, UserIdentifier.AnyUser);
            AuthenticationResult authenticationResult = authContext.AcquireTokenSilent(serviceUri.ToString(), clientcred, new UserIdentifier(signedInUserID, UserIdentifierType.UniqueId));
            return authenticationResult.AccessToken;
        }
    }
}
