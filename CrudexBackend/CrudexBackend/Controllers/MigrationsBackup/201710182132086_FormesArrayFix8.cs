namespace CrudexBackend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class FormesArrayFix8 : DbMigration
    {
        public override void Up()
        {
            RenameColumn(table: "dbo.Formes", name: "MainPokemonId", newName: "PokemonId");
            RenameIndex(table: "dbo.Formes", name: "IX_MainPokemonId", newName: "IX_PokemonId");
        }
        
        public override void Down()
        {
            RenameIndex(table: "dbo.Formes", name: "IX_PokemonId", newName: "IX_MainPokemonId");
            RenameColumn(table: "dbo.Formes", name: "PokemonId", newName: "MainPokemonId");
        }
    }
}
