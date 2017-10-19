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
    public class FormesController : ApiController
    {
        private CrudexBackendContext db = new CrudexBackendContext();

        // GET: api/Formes
        public IQueryable<Forme> GetFormes()
        {
            return db.Formes;
        }

        // GET: api/Formes/5
        [ResponseType(typeof(Forme))]
        public async Task<IHttpActionResult> GetForme(int id)
        {
            Forme forme = await db.Formes.FindAsync(id);
            if (forme == null)
            {
                return NotFound();
            }

            return Ok(forme);
        }

        // PUT: api/Formes/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutForme(int id, Forme forme)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != forme.FormeId)
            {
                return BadRequest();
            }

            db.Entry(forme).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FormeExists(id))
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

        // POST: api/Formes
        [ResponseType(typeof(Forme))]
        public async Task<IHttpActionResult> PostForme(Forme forme)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Formes.Add(forme);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = forme.FormeId }, forme);
        }

        // DELETE: api/Formes/5
        [ResponseType(typeof(Forme))]
        public async Task<IHttpActionResult> DeleteForme(int id)
        {
            Forme forme = await db.Formes.FindAsync(id);
            if (forme == null)
            {
                return NotFound();
            }

            db.Formes.Remove(forme);
            await db.SaveChangesAsync();

            return Ok(forme);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool FormeExists(int id)
        {
            return db.Formes.Count(e => e.FormeId == id) > 0;
        }
    }
}