

document.getElementById('btnCalcularGarantia').addEventListener('click', function() {
  const selectAccesorios = document.getElementById('selAccesorios');
  const montoGarantia = parseFloat(selectAccesorios.value);
  const textoAccesorio = selectAccesorios.options[selectAccesorios.selectedIndex].text.split('(')[0].trim();

  const costoAlquilerBase = 120.00; 
  const totalRequeridoInicial = costoAlquilerBase + montoGarantia;

  const outputLogs = `[LOG DE SEGURIDAD DIGITAL DE PRENDAS]
PRENDA PRINCIPAL   : Vestido de Cueca Cochabambina Estilizado
EQUIPO ADICIONAL   : ${textoAccesorio}
[ESTRUCTURA DE COSTOS EFECTIVOS]
> Canon Alquiler (1 Día)  : Bs. ${costoAlquilerBase.toFixed(2)}
> Depósito Reembolsable  : Bs. ${montoGarantia.toFixed(2)}

>>> DESEMBOLSO INICIAL   : Bs. ${totalRequeridoInicial.toFixed(2)}

* ESTO ES TODO EL MONTO DEBIDO AL PRESTAMO.`;

  document.getElementById('logCueca').textContent = outputLogs;
});