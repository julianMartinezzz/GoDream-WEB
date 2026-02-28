package com.godream.api.models;

import jakarta.persistence.*;

@Entity
@Table(name = "asesores")
public class Asesor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private String cargo;
    private String email;
    private String telefono;

    // Usamos Integer (Objeto) para que la comparación con null sea válida
    private Integer ventas;
    private Integer meta;

    // --- CONSTRUCTORES ---

    public Asesor() {
    }

    public Asesor(String nombre, String cargo, String email, String telefono) {
        this.nombre = nombre;
        this.cargo = cargo;
        this.email = email;
        this.telefono = telefono;
        this.ventas = 0;
        this.meta = 20;
    }

    // --- GETTERS Y SETTERS ---

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }

    public String getCargo() { return cargo; }
    public void setCargo(String cargo) { this.cargo = cargo; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getTelefono() { return telefono; }
    public void setTelefono(String telefono) { this.telefono = telefono; }

    public Integer getVentas() { return ventas; }
    public void setVentas(Integer ventas) { this.ventas = ventas; }

    public Integer getMeta() { return meta; }
    public void setMeta(Integer meta) { this.meta = meta; }
}