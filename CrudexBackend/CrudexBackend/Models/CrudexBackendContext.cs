using System.Data.Entity;

namespace CrudexBackend.Models
{
    public class CrudexBackendContext : DbContext
    {
        // You can add custom code to this file. Changes will not be overwritten.
        // 
        // If you want Entity Framework to drop and regenerate your database
        // automatically whenever you change your model schema, please use data migrations.
        // For more information refer to the documentation:
        // http://msdn.microsoft.com/en-us/data/jj591621.aspx
    
        public CrudexBackendContext() : base("name=CrudexBackendContext")
        {
            this.Database.Log = s => System.Diagnostics.Debug.WriteLine(s);
        }

        public DbSet<Forme> Formes { get; set; }

        public DbSet<Pokemon> Pokemons { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Pokemon>()
                .HasMany<Forme>(p => p.Formes)
                .WithRequired(f => f.MainPokemon);
        }
    }
}
