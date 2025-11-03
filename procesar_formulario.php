<?php
// Verificamos si el formulario fue enviado
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // Sanitizamos los datos
    $nombre = htmlspecialchars(trim($_POST["nombre"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $mensaje = htmlspecialchars(trim($_POST["mensaje"]));

    // Validamos que los campos no estén vacíos
    if (empty($nombre) || empty($email) || empty($mensaje)) {
        echo "<h3 style='color:red;'>⚠️ Por favor, completá todos los campos.</h3>";
        exit;
    }

    // Validamos formato del correo electrónico
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<h3 style='color:red;'>📧 Ingresá un correo válido.</h3>";
        exit;
    }

    // Configuramos el destinatario y el contenido del correo
    $destinatario = "tu-correo@ejemplo.com"; // 👉 Cambiá esto por tu correo real
    $asunto = "Consulta desde La Plantilla Perfecta para Ti";
    $cuerpo = "
        Nombre: $nombre\n
        Email: $email\n
        Mensaje:\n$mensaje
    ";

    // Cabeceras para el correo
    $cabeceras = "From: $email\r\n";
    $cabeceras .= "Reply-To: $email\r\n";
    $cabeceras .= "X-Mailer: PHP/" . phpversion();

    // Envío del correo
    if (mail($destinatario, $asunto, $cuerpo, $cabeceras)) {
        echo "<h3 style='color:green;'>✅ ¡Gracias por tu mensaje, $nombre! Te responderemos pronto.</h3>";
    } else {
        echo "<h3 style='color:red;'>❌ Ocurrió un error al enviar el mensaje. Intentalo más tarde.</h3>";
    }
} else {
    echo "<h3 style='color:red;'>Acceso no permitido.</h3>";
}
?>
