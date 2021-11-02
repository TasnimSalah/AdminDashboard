using AdminDashboard.JwtAuth;
using AdminDashboard.Models;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AdminDashboard.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<User> _userManager;
        private readonly JwtService _jwtService;

        public AccountController(UserManager<User> userManager , JwtService jwtService )
        {
            _userManager = userManager;
            _jwtService = jwtService;
        }


        [HttpPost("Registration")]
        public async Task<IActionResult> RegisterUser([FromBody] UserRegistrationModel userForRegistration)
        {
            if (userForRegistration == null || !ModelState.IsValid)
                return BadRequest();
            var existingUser = await _userManager.FindByEmailAsync(userForRegistration.Email);
            if(existingUser != null)
            {
                return BadRequest(new RegistrationResponseModel() { Errors = new string[] { "this email is already in use" } });
            }

            //var user = _mapper.Map<User>(userForRegistration);
            var user = new User() { FirstName = userForRegistration.FirstName, LastName = userForRegistration.LastName, Email = userForRegistration.Email , UserName = userForRegistration.UserName };
            var result = await _userManager.CreateAsync(user, userForRegistration.Password);
            if (!result.Succeeded)
            {
                var errors = result.Errors.Select(e => e.Description);

                return BadRequest(new RegistrationResponseModel { Errors = errors });
            }

            await _userManager.AddToRoleAsync(user, "User");
            return StatusCode(201);
        }
        
        [HttpPost("LogIn")]
        public async Task<IActionResult> LogInUser([FromBody] LogInModel loginUser)
        {
            if (loginUser == null || !ModelState.IsValid)
                return BadRequest();

            var User = await _userManager.FindByEmailAsync(loginUser.Email);
            if(User == null || ! await _userManager.CheckPasswordAsync(User , loginUser.Password))
            {
                return Unauthorized(new LogInResponseModel() { ErrorMessage = "Invalid UserName or Password"});
            }

            var signingCredentials = _jwtService.GetSigningCredentials();
            var claims = await _jwtService.GetClaims(User);
            var tokenOptions = _jwtService.GenerateTokenOptions(signingCredentials, claims);
            var token = new JwtSecurityTokenHandler().WriteToken(tokenOptions);
            return Ok(new LogInResponseModel { IsAuthSuccessful = true, Token = token });
        }




        // GET: api/<AccountController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<AccountController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<AccountController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<AccountController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<AccountController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
