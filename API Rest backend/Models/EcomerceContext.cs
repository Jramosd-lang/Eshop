using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace API_Rest_backend.Models;

public partial class EcomerceContext : DbContext
{
    public EcomerceContext()
    {
    }

    public EcomerceContext(DbContextOptions<EcomerceContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Product> Products { get; set; }
    public virtual DbSet<Usuario> Usuarios { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Detectar si estamos usando PostgreSQL o SQL Server
        var isPostgreSQL = Database.IsNpgsql();

        modelBuilder.Entity<Product>(entity =>
        {
            if (isPostgreSQL)
            {
                // Configuración para PostgreSQL (Railway)
                entity.HasKey(e => e.IdProduct);
                entity.ToTable("products"); // PostgreSQL usa nombres en minúsculas
                entity.Property(e => e.IdProduct)
                    .UseIdentityColumn() // PostgreSQL usa IDENTITY
                    .HasColumnName("id_product");
                entity.Property(e => e.DescriptionProduct).HasColumnName("description_product");
                entity.Property(e => e.NameProduct)
                    .HasMaxLength(100)
                    .HasColumnName("name_product");
                entity.Property(e => e.UrlImage)
                    .HasMaxLength(255)
                    .HasColumnName("url_image");
                entity.Property(e => e.ValueProduct)
                    .HasColumnType("decimal(10, 2)")
                    .HasColumnName("value_product");
            }
            else
            {
                // Configuración original para SQL Server (desarrollo)
                entity.HasKey(e => e.IdProduct).HasName("PK__products__774C6C3FB88D2D97");
                entity.ToTable("products");
                entity.Property(e => e.IdProduct).HasColumnName("Id_product");
                entity.Property(e => e.DescriptionProduct).HasColumnName("Description_product");
                entity.Property(e => e.NameProduct)
                    .HasMaxLength(100)
                    .HasColumnName("Name_product");
                entity.Property(e => e.UrlImage)
                    .HasMaxLength(255)
                    .HasColumnName("Url_image");
                entity.Property(e => e.ValueProduct)
                    .HasColumnType("decimal(10, 2)")
                    .HasColumnName("Value_product");
            }
        });

        modelBuilder.Entity<Usuario>(entity =>
        {
            if (isPostgreSQL)
            {
                // Configuración para PostgreSQL (Railway)
                entity.HasKey(e => e.Id);
                entity.ToTable("Claves"); // Nombre de la tabla que creaste en Railway
                entity.Property(e => e.Id)
                    .UseIdentityColumn() // PostgreSQL usa IDENTITY
                    .HasColumnName("Id");
                entity.Property(e => e.Apellido)
                    .HasColumnName("Apellido");
                entity.Property(e => e.Clave)
                    .HasColumnName("Clave");
                entity.Property(e => e.Correo)
                    .HasColumnName("Correo");
                entity.Property(e => e.Nombre)
                    .HasColumnName("Nombre");
                entity.Property(e => e.Fecha)
                    .HasColumnName("Fecha");
            }
            else
            {
                // Configuración original para SQL Server (desarrollo)
                entity.HasKey(e => e.Id).HasName("PK__Usuarios__3214EC076EB8EAB1");
                entity.Property(e => e.Apellido)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("apellido");
                entity.Property(e => e.Clave)
                    .HasMaxLength(50)
                    .IsUnicode(false);
                entity.Property(e => e.Correo)
                    .HasMaxLength(70)
                    .IsUnicode(false)
                    .HasColumnName("correo");
                entity.Property(e => e.Nombre)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            }
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}