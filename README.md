MANIPULAÇÃO DE DATAS COM JS:
Objeto Date
JavaScript não possui dados do tipo data. No entanto, você pode usar o objeto Date e seus métodos para trabalhar com datas e horas nas suas aplicações. O objeto Date tem um grande número de métodos para setar, recuperar e manipular datas. Ele não tem nenhuma propriedade.

JavaScript manipula datas de maneira semelhante ao Java. As duas linguagens tem muitos dos mesmos métodos para lidar com datas e ambas armazenam datas como números em milisegundos, desde 1 de janeiro de 1970, às 00:00:00 ( January 1, 1970, 00:00:00).

A abrangência do objeto Date é de -100,000,000 dias até 100,000,000 dias relativos a 01 de janeiro de 1970 UTC.

Para criar um objeto Date:

JS
Copy to Clipboard
var dateObjectName = new Date([parameters]);
onde dateObjectName é o nome do objeto Date que está sendo criado; ele pode ser um novo objeto ou uma propriedade de um objeto existente.

A chamada de Date sem a palavra reservada new, simplesmente converte a data para uma representação dela como string.

Os parâmetros do código acima podem ser qualquer um a seguir:

Nada: cria a data e hora de hoje. Por exemplo, today = new Date();.
Uma string representando uma data da seguinte forma: "Mês dia, ano, horas:minutos:segundos". Por exemplo, Xmas95 = new Date("25 de dezembro de 1995, 13:30:00"). Se você omitir as horas, minutos ou segundos, o valor será setado para zero.
Um conjunto de valores inteiros para ano, mês e dia. Por exemplo, var Xmas95 = new Date(1995, 11, 25).
Um conjunto de valores inteiros par ano, mês, dia, hora, minuto e segundos. Por exemplo, var Xmas95 = new Date(1995, 11, 25, 9, 30, 0);.
Métodos do objeto Date
Os métodos do objeto Date para manipular data e hora pertencem às seguintes categorias:

Métodos "set", para setar valores de data e hora em objetos Date.
Métodos "get", para recuperar valores de data e hora de objetos Date.
Métodos "to", para retornar valores de string de objetos Date.
Métodos parse e UTC, para parsear string de Data.
Com os métods "get" e "set", você pode recuperar e setar segundos, minutos, horas, dia e mês, dia da semana, meses e anos, separadamente. Existe um método getDay que retorna o dia da semana, mas não existe um método setDay correspondente, porque o dia da semana é setado automaticamente. Estes métodos utilizam números inteiros para representar estes valores da seguinte maneira:

Segundos e minutos: de 0 a 59
Horas: de 0 a 23
Dia: 0 (Domingo) a 6 (Sábado)
Data: 1 a 31 (dia do mês)
Meses: 0 (Janeiro) a 11 (Dezembro)
Ano: anos desde 1900
Por exemplo, suponha que você queira definir a seguinite data:

JS
Copy to Clipboard
var Xmas95 = new Date("December 25, 1995");
Então Xmas95.getMonth() retorna 11 e Xmas95.getFullYear() retorna 1995.

Os métodos getTime e setTime são úteis para comparar datas. O método getTime retorna o número dos milisegundos desde 1 de janeiro de 1970, às 00:00:00 para um objeto Date.

Por exemplo, o código a seguir mostra os números dos dias que ainda faltam do ano vigente:

JS
Copy to Clipboard
var hoje = new Date();
var fimAno = new Date(1995, 11, 31, 23, 59, 59, 999); // Seta dia e mês
fimAno.setFullYear(hoje.getFullYear()); // Seta o ano para esse ano
var msPorDia = 24 * 60 * 60 * 1000; // Quantidade de milisegundos por dia
var diasRestantes = (fimAno.getTime() - hoje.getTime()) / msPorDia;
var diasRestantes = Math.round(diasRestantes); //retorna os dias restantes no ano
Este exemplo cria um objeto Date chamado hoje que contém a data de hoje. Ele, então, cria o objeto Date chamado fimAnoe seta o ano para o ano vigente. Então, usando o número de milisegundos por dia, ele computa o número de dias entre hoje e fimAno, usando getTime e arredondando os números de dias.

O método parse é útil para associar valores de strings de data para objetos Date existentes. Por exemplo, o código a seguir usa parse e setTime para associar um valor de data ao objeto IPOdate:

JS
Copy to Clipboard
var IPOdate = new Date();
IPOdate.setTime(Date.parse("Aug 9, 1995"));
No exemplo a seguir, a função JSClock() retorna o tempo no formato de um relógio digital.

JS
Copy to Clipboard
function JSClock() {
  var tempo = new Date();
  var hora = tempo.getHours();
  var minuto = tempo.getMinutes();
  var segundo = tempo.getSeconds();
  var temp = "" + (hora > 12 ? hora - 12 : hora);
  if (hora == 0) temp = "12";
  temp += (minuto < 10 ? ":0" : ":") + minuto;
  temp += (segundo < 10 ? ":0" : ":") + segundo;
  temp += hora >= 12 ? " P.M." : " A.M.";
  return temp;
}
A função JSClock primeiro cria um objeto new Date chamado tempo; já que nenhum argumento é passado, tempo é criado com data e hora atuais. Ela então chama os métodos getHours, getMinutes e getSeconds e associa o valor à hora, minuto e segundo atuais à hora, minuto e segundo.

As próximas quatro declarações constroem uma string baseada em time. A primeira declaração cria uma variável temp, associando um valor utilizando uma expressão condicional; se hora é maior que 12, (hora - 12), senão simplesmente hora, a não ser que hora seja 0 que, nesse caso, será 12.

A próxima declaração anexa um valor minuto a temp. Se o valor de minuto for menos que 10, a expressão condicional acrescenta uma string com um 0 na frente; senão ela acrescenta uma string com dois pontos. Então a declaração anexa um valor segundo a temp do mesmo jeito.

Finalmente, a expressão condicional anexa "P.M." a temp se hora for 12 ou maior; senão ela anexa "A.M." a temp.
