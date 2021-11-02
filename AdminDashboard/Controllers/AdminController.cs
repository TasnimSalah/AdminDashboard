using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AdminDashboard.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "Administrator")]
    public class AdminController : ControllerBase
    {

        [HttpGet("Claims")]
        public IActionResult GetClaims()
        {
            var claims = User.Claims
                .Select(c => new { c.Type, c.Value })
                .ToList();
            return Ok(claims);
        }
    }
}
