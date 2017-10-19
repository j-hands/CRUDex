using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CrudexBackend.Models
{
    public class Nature
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int AttackMod { get; set; }
        public int DefenseMod { get; set; }
        public int SpAttackMod { get; set; }
        public int SpDefenseMod { get; set; }
        public int SpeedMod { get; set; }
    }
}