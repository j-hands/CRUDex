using System;
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
    public class NaturesController : ApiController
    {
        private CrudexBackendContext db = new CrudexBackendContext();

        // GET: api/Natures
        public IQueryable<Nature> GetNatures()
        {
            return db.Natures;
        }

        // GET: api/Natures/5
        [ResponseType(typeof(Nature))]
        public async Task<IHttpActionResult> GetNature(int id)
        {
            Nature nature = await db.Natures.FindAsync(id);
            if (nature == null)
            {
                return NotFound();
            }

            return Ok(nature);
        }

        // PUT: api/Natures/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutNature(int id, Nature nature)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != nature.Id)
            {
                return BadRequest();
            }

            db.Entry(nature).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NatureExists(id))
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

        // POST: api/Natures
        [ResponseType(typeof(Nature))]
        public async Task<IHttpActionResult> PostNature(Nature nature)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Natures.Add(nature);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = nature.Id }, nature);
        }

        // DELETE: api/Natures/5
        [ResponseType(typeof(Nature))]
        public async Task<IHttpActionResult> DeleteNature(int id)
        {
            Nature nature = await db.Natures.FindAsync(id);
            if (nature == null)
            {
                return NotFound();
            }

            db.Natures.Remove(nature);
            await db.SaveChangesAsync();

            return Ok(nature);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool NatureExists(int id)
        {
            return db.Natures.Count(e => e.Id == id) > 0;
        }
    }
}