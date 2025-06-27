FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /app

# Copia todo el código del proyecto
COPY . .

# Usa comillas dobles para nombres con espacios
RUN dotnet restore "API Rest backend.csproj"

RUN dotnet publish "API Rest backend.csproj" -c Release -o out

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS runtime
WORKDIR /app
COPY --from=build /app/out .

EXPOSE 80

ENTRYPOINT ["dotnet", "API Rest backend.dll"]
