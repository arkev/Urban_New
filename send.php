<?		
$MailTo="yosoy@arkev.com";
$nombre=$_POST['nombre'];
$empresa=$_POST['empresa'];
$mail=$_POST['mail'];
$mensaje=$_POST['mensaje'];
$contenido='
Nombre: '.utf8_decode($nombre).' 
E-mail: '.utf8_decode($mail).'
Empresa: '.utf8_decode($empresa).' 
----------------------------------------------------------
Mensaje: '.utf8_decode($mensaje).'
';
mail($MailTo, "$Subject $nombre ha escrito un mensaje en altamirawater.com", $contenido, "From: $mail");
?>