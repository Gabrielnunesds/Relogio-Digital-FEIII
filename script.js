function atualizarRelogio() {
  const agora = new Date();
  const hora = String(agora.getHours()).padStart(2, "0");
  const minuto = String(agora.getMinutes()).padStart(2, "0");
  const segundo = String(agora.getSeconds()).padStart(2, "0");

  document.getElementById("hora").textContent = hora;
  document.getElementById("minuto").textContent = minuto;
  document.getElementById("segundo").textContent = segundo;
}

setInterval(atualizarRelogio, 1000);
