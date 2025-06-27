# Etapa de compilación
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copia todos los archivos al contenedor
COPY . ./

# Restaura paquetes NuGet
RUN dotnet restore "Backend.csproj"

# Publica la aplicación en modo Release
RUN dotnet publish "Backend.csproj" -c Release -o /app/publish

# Etapa final: contenedor ligero de runtime
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app

# Copia los archivos publicados desde el contenedor anterior
COPY --from=build /app/publish .

# Exponer el puerto por defecto
EXPOSE 80

# Iniciar la aplicación
ENTRYPOINT ["dotnet", "Backend.dll"]
