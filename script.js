function calculate() {
  const price = parseFloat(document.getElementById("currentPrice").value);
  const vol = parseFloat(document.getElementById("volatility").value) / 100;
  const low = parseFloat(document.getElementById("targetLow").value);
  const high = parseFloat(document.getElementById("targetHigh").value);

  if (!price || !vol || !low || !high) {
    alert("Preencha todos os campos.");
    return;
  }

  // aproximação simples
  const range = price * vol;
  let probability = 100 - Math.abs((high - low) / range) * 50;

  probability = Math.max(5, Math.min(95, probability));

  document.getElementById("probability").innerText =
    probability.toFixed(1) + "%";
}

