using System.ComponentModel.DataAnnotations;

namespace API_Rest_backend.Models
{
    public partial class Usuario
    {
        public int Id { get; set; }

        [MaxLength(50)]
        public string? Nombre { get; set; }

        public DateTime? Fecha { get; set; } // Campo que agregaste en Railway

        [MaxLength(50)]
        public string? Clave { get; set; }

        [MaxLength(30)]
        public string? Apellido { get; set; }

        [MaxLength(70)]
        public string? Correo { get; set; }
    }
}