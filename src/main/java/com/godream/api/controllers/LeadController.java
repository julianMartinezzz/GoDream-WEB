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
@CrossOrigin(origins = "http://localhost:5173") // Conexión con Vite/React
public class LeadController {

    @Autowired
    private LeadRepository leadRepository;

    @Autowired
    private EmailService emailService;

    @PostMapping
    public ResponseEntity<Lead> guardarLead(@RequestBody Lead lead) {
        // Guardamos el lead con los datos de estrato y plan que vienen de React
        Lead nuevoLead = leadRepository.save(lead);

        try {
            // Notificamos al cliente y al equipo de ventas con la información completa
            emailService.enviarConfirmacion(
                    nuevoLead.getEmail(),
                    nuevoLead.getNombre(),
                    nuevoLead.getPlan(),
                    nuevoLead.getEstrato()
            );
            System.out.println("✅ Lead procesado con éxito: " + nuevoLead.getNombre() + " - Estrato " + nuevoLead.getEstrato());
        } catch (Exception e) {
            System.err.println("❌ El lead se guardó pero falló el envío del correo: " + e.getMessage());
        }

        return ResponseEntity.ok(nuevoLead);
    }

    @GetMapping
    public List<Lead> listarLeads() {
        return leadRepository.findAll();
    }
}