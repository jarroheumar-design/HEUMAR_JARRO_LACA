
document.getElementById('btnCalcularPeso').addEventListener('click', function() {
  const material = document.getElementById('selMaterial').value;
  let pesoMascara = 0;
  let pesoRestoTraje = 6.5;
  let advertenciaSalud = "";

  if (material === "fibra") {
    pesoMascara = 2.2;
    advertenciaSalud = "Excelente balance ergonómico. Recomendado para recorridos largos de más de 4 km.";
  } else if (material === "yeso") {
    pesoMascara = 5.8;
    advertenciaSalud = "Carga física severa en la zona cervical. Se sugiere entrenamiento previo de cuello y hombros.";
  }

  let pesoTotal = pesoMascara + pesoRestoTraje;

  const logsSalida = `[CÓMPUTO DE CARGA OPERATIVA DE LA INDUMENTARIA]

MODELO PRENDA      : Lucifer Súper Premium (Bordado Denso)
MATERIAL MÁSCARA   : ${material === 'fibra' ? 'Fibra de Vidrio Avanzada' : 'Yeso y Pasta Clásica'}
[MÉTRICAS DE DISTRIBUCIÓN DE MASA]
> Peso de la Máscara : ${pesoMascara.toFixed(1)} Kg
> Peso de Accesorios  : ${pesoRestoTraje.toFixed(1)} Kg
>>> MASA TOTAL NETO  : ${pesoTotal.toFixed(1)} Kg
[RECOMENDACIÓN]    : ${advertenciaSalud}`;

  document.getElementById('logDiablada').textContent = logsSalida;
});