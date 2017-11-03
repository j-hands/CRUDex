namespace CrudexBackend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class DisconnectedTables : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Formes", "MainPokemon_PokemonId", "dbo.Pokemons");
            DropIndex("dbo.Formes", new[] { "MainPokemon_PokemonId" });
            DropColumn("dbo.Formes", "MainPokemon_PokemonId");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Formes", "MainPokemon_PokemonId", c => c.Int());
            CreateIndex("dbo.Formes", "MainPokemon_PokemonId");
            AddForeignKey("dbo.Formes", "MainPokemon_PokemonId", "dbo.Pokemons", "PokemonId");
        }
    }
}
