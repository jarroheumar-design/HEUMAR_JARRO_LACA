document.getElementById('formReserva').addEventListener('submit', function(evento) {
  evento.preventDefault();

  const nombreUsuario = document.getElementById('txtNombre').value;
  const correoUsuario = document.getElementById('txtEmail').value;
  const costoDiario = parseFloat(document.getElementById('selTraje').value);
  const comboTraje = document.getElementById('selTraje');
  const nombreTraje = comboTraje.options[comboTraje.selectedIndex].text.split('—')[0].trim();
  const diasAlquiler = parseInt(document.getElementById('numDias').value);
  const notasAdicionales = document.getElementById('txtMensaje').value || "Ninguna";

  let costoInicial = costoDiario * diasAlquiler;
  let descuento = 0;
  let mensajeDescuento = "No califica para descuento (Mínimo de 4 días requeridos).";

  if (diasAlquiler >= 4 && diasAlquiler < 7) {
    descuento = costoInicial * 0.10; 
    mensajeDescuento = "¡Descuento del 10% aplicado por alquiler de mediano plazo!";
  } else if (diasAlquiler >= 7) {
    descuento = costoInicial * 0.20; 
    mensajeDescuento = "¡Descuento del 20% de Gran Fraternidad aplicado con éxito!";
  }

  let costoTotalFinal = costoInicial - descuento;
  const outputLogs = `[LOG] - INICIANDO PROCESAMIENTO DINÁMICO DE DATOS
CLIENTE REGISTRADO : ${nombreUsuario.toUpperCase()}
CONTACTO           : ${correoUsuario}
PRENDA SOLICITADA  : ${nombreTraje}
TIEMPO ESTIMADO    : ${diasAlquiler} Día(s)
NOTAS ADICIONALES  : ${notasAdicionales}

[CÁLCULO DE VALORES EN TIEMPO REAL]
> Costo Bruto Base : Bs. ${costoInicial.toFixed(2)}
> Estado Promoción : ${mensajeDescuento}
> Rebaja Otorgada  : Bs. ${descuento.toFixed(2)}
>>> NETO A PAGAR    : Bs. ${costoTotalFinal.toFixed(2)}
[ESTADO INTERNO]   : Transacción verificada sin pérdidas de memoria.`;

  document.getElementById('logTerminal').textContent = outputLogs;
});