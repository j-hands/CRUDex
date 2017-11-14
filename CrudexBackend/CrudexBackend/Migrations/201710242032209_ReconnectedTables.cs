namespace CrudexBackend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ReconnectedTables : DbMigration
    {
        public override void Up()
        {
            DropPrimaryKey("dbo.Formes");
            DropPrimaryKey("dbo.Pokemons");
            DropColumn("dbo.Formes", "FormeId");
            DropColumn("dbo.Pokemons", "PokemonId");
            AddColumn("dbo.Formes", "Id", c => c.Int(nullable: false, identity: true));
            AddColumn("dbo.Formes", "Name", c => c.String());
            AddColumn("dbo.Pokemons", "Id", c => c.Int(nullable: false, identity: true));
            AddColumn("dbo.Pokemons", "Name", c => c.String());
            DropColumn("dbo.Formes", "FormeName");
            DropColumn("dbo.Pokemons", "PokemonName");
            AddPrimaryKey("dbo.Formes", "Id");
            AddPrimaryKey("dbo.Pokemons", "Id");
        }
        
        public override void Down()
        {
            DropPrimaryKey("dbo.Pokemons");
            DropPrimaryKey("dbo.Formes");
            DropColumn("dbo.Pokemons", "Id");
            DropColumn("dbo.Formes", "Id");
            AddColumn("dbo.Pokemons", "PokemonName", c => c.String());
            AddColumn("dbo.Pokemons", "PokemonId", c => c.Int(nullable: false, identity: true));
            AddColumn("dbo.Formes", "FormeName", c => c.String());
            AddColumn("dbo.Formes", "FormeId", c => c.Int(nullable: false, identity: true));
            DropColumn("dbo.Pokemons", "Name");
            DropColumn("dbo.Formes", "Name");
            AddPrimaryKey("dbo.Pokemons", "PokemonId");
            AddPrimaryKey("dbo.Formes", "FormeId");
        }
    }
}
