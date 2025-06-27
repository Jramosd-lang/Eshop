# Imagen base del SDK de .NET para compilar
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /app

# Copia todo el código al contenedor
COPY . .

# Restaurar dependencias usando el nombre exacto de tu proyecto
RUN dotnet restore "./API Rest backend.csproj"

# Publicar el proyecto (compilación final)
RUN dotnet publish "./API Rest backend.csproj" -c Release -o out

# Imagen base para producción con el runtime
FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS runtime
WORKDIR /app
COPY --from=build /app/out .

# Expone el puerto (puede ser 80 o el que uses en Railway)
EXPOSE 80

# Comando de inicio
ENTRYPOINT ["dotnet", "API Rest backend.dll"]
