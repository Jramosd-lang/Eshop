

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
    connection = builder.Configuration.GetConnectionString("AZURE_SQL_CONNECTIONSTRING");
}
else
{
    connection = Environment.GetEnvironmentVariable("AZURE_SQL_CONNECTIONSTRING");
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
        return canConnect ? "Conexi�n a BD exitosa!" : " No se puede conectar a BD";
    }
    catch (Exception ex)
    {
        return $" Error de conexi�n: {ex.Message}";
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