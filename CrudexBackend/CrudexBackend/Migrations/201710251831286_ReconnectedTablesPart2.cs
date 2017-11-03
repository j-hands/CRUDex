namespace CrudexBackend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ReconnectedTablesPart2 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Formes", "PokemonId", c => c.Int(nullable: false));
            CreateIndex("dbo.Formes", "PokemonId");
            AddForeignKey("dbo.Formes", "PokemonId", "dbo.Pokemons", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Formes", "PokemonId", "dbo.Pokemons");
            DropIndex("dbo.Formes", new[] { "PokemonId" });
            DropColumn("dbo.Formes", "PokemonId");
        }
    }
}
