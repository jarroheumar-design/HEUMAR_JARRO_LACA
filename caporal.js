
document.getElementById('btnVerificarTalla').addEventListener('click', function() {
  const estatura = parseInt(document.getElementById('numEstatura').value);
  let tallaSugerida = "";
  let detallesCorte = "";

  if (isNaN(estatura) || estatura < 120 || estatura > 220) {
    document.getElementById('logTallas').textContent = ">> [ERROR]: Por favor ingrese una estatura válida entre 120 y 220 cm.";
    return;
  }

  if (estatura >= 120 && estatura < 155) {
    tallaSugerida = "Talla S (Corte Juvenil)";
    detallesCorte = "Ajuste entallado, chaleco de 45cm de longitud, botas sugeridas hasta talla 37.";
  } else if (estatura >= 155 && estatura < 175) {
    tallaSugerida = "Talla M (Corte Estándar)";
    detallesCorte = "Patrón regular, chaleco de 55cm de longitud, botas sugeridas de la 38 a la 40.";
  } else if (estatura >= 175 && estatura < 190) {
    tallaSugerida = "Talla L (Corte Oficial de Gala)";
    detallesCorte = "Estructura reforzada en hombros, chaleco de 65cm, botas sugeridas de la 41 a la 43.";
  } else {
    tallaSugerida = "Talla XL (Corte Especial)";
    detallesCorte = "Fabricación bajo medidas personalizadas en nuestros talleres artesanales.";
  }
  const resultado = `ANÁLISIS DE PATRÓN TEXTIL COMPLETADO
ESTATURA PROCESADA : ${estatura} cm
DIAGNÓSTICO        : ${tallaSugerida}
DETALLES TÉCNICOS  : ${detallesCorte}
>> [ESTADO]: Listo para reservar en la terminal de tienda.html`;

  document.getElementById('logTallas').textContent = resultado;
});