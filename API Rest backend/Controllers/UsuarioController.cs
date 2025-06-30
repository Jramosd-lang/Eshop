using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using API_Rest_backend.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Immutable;
using System.Reflection.Metadata.Ecma335;

namespace API_Rest_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {

        private readonly EcomerceContext context;

        public UsuarioController(EcomerceContext context)
        {
            this.context = context;
        }


        [HttpGet]
        [Route("GetUser")]
        public async Task<ActionResult<IEnumerable<Usuario>>> GetUsuarios()
        {
            try
            {
                var usuarios = await context.Usuarios.ToListAsync();
                return Ok(usuarios);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Error al obtener los usuarios: {ex.Message}");
            }
        }

        public class LoginDTO
        {
            public string correo { get; set; }
            public string clave { get; set; }
        }



        [HttpPost]
        [Route("Login")]
        public async Task<ActionResult<Usuario>> Login([FromBody] LoginDTO login)
        {
            try
            {
                if (!string.IsNullOrWhiteSpace(login.correo) && !string.IsNullOrWhiteSpace(login.clave))
                {
                    var usuario = await context.Usuarios.FirstOrDefaultAsync(p => p.Correo == login.correo && p.Clave == login.clave);

                    if (usuario == null)
                    {
                        return NotFound("correo o contraseña incorrectos");
                    }

                    return Ok(usuario);
                }
                else
                {
                    return BadRequest("Rellene todos los campos");
                }
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Error al loguear: {ex.Message}");
            }
        }

        [HttpGet]
        [Route("GetUser/{id:int}")]
        public async Task<ActionResult<Usuario>> GetUsuario(int id)
        {
            try
            {
                var usuario = await context.Usuarios.FindAsync(id);
                if (usuario == null)
                {
                    return NotFound($"Usuario con ID {id} no encontrado.");
                }
                return Ok(usuario);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Error al obtener el usuario: {ex.Message}");
            }
        }

        [HttpPost]
        [Route("CreateUser")]
        public async Task<ActionResult<Usuario>> CreateUsuario([FromBody] Usuario usuario)
        {
            if (usuario == null)
            {
                return BadRequest("El usuario no puede ser nulo.");
            }
            try
            {
                context.Usuarios.Add(usuario);
                await context.SaveChangesAsync();
                return CreatedAtAction(nameof(GetUsuario), new { id = usuario.Id }, usuario);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Error al crear el usuario: {ex.Message}");
            }
        }


        [HttpPut]
        [Route("UpdateUser/{id:int}")]
        public async Task<ActionResult<Usuario>> Modificar([FromBody] Usuario user)
        {
            if (user == null)
            {
                return BadRequest("El usuario no puede ser nulo.");
            }
            try
            {
                var usuarioExistente = await context.Usuarios.FindAsync(user.Id);
                if (usuarioExistente == null)
                {
                    return NotFound($"Usuario con ID {user.Id} no encontrado.");
                }
                usuarioExistente.Nombre = user.Nombre;
                usuarioExistente.Apellido = user.Apellido;
                usuarioExistente.Correo = user.Correo;
                usuarioExistente.Clave = user.Clave;
                context.Usuarios.Update(usuarioExistente);
                await context.SaveChangesAsync();
                return Ok(usuarioExistente);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Error al modificar el usuario: {ex.Message}");
            }
        }


        [HttpDelete]
        [Route("DeleteUser/{id:int}")]
        public async Task<ActionResult<Usuario>> Eliminar(int id)
        {
            try
            {
                var usuario = await context.Usuarios.FindAsync(id);
                if (usuario == null)
                {
                    return NotFound($"Usuario con ID {id} no encontrado.");
                }
                context.Usuarios.Remove(usuario);
                await context.SaveChangesAsync();
                return Ok(usuario);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Error al eliminar el usuario: {ex.Message}");
            }
        }
    }
}
