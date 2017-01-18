namespace SharePoint.WebHooks.Common.SQL
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class SharePointWebHooks : DbContext
    {
        public SharePointWebHooks()
            : base("name=SharePointWebHooks")
        {
        }

        public virtual DbSet<ListWebHooks> ListWebHooks { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
        }
    }
}
