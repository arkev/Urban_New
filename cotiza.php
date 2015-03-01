<?		
$MailTo="yosoy@arkev.com";
$anuncio=$_POST['tanuncio'];
$nombre=$_POST['cnombre'];
$mail=$_POST['cmail'];
$telefono=$_POST['ctelefono'];
$alto=$_POST['alto'];
$ancho=$_POST['ancho'];
$sentero=$_POST['sentero'];
$observaciones=$_POST['observaciones'];
$contenido='
Nombre: '.utf8_decode($nombre).' 
E-mail: '.utf8_decode($mail).'
Teléfono: '.utf8_decode($telefono).' 
Tipo de anuncio: '.utf8_decode($anuncio).' 
Ancho: '.utf8_decode($ancho).'mts 
Alto: '.utf8_decode($alto).'mts
Se enteró por medio de: '.utf8_decode($sentero).' 
----------------------------------------------------------
Observaciones: '.utf8_decode($observaciones).'
';
mail($MailTo, "$Subject $nombre ha solicitado una cotización en urbansigns.com.mx", $contenido, "From: $mail");
header('Location: gracias.html');
?>