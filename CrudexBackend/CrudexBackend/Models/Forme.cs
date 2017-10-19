using System.ComponentModel.DataAnnotations.Schema;

namespace CrudexBackend.Models
{
    public class Forme
    {
        public int FormeId { get; set; }
        public string FormeName { get; set; }
        public int Hp { get; set; }
        public int Att { get; set; }
        public int Def { get; set; }
        public int SpA { get; set; }
        public int SpD { get; set; }
        public int Spe { get; set; }
        public string Type1 { get; set; }
        public string Type2 { get; set; }
        public string Image { get; set; }
        
        public int MainPokemonId { get; set; }
        //[ForeignKey("MainPokemonId")]
        public Pokemon MainPokemon { get; set; }
    }
}