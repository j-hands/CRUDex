using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CrudexBackend.Models
{
    public class Nature
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double AttackMod { get; set; }
        public double DefenseMod { get; set; }
        public double SpAttackMod { get; set; }
        public double SpDefenseMod { get; set; }
        public double SpeedMod { get; set; }
    }
}