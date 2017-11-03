using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CrudexBackend.Models
{
    public class Pokemon
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Forme> Formes { get; set; }
    }
}