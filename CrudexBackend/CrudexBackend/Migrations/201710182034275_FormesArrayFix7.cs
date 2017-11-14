namespace CrudexBackend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class FormesArrayFix7 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Formes", "MainPokemonId", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Formes", "MainPokemonId");
        }
    }
}
