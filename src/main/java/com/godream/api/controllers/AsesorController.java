
package com.godream.api.controllers;

import com.godream.api.models.Asesor;
import com.godream.api.repositories.AsesorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/asesores")
// Cambia el "*" por la URL exacta de tu proyecto React
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class AsesorController {

    @Autowired
    private AsesorRepository asesorRepository;

    // Obtener todos los asesores
    @GetMapping
    public List<Asesor> getAllAsesores() {
        return asesorRepository.findAll();
    }

    // Crear un nuevo asesor
    @PostMapping
    public Asesor createAsesor(@RequestBody Asesor asesor) {
        // Aseguramos que los campos numéricos tengan valor si llegan null
        if (asesor.getVentas() == null) {
            asesor.setVentas(0);
        }
        if (asesor.getMeta() == null) {
            asesor.setMeta(20);
        }

        // Si el cargo llega vacío, ponemos uno por defecto
        if (asesor.getCargo() == null || asesor.getCargo().trim().isEmpty()) {
            asesor.setCargo("Asesor Comercial");
        }

        return asesorRepository.save(asesor);
    }

    // Eliminar un asesor
    @DeleteMapping("/{id}")
    public void deleteAsesor(@PathVariable Long id) {
        asesorRepository.deleteById(id);
    }
}