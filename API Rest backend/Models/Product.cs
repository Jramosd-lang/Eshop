using System;
using System.Collections.Generic;

namespace API_Rest_backend.Models;

public partial class Product
{
    public int IdProduct { get; set; }

    public string NameProduct { get; set; } = null!;

    public string? UrlImage { get; set; }

    public int Stock { get; set; }

    public decimal ValueProduct { get; set; }

    public string? DescriptionProduct { get; set; }
}
