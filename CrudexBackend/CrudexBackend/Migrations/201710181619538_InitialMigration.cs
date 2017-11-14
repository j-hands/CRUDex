namespace CrudexBackend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialMigration : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Formes",
                c => new
                    {
                        FormeId = c.Int(nullable: false, identity: true),
                        FormeName = c.String(),
                        Hp = c.Int(nullable: false),
                        Att = c.Int(nullable: false),
                        Def = c.Int(nullable: false),
                        SpA = c.Int(nullable: false),
                        SpD = c.Int(nullable: false),
                        Spe = c.Int(nullable: false),
                        Type1 = c.String(),
                        Type2 = c.String(),
                        Image = c.String(),
                        MainPokemon_PokemonId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.FormeId)
                .ForeignKey("dbo.Pokemons", t => t.MainPokemon_PokemonId, cascadeDelete: true)
                .Index(t => t.MainPokemon_PokemonId);
            
            CreateTable(
                "dbo.Pokemons",
                c => new
                    {
                        PokemonId = c.Int(nullable: false, identity: true),
                        PokemonName = c.String(),
                    })
                .PrimaryKey(t => t.PokemonId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Formes", "MainPokemon_PokemonId", "dbo.Pokemons");
            DropIndex("dbo.Formes", new[] { "MainPokemon_PokemonId" });
            DropTable("dbo.Pokemons");
            DropTable("dbo.Formes");
        }
    }
}
