using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CrudexBackend.Models
{
    public class Pokemon
    {
        public int PokemonId { get; set; }
        public string PokemonName { get; set; }

        public ICollection<Forme> Formes { get; set; }
    }
}