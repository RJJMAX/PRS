﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.EntityFrameworkCore;
using PRS.Models;

namespace PRS.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class RequestsController : ControllerBase {
        private readonly PRSDbContext _context;

        public RequestsController(PRSDbContext context) {
            _context = context;
        }

        // GET: api/Requests
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Request>>> GetRequests() {
            return await _context.Requests.ToListAsync();
        }

        // Get requests in "REVIEW" status and NOT owned by the user with the Primary Key
        // GET: api/Requests/reviews/{userId}
        [HttpGet("reviews/{userId}")]
        public async Task<ActionResult<IEnumerable<Request>>> GetRequestsInReview(int userId) {
            return await _context.Requests

                                        .Where(x => x.Status == "review" && userId != x.UserId)
                                        .ToListAsync();

        }

        // GET: api/Requests/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Request>> GetRequest(int id) {
            var request = await _context.Requests.FindAsync(id);

            if (request == null) {
                return NotFound();
            }

            return request;
        }


        // PUT: api/Requests/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRequest(int id, Request request) {
            if (id != request.Id) {
                return BadRequest();
            }

            _context.Entry(request).State = EntityState.Modified;

            try {
                await _context.SaveChangesAsync();
            } catch (DbUpdateConcurrencyException) {
                if (!RequestExists(id)) {
                    return NotFound();
                } else {
                    throw;
                }
            }

            return NoContent();
        }
        //_________________________________________________________________________________________________
        //Sets the status of the request for the id provided to "REJECTED"
        // PUT: api/Requests/reject/5
        [HttpPut("reject")]
        public async Task<IActionResult> Reject(int id, Request r) {
            r.Status = "REJECTED";
            return await PutRequest(id, r);
        }
        //________________________________________________________________________________________________

        //Sets the status of the request for the id provided to "APPROVED" if less than or equal to 50 otherwise its "REVIEW"
        // PUT: api/Requests/review/5

        [HttpPut("reviews/{id}")]

        public async Task<IActionResult> RevReq(int id, Request r) {

            if (r.Total <= 50) {
                r.Status = "APPROVED";

            } else {
                r.Status = "REVIEW";
            }


            return await PutRequest(id, r);
        }
        // sets the status of the request for the id provided to "APPROVED"
        //PUT: api/Requests/approve/5

        //    [HttpPut("/approval/{id}")]
        public async Task<IActionResult> Approval(int id, Request r) {
            r.Status = "APPROVED";
            return await PutRequest(id, r);
        }


        // POST: api/Requests
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Request>> PostRequest(Request request) {
            _context.Requests.Add(request);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRequest", new { id = request.Id }, request);
        }

        // DELETE: api/Requests/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRequest(int id) {
            var request = await _context.Requests.FindAsync(id);
            if (request == null) {
                return NotFound();
            }

            _context.Requests.Remove(request);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RequestExists(int id) {
            return _context.Requests.Any(e => e.Id == id);
        }

    }
}