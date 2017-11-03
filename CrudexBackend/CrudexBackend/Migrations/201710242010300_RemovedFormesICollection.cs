namespace CrudexBackend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class RemovedFormesICollection : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Formes", "MainPokemon_PokemonId", "dbo.Pokemons");
            DropIndex("dbo.Formes", new[] { "MainPokemon_PokemonId" });
            AlterColumn("dbo.Formes", "MainPokemon_PokemonId", c => c.Int());
            CreateIndex("dbo.Formes", "MainPokemon_PokemonId");
            AddForeignKey("dbo.Formes", "MainPokemon_PokemonId", "dbo.Pokemons", "PokemonId");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Formes", "MainPokemon_PokemonId", "dbo.Pokemons");
            DropIndex("dbo.Formes", new[] { "MainPokemon_PokemonId" });
            AlterColumn("dbo.Formes", "MainPokemon_PokemonId", c => c.Int(nullable: false));
            CreateIndex("dbo.Formes", "MainPokemon_PokemonId");
            AddForeignKey("dbo.Formes", "MainPokemon_PokemonId", "dbo.Pokemons", "PokemonId", cascadeDelete: true);
        }
    }
}
