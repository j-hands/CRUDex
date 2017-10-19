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
            var bulbasaur = new Pokemon() { PokemonName = "bulbasaur", Formes = new List<Forme>() };
            var bulbasaurDefault = new Forme() { FormeName = "bulbasaur (Default)", Hp = 45, Att = 49, Def = 49, SpA = 65, SpD = 65, Spe = 45, Type1 = "grass", Type2 = "poison", Image = "/assets/artwork/001bulbasaur.png", MainPokemon = bulbasaur };
            bulbasaur.Formes.Add(bulbasaurDefault);

            var ivysaur = new Pokemon() { PokemonName = "ivysaur", Formes = new List<Forme>() };
            var ivysaurDefault = new Forme() { FormeName = "ivysaur (Default)", Hp = 60, Att = 62, Def = 63, SpA = 80, SpD = 80, Spe = 60, Type1 = "grass", Type2 = "poison", Image = "/assets/artwork/002ivysaur.png", MainPokemon = ivysaur };
            ivysaur.Formes.Add(ivysaurDefault);

            var venusaur = new Pokemon() { PokemonName = "venusaur", Formes = new List<Forme>() };
            var venusaurDefault = new Forme() { FormeName = "venusaur (Default)", Hp = 80, Att = 82, Def = 83, SpA = 100, SpD = 100, Spe = 80, Type1 = "grass", Type2 = "poison", Image = "/assets/artwork/003venusaur.png", MainPokemon = venusaur };
            var venusaurmega = new Forme() { FormeName = "mega venusaur", Hp = 80, Att = 100, Def = 123, SpA = 122, SpD = 120, Spe = 80, Type1 = "grass", Type2 = "poison", Image = "/assets/artwork/003venusaur-mega.png", MainPokemon = venusaur };
            venusaur.Formes.Add(venusaurDefault);
            venusaur.Formes.Add(venusaurmega);

            context.Pokemons.AddOrUpdate(x => x.PokemonName,
                bulbasaur,
                ivysaur,
                venusaur
                );

            context.Formes.AddOrUpdate(x => x.FormeName,
                bulbasaurDefault,
                ivysaurDefault,
                venusaurDefault,
                venusaurmega
                );

            context.SaveChanges();
        }
    }
}
