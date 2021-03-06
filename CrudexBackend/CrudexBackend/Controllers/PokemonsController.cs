﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using CrudexBackend.Models;

namespace CrudexBackend.Controllers
{
    public class PokemonsController : ApiController
    {
        private CrudexBackendContext db = new CrudexBackendContext();

        // GET: api/Pokemons
        [Route("api/Pokemons")]
        [HttpGet]
        public IQueryable<Pokemon> GetPokemons()
        {
            return db.Pokemons;
        }

        // GET: api/Pokemons/5
        [ResponseType(typeof(Pokemon))]
        [Route("api/Pokemons/{id}")]
        [HttpGet]
        public async Task<IHttpActionResult> GetPokemon(int id)
        {
            Pokemon pokemon = await db.Pokemons.FindAsync(id);
            if (pokemon == null)
            {
                return NotFound();
            }

            return Ok(pokemon);
        }

        // PUT: api/Pokemons/5
        [ResponseType(typeof(void))]
        [Route("api/Pokemons/{id}")]
        [HttpPut]
        public async Task<IHttpActionResult> PutPokemon(int id, [FromBody] Pokemon pokemon)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pokemon.Id)
            {
                return BadRequest();
            }

            db.Entry(pokemon).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PokemonExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Pokemons
        [ResponseType(typeof(Pokemon))]
        [Route("api/Pokemons")]
        [HttpPost]
        public async Task<IHttpActionResult> PostPokemon(Pokemon pokemon)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Pokemons.Add(pokemon);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { controller = "pokemons", id = pokemon.Id }, pokemon);
        }

        // DELETE: api/Pokemons/5
        [ResponseType(typeof(Pokemon))]
        [Route("api/Pokemons/{id}")]
        [HttpDelete]
        public async Task<IHttpActionResult> DeletePokemon(int id)
        {
            Pokemon pokemon = await db.Pokemons.FindAsync(id);
            if (pokemon == null)
            {
                return NotFound();
            }

            db.Pokemons.Remove(pokemon);
            await db.SaveChangesAsync();

            return Ok(pokemon);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PokemonExists(int id)
        {
            return db.Pokemons.Count(e => e.Id == id) > 0;
        }
    }
}