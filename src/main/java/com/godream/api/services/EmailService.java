package com.godream.api.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void enviarConfirmacion(String destinatario, String nombreCliente) {
        SimpleMailMessage message = new SimpleMailMessage();

        // REEMPLAZA ESTO CON TU CORREO REAL
        message.setFrom("GoDream <juliand.martinez12@gmail.com>");
        message.setTo(destinatario);
        message.setSubject("🚀 ¡Bienvenido a la experiencia GoDream!");
        message.setText("Hola " + nombreCliente + ",\n\n" +
                "Gracias por interesarte en GoDream. Hemos recibido tus datos correctamente.\n" +
                "Un asesor experto se pondrá en contacto contigo muy pronto para " +
                "ayudarte a elegir el mejor plan de fibra óptica.\n\n" +
                "¡Prepárate para la máxima velocidad!\n\n" +
                "El equipo de GoDream.");

        mailSender.send(message);
    }
}