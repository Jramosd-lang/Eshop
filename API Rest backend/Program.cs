using API_Rest_backend.Models;
using Microsoft.EntityFrameworkCore;
using EcomerceContext = API_Rest_backend.Models.EcomerceContext;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configuración de base de datos según el entorno
if (builder.Environment.IsDevelopment())
{
    // Desarrollo: SQL Server local
    builder.Services.AddDbContext<EcomerceContext>(options =>
    {
        options.UseSqlServer(builder.Configuration.GetConnectionString("CadenaSQL"));
    });
}
else
{
    // Producción: PostgreSQL en Railway
    var connectionString = Environment.GetEnvironmentVariable("DATABASE_URL");
    builder.Services.AddDbContext<EcomerceContext>(options =>
    {
        options.UseNpgsql(connectionString);
    });
}

// CORS configurado para desarrollo y producción
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
            // Producción: permitir tu dominio de Vercel
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

app.UseHttpsRedirection();
app.UseCors("AllowSpecificOrigins");
app.UseAuthorization();
app.MapControllers();

app.Run();