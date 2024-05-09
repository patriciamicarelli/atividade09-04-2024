document.getElementById('form-datas').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio do formulário
  let data1 = document.getElementById('data1').value;
  let data2 = document.getElementById('data2').value;

  compararDatas(data1, data2);
});

function compararDatas(data1, data2) {
  let date1 = new Date(data1);
  let date2 = new Date(data2);

  if (date1 < date2) {
      console.log("Data 2 é maior que a Data 1");
  } else if (date1 > date2) {
      console.log("Data 1 é maior que a Data 2");
  } else {
      console.log("As datas são iguais.");
  }
  calcularIntervalo(data1, data2);
}

function calcularIntervalo(data1, data2) {
  let date1 = new Date(data1);
  let date2 = new Date(data2);

  if (date1 > date2) {
      console.log("Erro: a primeira data não deve ser posterior à segunda data.");
      return;
  }

// Função para retornar a data atual no padrão especificado
function getDataAtualFormatada() {
    var dataAtual = new Date();
    var hora = dataAtual.getHours();
    var minuto = dataAtual.getMinutes();
    var dia = dataAtual.getDate();
    var mes = dataAtual.getMonth() + 1; // Meses começam do zero, então adicionamos 1
    var ano = dataAtual.getFullYear();

    // Formatar para adicionar um zero à esquerda, se necessário
    hora = hora < 10 ? "0" + hora : hora;
    minuto = minuto < 10 ? "0" + minuto : minuto;
    dia = dia < 10 ? "0" + dia : dia;
    mes = mes < 10 ? "0" + mes : mes;

    return `${hora}:${minuto} - ${dia}/${mes}/${ano}`;
}

// Função para executar as operações ao clicar no botão
function executarOperacoes() {
    var data1String = document.getElementById("data1").value;
    var data2String = document.getElementById("data2").value;

    var data1 = converterData(data1String);
    var data2 = converterData(data2String);

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpar resultado anterior

    // Verificar o parâmetro Date maior
    resultado.innerHTML += "1) O parâmetro Date maior é: " + parametroMaior(data1, data2).toLocaleDateString("pt-BR") + "<br>";

    // Calcular o intervalo entre as datas
    resultado.innerHTML += "2) O intervalo entre as datas é: " + calcularIntervalo(data1, data2) + " dias <br>";

    // Retornar a data atual no padrão especificado
    resultado.innerHTML += "3) A data atual formatada é: " + getDataAtualFormatada();
}
