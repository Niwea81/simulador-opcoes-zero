document.addEventListener("DOMContentLoaded", function () {

  console.log("JS iniciado com sucesso");

  // ELEMENTOS BASE
  const ativo = document.getElementById("ativo");
  const S = document.getElementById("S");
  const iv = document.getElementById("iv");
  const dte = document.getElementById("dte");
  const estrutura = document.getElementById("estrutura");
  const resultado = document.getElementById("resultado");
  const aula = document.getElementById("aula");

  if (!ativo || !S || !iv || !dte || !estrutura) {
    console.warn("Algum elemento não foi encontrado no HTML");
    return;
  }

  // TESTE VISUAL DE VIDA
  aula.innerHTML = `
    <h3>✅ Checklist ativo</h3>
    <p>JavaScript conectado com sucesso.</p>
  `;

});



