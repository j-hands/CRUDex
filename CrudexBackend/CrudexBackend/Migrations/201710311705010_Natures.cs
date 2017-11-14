namespace CrudexBackend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Natures : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Natures",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        AttackMod = c.Double(nullable: false),
                        DefenseMod = c.Double(nullable: false),
                        SpAttackMod = c.Double(nullable: false),
                        SpDefenseMod = c.Double(nullable: false),
                        SpeedMod = c.Double(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Natures");
        }
    }
}
