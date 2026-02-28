package com.godream.api.controllers;

import com.godream.api.models.Lead;
import com.godream.api.repositories.LeadRepository;
import com.godream.api.services.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/leads")
@CrossOrigin(origins = "http://localhost:5173")
public class LeadController {

    @Autowired
    private LeadRepository leadRepository;

    @Autowired
    private EmailService emailService;

    @PostMapping
    public ResponseEntity<Lead> guardarLead(@RequestBody Lead lead) {
        // 1. Guardar en H2
        Lead nuevoLead = leadRepository.save(lead);

        // 2. Intentar enviar correo
        try {
            emailService.enviarConfirmacion(nuevoLead.getEmail(), nuevoLead.getNombre());
            System.out.println("✅ Registro guardado y correo enviado a: " + nuevoLead.getEmail());
        } catch (Exception e) {
            System.err.println("❌ Error en el envío de correo: " + e.getMessage());
            // Mostramos el error en consola para debuguear, pero el usuario recibe su OK de base de datos
        }

        return ResponseEntity.ok(nuevoLead);
    }

    @GetMapping
    public List<Lead> listarLeads() {
        return leadRepository.findAll();
    }
}