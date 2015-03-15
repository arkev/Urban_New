<?
mb_internal_encoding( 'UTF-8' );
$MailTo="yosoy@arkev.com";
$anuncio=$_POST['tanuncio'];
$nombre=$_POST['cnombre'];
$mail=$_POST['cmail'];
$telefono=$_POST['ctelefono'];
$alto=$_POST['alto'];
$ancho=$_POST['ancho'];
$sentero=$_POST['sentero'];
$observaciones=$_POST['observaciones'];
$Subject="$nombre ha solicitado una cotización en urbansigns.com.mx";
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";
$headers .= "From: '$mail'" . "\r\n";
$contenido='
<html>
<head>
  <title>C&oacute;tizaci&oacute;n v&iacute;a UrbanSigns.com.mx</title>
  <meta charset="utf-8">
</head>
<body>
  <p>Estos son los datos de la cotizaci&oacute;n</p>
  <table>
    <tr>
      <td>Nombre:</td><td>'.utf8_encode($nombre).'</td>
    </tr>
	<tr>
      <td>E-mail:</td><td>'.utf8_encode($mail).'</td>
    </tr>
	<tr>
      <td>Tel&eacute;fono:</td><td>'.utf8_encode($telefono).'</td>
    </tr>
	<tr>
      <td>Tipo de anuncio:</td><td>'.utf8_encode($anuncio).' </td>
    </tr>
	<tr>
      <td>Ancho:</td><td>'.utf8_encode($ancho).'mts</td>
    </tr>
	<tr>
      <td>Alto:</td><td>'.utf8_encode($alto).'mts</td>
    </tr>
	<tr>
      <td>Se enter&oacute; por medio de:</td><td>'.utf8_encode($sentero).'</td>
    </tr>
  </table>
  <p>Observaciones: '.utf8_encode($observaciones).'</p>
</body>
</html>
';
$cad= utf8_decode($contenido);
mail($MailTo, $Subject, $cad, $headers);
header('Location: gracias.html');
?>