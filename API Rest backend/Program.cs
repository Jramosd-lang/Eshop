using API_Rest_backend.Models;
using Microsoft.EntityFrameworkCore;
using EcomerceContext = API_Rest_backend.Models.EcomerceContext;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configuraci�n de base de datos seg�n el entorno
if (builder.Environment.IsDevelopment())
{
    // Desarrollo: SQL Server local
    builder.Services.AddDbContext<EcomerceContext>(options =>
    {
        options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
    });
}
else
{
    // Producci�n: PostgreSQL en Railway
    // Primero intenta obtener de variable de entorno DATABASE_URL, si no existe usa RailwayConnection del appsettings
    var connectionString = Environment.GetEnvironmentVariable("DATABASE_URL")
                          ?? builder.Configuration.GetConnectionString("RailwayConnection");

    if (string.IsNullOrEmpty(connectionString))
    {
        throw new InvalidOperationException("No se encontr� cadena de conexi�n para producci�n");
    }

    builder.Services.AddDbContext<EcomerceContext>(options =>
    {
        options.UseNpgsql(connectionString);
    });
}

// CORS configurado para desarrollo y producci�n
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigins", policy =>
    {
        if (builder.Environment.IsDevelopment())
        {
            // Desarrollo: permitir localhost
            policy.WithOrigins("http://localhost:3000", "http://localhost:3001")
                  .AllowAnyMethod()
                  .AllowAnyHeader()
                  .AllowCredentials();
        }
        else
        {
            // Producci�n: permitir tu dominio de Vercel
            policy.WithOrigins("https://tu-app.vercel.app") // Cambia por tu URL de Vercel
                  .AllowAnyMethod()
                  .AllowAnyHeader()
                  .AllowCredentials();
        }
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Configurar puerto para Railway
var port = Environment.GetEnvironmentVariable("PORT") ?? "8080";
if (!app.Environment.IsDevelopment())
{
    app.Urls.Add($"http://0.0.0.0:{port}");
}

// Remover UseHttpsRedirection en producci�n ya que Railway maneja esto
if (app.Environment.IsDevelopment())
{
    app.UseHttpsRedirection();
}

app.UseCors("AllowSpecificOrigins");
app.UseAuthorization();
app.MapControllers();

app.Run();