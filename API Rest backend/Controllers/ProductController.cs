using API_Rest_backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API_Rest_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {

        private readonly EcomerceContext context;

        public ProductController(EcomerceContext context)
        {
            this.context = context;
        }

        [HttpGet]
        [Route("GetProducts")]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
        {
            try
            {
                var products = await context.Products.ToListAsync();
                return Ok(products);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Error al obtener los productos: {ex.Message}");
            }
        }
        [HttpGet]
        [Route("GetProduct/{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            try
            {
                var product = await context.Products.FindAsync(id);
                if (product == null)
                {
                    return NotFound("Producto no encontrado");
                }
                return Ok(product);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Error al obtener el producto: {ex.Message}");
            }
        }

        [HttpPost]
        [Route("AddProduct")]
        public async Task<ActionResult<Product>> AddProduct([FromBody] Product product)
        {
            try
            {
                if (product == null)
                {
                    return BadRequest("Producto no puede ser nulo");
                }
                context.Products.Add(product);
                await context.SaveChangesAsync();
                return CreatedAtAction(nameof(GetProduct), new { id = product.IdProduct }, product);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Error al agregar el producto: {ex.Message}");
            }



        }

        [HttpPut]
        [Route("UpdateProduct/{id}")]
        public async Task<ActionResult<Product>> UpdateProduct(int id, [FromBody] Product product)
        {
            try
            {
                if (id != product.IdProduct)
                {
                    return BadRequest("El ID del producto no coincide");
                }
                var existingProduct = await context.Products.FindAsync(id);
                if (existingProduct == null)
                {
                    return NotFound("Producto no encontrado");
                }
                existingProduct.NameProduct = product.NameProduct;
                existingProduct.DescriptionProduct = product.DescriptionProduct;
                existingProduct.ValueProduct = product.ValueProduct;
                existingProduct.UrlImage = product.UrlImage;
                context.Products.Update(existingProduct);
                await context.SaveChangesAsync();
                return Ok(existingProduct);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Error al actualizar el producto: {ex.Message}");
            }
        }
    }
}