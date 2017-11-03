namespace CrudexBackend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class FormesArrayFix9 : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Formes", "MainPokemonId");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Formes", "MainPokemonId", c => c.Int(nullable: false));
        }
    }
}
