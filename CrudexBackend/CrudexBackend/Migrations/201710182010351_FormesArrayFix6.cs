namespace CrudexBackend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class FormesArrayFix6 : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Formes", "Pokemon_PokemonId", "dbo.Pokemons");
            DropIndex("dbo.Formes", new[] { "Pokemon_PokemonId" });
            RenameColumn(table: "dbo.Formes", name: "Pokemon_PokemonId", newName: "MainPokemon_PokemonId");
            AlterColumn("dbo.Formes", "MainPokemon_PokemonId", c => c.Int(nullable: false));
            CreateIndex("dbo.Formes", "MainPokemon_PokemonId");
            AddForeignKey("dbo.Formes", "MainPokemon_PokemonId", "dbo.Pokemons", "PokemonId", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Formes", "MainPokemon_PokemonId", "dbo.Pokemons");
            DropIndex("dbo.Formes", new[] { "MainPokemon_PokemonId" });
            AlterColumn("dbo.Formes", "MainPokemon_PokemonId", c => c.Int());
            RenameColumn(table: "dbo.Formes", name: "MainPokemon_PokemonId", newName: "Pokemon_PokemonId");
            CreateIndex("dbo.Formes", "Pokemon_PokemonId");
            AddForeignKey("dbo.Formes", "Pokemon_PokemonId", "dbo.Pokemons", "PokemonId");
        }
    }
}
