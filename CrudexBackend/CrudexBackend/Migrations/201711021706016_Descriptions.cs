namespace CrudexBackend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Descriptions : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Formes", "Description", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Formes", "Description");
        }
    }
}
