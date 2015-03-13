<?		
$MailTo="yosoy@arkev.com";
$nombre=$_POST['nombre'];
$mail=$_POST['mail'];
$mensaje=$_POST['mensaje'];
$contenido='
Nombre: '.utf8_decode($nombre).' 
E-mail: '.utf8_decode($mail).'
----------------------------------------------------------
Mensaje: '.utf8_decode($mensaje).'
';
mail($MailTo, "$Subject $nombre ha mandado un mensaje por medio de urbansigns.com.mx", $contenido, "From: $mail");
header('Location: gracias.html');
?>