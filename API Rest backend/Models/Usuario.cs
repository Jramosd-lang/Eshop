using System;
using System.Collections.Generic;

namespace API_Rest_backend.Models;

public partial class Usuario
{
    public int Id { get; set; }

    public string? Nombre { get; set; }

    public DateOnly? Fecha { get; set; }

    public string? Clave { get; set; }

    public string? Apellido { get; set; }

    public string? Correo { get; set; }
}
