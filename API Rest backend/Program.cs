using API_Rest_backend.Models;
using Microsoft.EntityFrameworkCore;
using EcomerceContext = API_Rest_backend.Models.EcomerceContext;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


var connection = String.Empty;
if (builder.Environment.IsDevelopment())
{
    builder.Configuration.AddEnvironmentVariables().AddJsonFile("appsettings.Development.json");
    connection = builder.Configuration.GetConnectionString("DefaultConnection");
}
else
{
    connection = Environment.GetEnvironmentVariable("DefaultConnection");
}

builder.Services.AddDbContext<EcomerceContext>(options =>
    options.UseSqlServer(connection));


builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigins", policy =>
    {
        if (builder.Environment.IsDevelopment())
        {
            policy.WithOrigins("http://localhost:3000", "http://localhost:3001")
                  .AllowAnyMethod()
                  .AllowAnyHeader()
                  .AllowCredentials();
        }
        else
        {
            // Corregir URL de Vercel (agregar https://)
            policy.WithOrigins("https://eshop-lm8q-qdsm25kln-jefersons-projects-64262c4d.vercel.app")
                  .AllowAnyMethod()
                  .AllowAnyHeader()
                  .AllowCredentials();
        }
    });
});

var app = builder.Build();

// Migración de BD (con manejo de errores)
try
{
    using (var scope = app.Services.CreateScope())
    {
        var dbcontext = scope.ServiceProvider.GetRequiredService<EcomerceContext>();
        if (dbcontext.Database.IsRelational())
        {
            dbcontext.Database.Migrate();
        }
    }
}
catch (Exception ex)
{
    // Log el error pero no fallar la aplicación
    Console.WriteLine($"Error en migración: {ex.Message}");
}

// Swagger (habilitar temporalmente en producción para diagnóstico)
if (app.Environment.IsDevelopment() || app.Environment.IsProduction())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// HealthCheck
app.MapGet("/", () => "API funcionando correctamente! ---")
   .WithName("HealthCheck");

app.MapGet("/test", () => "Endpoint test funciona!");

app.MapGet("/test-db", () =>
{
    try
    {
        // Corregir para SQL Server
        var connectionString = app.Configuration.GetConnectionString("DefaultConnection");
        return $"Connection String configurado: {!string.IsNullOrEmpty(connectionString)}";
    }
    catch (Exception ex)
    {
        return $"Error: {ex.Message}";
    }
});

app.MapGet("/test-connection", async (IServiceProvider services) => {
    try
    {
        using var scope = services.CreateScope();
        var context = scope.ServiceProvider.GetRequiredService<EcomerceContext>();
        var canConnect = await context.Database.CanConnectAsync();
        return canConnect ? "Conexión a BD exitosa!" : " No se puede conectar a BD";
        return canConnect ? "Conexión a BD exitosa!" : " No se puede conectar a BD";
    }
    catch (Exception ex)
    {
        return $" Error de conexión: {ex.Message}";
        return $" Error de conexión: {ex.Message}";
    }
});

// Middleware pipeline
app.UseCors("AllowSpecificOrigins");
app.UseAuthorization();
app.MapControllers();

// Solo una llamada a Run()
app.Run();