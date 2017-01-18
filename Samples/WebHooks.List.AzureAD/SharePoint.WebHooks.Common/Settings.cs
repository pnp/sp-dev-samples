using System;
using System.Configuration;
using System.Globalization;
using System.Security.Cryptography.X509Certificates;

namespace SharePoint.WebHooks.Common
{
    /// <summary>
    /// Class that provides access the settings needed to operate this application:
    /// - The Client ID is used by the application to uniquely identify itself to Azure AD.
    /// - The App Key is a credential used to authenticate the application to Azure AD.  Azure AD supports password and certificate credentials.
    /// - The Metadata Address is used by the application to retrieve the signing keys used by Azure AD.
    /// - The AAD Instance is the instance of Azure, for example public Azure or Azure China.
    /// - The Authority is the sign-in URL of the tenant.
    /// - The Post Logout Redirect Uri is the URL where the user will be redirected after they sign out.
    /// - The graphResourceId of the AAD Graph API.  We'll need this to request a token to call the Graph API.
    /// </summary>
    public static class Settings
    {
        private static string clientId = ConfigurationManager.AppSettings["ida:ClientId"];
        private static string appKey = ConfigurationManager.AppSettings["ida:AppKey"];
        private static string aadInstance = ConfigurationManager.AppSettings["ida:AADInstance"];
        private static string tenant = ConfigurationManager.AppSettings["ida:Tenant"];
        private static string redirectUri = ConfigurationManager.AppSettings["ida:RedirectUri"];
        private static string graphResourceId = ConfigurationManager.AppSettings["ida:GraphResourceId"];
        private static string certificateStore = ConfigurationManager.AppSettings["CertificateStore"];
        private static string certificateLocation = ConfigurationManager.AppSettings["CertificateLocation"];
        private static string certificateThumbprint = ConfigurationManager.AppSettings["CertificateThumbprint"];
        private static string siteCollection = ConfigurationManager.AppSettings["SiteCollection"];
        private static string tenantName = ConfigurationManager.AppSettings["TenantName"];

        private static readonly Lazy<X509Certificate2> _appOnlyCertificateLazy =
            new Lazy<X509Certificate2>(() => {

                X509Certificate2 appOnlyCertificate = null;

                StoreName storeName;
                StoreLocation storeLocation;

                Enum.TryParse(certificateStore, out storeName);
                Enum.TryParse(certificateLocation, out storeLocation);

                X509Store certStore = new X509Store(storeName, storeLocation);
                certStore.Open(OpenFlags.ReadOnly);

                X509Certificate2Collection certCollection = certStore.Certificates.Find(
                    X509FindType.FindByThumbprint,
                    certificateThumbprint,
                    false);

                // Get the first cert with the thumbprint
                if (certCollection.Count > 0)
                {
                    appOnlyCertificate = certCollection[0];
                }
                certStore.Close();

                return (appOnlyCertificate);
            });

        public static string ClientId
        {
            get
            {
                return clientId;
            }
        }

        public static string AppKey
        {
            get
            {
                return appKey;
            }
        }

        public static string AadInstance
        {
            get
            {
                return aadInstance;
            }
        }

        public static string Tenant
        {
            get
            {
                return tenant;
            }
        }

        public static string RedirectUri
        {
            get
            {
                return redirectUri;
            }
        }

        public static string GraphResourceId
        {
            get
            {
                return graphResourceId;
            }
        }

        public static string Authority
        {
            get
            {
                return String.Format(CultureInfo.InvariantCulture, AadInstance, Tenant);
            }
        }

        public static string SiteCollection
        {
            get
            {
                if (!siteCollection.StartsWith("/"))
                {
                    siteCollection = "/" + siteCollection;
                }

                return string.Format("https://{0}{1}", tenantName, siteCollection);
            }
        }

        public static string CertificateStore
        {
            get
            {
                return certificateStore;
            }
        }

        public static string CertificateLocation
        {
            get
            {
                return certificateLocation;
            }
        }

        public static string CertificateThumbprint
        {
            get
            {
                return certificateThumbprint;
            }
        }

        public static X509Certificate2 AppOnlyCertificate
        {
            get
            {
                return (_appOnlyCertificateLazy.Value);
            }
        }

    }
}
