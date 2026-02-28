package com.godream.api.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void enviarConfirmacion(String destinatario, String nombre, String plan, String estrato) {
        SimpleMailMessage message = new SimpleMailMessage();

        message.setTo(destinatario);
        message.setSubject("¡Bienvenido a la experiencia GoDream! 🚀");

        String contenido = "Hola " + nombre + ",\n\n" +
                "¡Gracias por elegir GoDream! Hemos recibido tu solicitud de instalación con los siguientes detalles:\n\n" +
                "📌 Plan seleccionado: " + plan + "\n" +
                "🏠 Estrato informado: " + estrato + "\n\n" +
                "Uno de nuestros asesores técnicos se comunicará contigo en las próximas 24 horas para programar la visita de instalación.\n\n" +
                "¡Prepárate para volar con la mejor conexión!\n\n" +
                "Atentamente,\n" +
                "El equipo de GoDream.";

        message.setText(contenido);

        mailSender.send(message);
    }
}