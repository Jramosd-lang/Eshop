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
        modelBuilder.Entity<Product>(entity =>
        {
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
        });

        modelBuilder.Entity<Usuario>(entity =>
        {
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
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
