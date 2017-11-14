namespace CrudexBackend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class PokedexNumber : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Pokemons", "PokedexNumber", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Pokemons", "PokedexNumber");
        }
    }
}
