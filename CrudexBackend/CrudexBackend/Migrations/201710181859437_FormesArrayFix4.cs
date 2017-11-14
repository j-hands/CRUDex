namespace CrudexBackend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class FormesArrayFix4 : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Formes", "MainPokemon_PokemonId", "dbo.Pokemons");
            DropIndex("dbo.Formes", new[] { "MainPokemon_PokemonId" });
            RenameColumn(table: "dbo.Formes", name: "MainPokemon_PokemonId", newName: "Pokemon_PokemonId");
            AlterColumn("dbo.Formes", "Pokemon_PokemonId", c => c.Int());
            CreateIndex("dbo.Formes", "Pokemon_PokemonId");
            AddForeignKey("dbo.Formes", "Pokemon_PokemonId", "dbo.Pokemons", "PokemonId");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Formes", "Pokemon_PokemonId", "dbo.Pokemons");
            DropIndex("dbo.Formes", new[] { "Pokemon_PokemonId" });
            AlterColumn("dbo.Formes", "Pokemon_PokemonId", c => c.Int(nullable: false));
            RenameColumn(table: "dbo.Formes", name: "Pokemon_PokemonId", newName: "MainPokemon_PokemonId");
            CreateIndex("dbo.Formes", "MainPokemon_PokemonId");
            AddForeignKey("dbo.Formes", "MainPokemon_PokemonId", "dbo.Pokemons", "PokemonId", cascadeDelete: true);
        }
    }
}
