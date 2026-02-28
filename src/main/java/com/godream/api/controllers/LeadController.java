package com.godream.api.controllers;

import com.godream.api.models.Lead;
import com.godream.api.repositories.LeadRepository;
import com.godream.api.services.EmailService; // <--- Asegúrate de que este import esté
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/leads")
@CrossOrigin(origins = "*", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PATCH, RequestMethod.OPTIONS})
public class LeadController {

    @Autowired
    private LeadRepository repository;

    @Autowired
    private EmailService emailService; // <--- 1. Inyectamos el servicio de correo

    @GetMapping
    public List<Lead> listarTodos() {
        return repository.findAll();
    }

    @PostMapping
    public Lead guardar(@RequestBody Lead lead) {
        if (lead.getEstado() == null) lead.setEstado("NUEVO");

        // 2. Guardamos el lead en la base de datos
        Lead nuevoLead = repository.save(lead);

        // 3. Intentamos enviar el correo de confirmación
        try {
            emailService.enviarConfirmacion(
                    nuevoLead.getEmail(),
                    nuevoLead.getNombre(),
                    nuevoLead.getPlan(),
                    nuevoLead.getEstrato()
            );
            System.out.println("✅ Correo enviado con éxito a: " + nuevoLead.getEmail());
        } catch (Exception e) {
            // Si el correo falla, imprimimos el error en la consola de IntelliJ pero el lead queda guardado
            System.err.println("❌ Error al enviar correo: " + e.getMessage());
            e.printStackTrace();
        }

        return nuevoLead;
    }

    @PatchMapping("/{id}/estado")
    public ResponseEntity<Lead> actualizarEstado(@PathVariable Long id, @RequestBody Map<String, String> body) {
        return repository.findById(id).map(lead -> {
            String nuevoEstado = body.get("estado");
            lead.setEstado(nuevoEstado);
            repository.save(lead);
            return ResponseEntity.ok(lead);
        }).orElse(ResponseEntity.notFound().build());
    }
}