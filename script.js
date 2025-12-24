// ETAPA 1 – AMBIENTE
function avaliarAmbiente(){
  const vix = 18; // valor didático

  let msg="", cor="";
  if(vix < 15){
    msg = "🟢 Ambiente calmo (VIX baixo).";
    cor = "#22c55e";
  } else if(vix < 20){
    msg = "🟡 Ambiente normal. Atenção.";
    cor = "#facc15";
  } else {
    msg = "🔴 Ambiente estressado.";
    cor = "#ef4444";
  }

  ambienteBox.style.borderLeft = `4px solid ${cor}`;
  ambienteBox.innerHTML = `<b>Ambiente de Mercado</b><br>${msg}<br><small>VIX simulado: ${vix}</small>`;
}

// ETAPA 2 – IV
function avaliarIV(){
  const iv = +document.getElementById("iv").value;
  if(!iv) return;

  let msg="", cor="";
  if(iv < 18){
    msg = "🟢 IV baixa → favorece compra.";
    cor = "#22c55e";
  } else if(iv < 30){
    msg = "🟡 IV média → spreads.";
    cor = "#facc15";
  } else {
    msg = "🔴 IV alta → favorece venda.";
    cor = "#ef4444";
  }

  ivBox.style.borderLeft = `4px solid ${cor}`;
  ivBox.innerHTML = `<b>Volatilidade</b><br>${msg}<br><small>IV: ${iv}%</small>`;
}

// ETAPA 3 – GRÁFICO
function avaliarGrafico(){
  const ativo = document.getElementById("ativo").value;
  graficoBox.innerHTML = `
    <b>Leitura do Gráfico – ${ativo}</b><br>
    Observe tendência, VWAP e consolidação.
  `;
}

// ETAPA 4 – ESTRUTURA
function avaliarEstrutura(){
  const e = document.getElementById("estrutura").value;
  let msg="", cor="#22c55e";

  if(e === "callShort" || e === "putShort"){
    msg = "⚠️ Risco elevado. Exige margem.";
    cor = "#ef4444";
  } else if(e.includes("Spread")){
    msg = "🟡 Risco e ganho limitados.";
    cor = "#facc15";
  } else {
    msg = "🟢 Risco limitado ao prêmio.";
  }

  estruturaBox.style.borderLeft = `4px solid ${cor}`;
  estruturaBox.innerHTML = `<b>Estrutura</b><br>${msg}`;
}

// EVENTOS
document.getElementById("iv").addEventListener("input", avaliarIV);
document.getElementById("ativo").addEventListener("change", avaliarGrafico);
document.getElementById("estrutura").addEventListener("change", avaliarEstrutura);

// INICIALIZA
avaliarAmbiente();
avaliarGrafico();

