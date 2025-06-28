

using API_Rest_backend.Models;
using Microsoft.EntityFrameworkCore;
using EcomerceContext = API_Rest_backend.Models.EcomerceContext;

var builder = WebApplication.CreateBuilder(args);

// Servicios básicos
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configuración de base de datos
if (builder.Environment.IsDevelopment())
{
    builder.Services.AddDbContext<EcomerceContext>(options =>
        options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
}
else
{
    // Usar DATABASE_URL que ya incluye todo
    var databaseUrl = Environment.GetEnvironmentVariable("DATABASE_URL");

    if (!string.IsNullOrEmpty(databaseUrl))
    {
        builder.Services.AddDbContext<EcomerceContext>(options =>
        {
            options.UseNpgsql(databaseUrl);
        });
    }
    else
    {
        throw new InvalidOperationException("DATABASE_URL no encontrada");
    }
}

// CORS
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
            policy.WithOrigins("eshop-lm8q-qdsm25kln-jefersons-projects-64262c4d.vercel.app")
                  .AllowAnyMethod()
                  .AllowAnyHeader()
                  .AllowCredentials();
        }
    });
});

var app = builder.Build();

// Swagger solo en desarrollo
if (app.Environment.IsDevelopment())
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
        var host = Environment.GetEnvironmentVariable("PGHOST");
        var database = Environment.GetEnvironmentVariable("PGDATABASE");
        var user = Environment.GetEnvironmentVariable("PGUSER");

        return $"Variables BD: HOST={host}, DB={database}, USER={user}";
    }
    catch (Exception ex)
    {
        return $" Error: {ex.Message}";
    }
});

app.MapGet("/test-connection", async (IServiceProvider services) => {
    try
    {
        using var scope = services.CreateScope();
        var context = scope.ServiceProvider.GetRequiredService<EcomerceContext>();
        var canConnect = await context.Database.CanConnectAsync();
        return canConnect ? "Conexión a BD exitosa!" : " No se puede conectar a BD";
    }
    catch (Exception ex)
    {
        return $" Error de conexión: {ex.Message}";
    }
});


// Configurar puerto para Railway
var portLocal = Environment.GetEnvironmentVariable("PORT") ?? "5432";
if (!app.Environment.IsDevelopment())
{
    app.Urls.Add($"http://0.0.0.0:{portLocal}");
}

app.UseCors("AllowSpecificOrigins");
app.UseAuthorization();
app.MapControllers();

app.Run();


app.UseCors("AllowSpecificOrigins");
app.UseAuthorization();





app.MapControllers();

app.Run();