namespace CrudexBackend.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using System.Collections.Generic;

    using CrudexBackend.Models;

    internal sealed class Configuration : DbMigrationsConfiguration<CrudexBackendContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(CrudexBackendContext context)
        {
            var bulbasaur = new Pokemon() { Name = "Bulbasaur", Formes = new List<Forme>() };
            var ivysaur = new Pokemon() { Name = "Ivysaur", Formes = new List<Forme>() };
            var venusaur = new Pokemon() { Name = "Venusaur", Formes = new List<Forme>() };
            var charmander = new Pokemon() { Name = "Charmander", Formes = new List<Forme>() };

            var bulbasaurDefault = new Forme() { Name = "Bulbasaur (Default)", Hp = 45, Att = 49, Def = 49, SpA = 65, SpD = 65, Spe = 45, Type1 = "grass", Type2 = "poison", Image = "/assets/artwork/001bulbasaur.png", Description = "", Pokemon = bulbasaur };
            var ivysaurDefault = new Forme() { Name = "Ivysaur (Default)", Hp = 60, Att = 62, Def = 63, SpA = 80, SpD = 80, Spe = 60, Type1 = "grass", Type2 = "poison", Image = "/assets/artwork/002ivysaur.png", Description = "", Pokemon = ivysaur };
            var venusaurDefault = new Forme() { Name = "Venusaur (Default)", Hp = 80, Att = 82, Def = 83, SpA = 100, SpD = 100, Spe = 80, Type1 = "grass", Type2 = "poison", Image = "/assets/artwork/003venusaur.png", Description = "", Pokemon = venusaur };
            var venusaurmega = new Forme() { Name = "Mega Venusaur", Hp = 80, Att = 100, Def = 123, SpA = 122, SpD = 120, Spe = 80, Type1 = "grass", Type2 = "poison", Image = "/assets/artwork/003venusaur-mega.png", Description = "", Pokemon = venusaur };
            var charmanderDefault = new Forme() { Name = "Charmander (Default)", Hp = 39, Att = 52, Def = 43, SpA = 60, SpD = 50, Spe = 65, Type1 = "fire", Type2 = null, Image = "/assets/Artwork/004Charmander.png", Description = "", Pokemon = charmander };

            var hardy = new Nature() { Name = "Hardy", AttackMod = 1, DefenseMod = 1, SpAttackMod = 1, SpDefenseMod = 1, SpeedMod = 1 };
            var lonely = new Nature() { Name = "Lonely", AttackMod = 1.1, DefenseMod = 0.9, SpAttackMod = 1, SpDefenseMod = 1, SpeedMod = 1 };
            var brave = new Nature() { Name = "Brave", AttackMod = 1.1, DefenseMod = 1, SpAttackMod = 1, SpDefenseMod = 1, SpeedMod = 0.9 };
            var adamant = new Nature() { Name = "Adamant", AttackMod = 1.1, DefenseMod = 1, SpAttackMod = 0.9, SpDefenseMod = 1, SpeedMod = 1 };
            var naughty = new Nature() { Name = "Naughty", AttackMod = 1.1, DefenseMod = 1, SpAttackMod = 1, SpDefenseMod = 0.9, SpeedMod = 1 };
            var bold = new Nature() { Name = "Bold", AttackMod = 0.9, DefenseMod = 1.1, SpAttackMod = 1, SpDefenseMod = 1, SpeedMod = 1 };
            var docile = new Nature() { Name = "Docile", AttackMod = 1, DefenseMod = 1, SpAttackMod = 1, SpDefenseMod = 1, SpeedMod = 1 };
            var relaxed = new Nature() { Name = "Relaxed", AttackMod = 1, DefenseMod = 1.1, SpAttackMod = 1, SpDefenseMod = 1, SpeedMod = 0.9 };
            var impish = new Nature() { Name = "Impish", AttackMod = 1, DefenseMod = 1.1, SpAttackMod = 0.9, SpDefenseMod = 1, SpeedMod = 1 };
            var lax = new Nature() { Name = "Lax", AttackMod = 1, DefenseMod = 1.1, SpAttackMod = 1, SpDefenseMod = 0.9, SpeedMod = 1 };
            var timid = new Nature() { Name = "Timid", AttackMod = 0.9, DefenseMod = 1, SpAttackMod = 1, SpDefenseMod = 1, SpeedMod = 1.1 };
            var hasty = new Nature() { Name = "Hasty", AttackMod = 1, DefenseMod = 0.9, SpAttackMod = 1, SpDefenseMod = 1, SpeedMod = 1.1 };
            var serious = new Nature() { Name = "Serious", AttackMod = 1, DefenseMod = 1, SpAttackMod = 1, SpDefenseMod = 1, SpeedMod = 1 };
            var jolly = new Nature() { Name = "Jolly", AttackMod = 1, DefenseMod = 1, SpAttackMod = 0.9, SpDefenseMod = 1, SpeedMod = 1.1 };
            var naive = new Nature() { Name = "Naive", AttackMod = 1, DefenseMod = 1, SpAttackMod = 1, SpDefenseMod = 0.9, SpeedMod = 1.1 };
            var modest = new Nature() { Name = "Modest", AttackMod = 0.9, DefenseMod = 1, SpAttackMod = 1.1, SpDefenseMod = 1, SpeedMod = 1 };
            var mild = new Nature() { Name = "Mild", AttackMod = 1, DefenseMod = 0.9, SpAttackMod = 1.1, SpDefenseMod = 1, SpeedMod = 1 };
            var quiet = new Nature() { Name = "Quiet", AttackMod = 1, DefenseMod = 1, SpAttackMod = 1.1, SpDefenseMod = 1, SpeedMod = 0.9 };
            var bashful = new Nature() { Name = "Bashful", AttackMod = 1, DefenseMod = 1, SpAttackMod = 1, SpDefenseMod = 1, SpeedMod = 1 };
            var rash = new Nature() { Name = "Rash", AttackMod = 1, DefenseMod = 1, SpAttackMod = 1.1, SpDefenseMod = 0.9, SpeedMod = 1 };
            var calm = new Nature() { Name = "Calm", AttackMod = 0.9, DefenseMod = 1, SpAttackMod = 1, SpDefenseMod = 1.1, SpeedMod = 1 };
            var gentle = new Nature() { Name = "Gentle", AttackMod = 1, DefenseMod = 0.9, SpAttackMod = 1, SpDefenseMod = 1.1, SpeedMod = 1 };
            var sassy = new Nature() { Name = "Sassy", AttackMod = 1, DefenseMod = 1, SpAttackMod = 1, SpDefenseMod = 1.1, SpeedMod = 0.9 };
            var careful = new Nature() { Name = "Careful", AttackMod = 1, DefenseMod = 1, SpAttackMod = 0.9, SpDefenseMod = 1.1, SpeedMod = 1 };
            var quirky = new Nature() { Name = "Quirky", AttackMod = 1, DefenseMod = 1, SpAttackMod = 1, SpDefenseMod = 1, SpeedMod = 1 };

            /*context.Pokemons.AddOrUpdate(x => x.Name,
                bulbasaur,
                ivysaur,
                venusaur,
                charmander
                );

            context.Formes.AddOrUpdate(x => x.Name,
                bulbasaurDefault,
                ivysaurDefault,
                venusaurDefault,
                venusaurmega,
                charmanderDefault
                );

            context.Natures.AddOrUpdate(x => x.Name,
                hardy,
                lonely,
                brave,
                adamant,
                naughty,
                bold,
                docile,
                relaxed,
                impish,
                lax,
                timid,
                hasty,
                serious,
                jolly,
                naive,
                modest,
                mild,
                quiet,
                bashful,
                rash,
                calm,
                gentle,
                sassy,
                careful,
                quirky
                );*/

            context.SaveChanges();
        }
    }
}
