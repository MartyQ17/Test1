
function rand() {
  return Math.random();
}// genero numeri randomici
// ---> Qui andra' inserito l'ingresso dei dai e rendenzialmente, per ogni grafico,
//      andremo a lavorare con i prototipi generati in questo codice


var time = new Date();

var data = [{
  x: [time],
  y: [rand],
  mode: 'lines+markers',
  line: { color: '#80CAF6' }
}] //creo l'elemento da plottare

Plotly.plot('myDiv', data); //plotto data in myDiv sull'HTML

var cnt = 0; // il counter viene inizializzato a 0

var interval = setInterval(function () {

  var time = new Date();

  var update = {
    x: [[time]],
    y: [[rand()]]
  } //creo una variabile per fare l'update dei dati

  var olderTime = time.setSeconds(time.getSeconds() - 1);
  var futureTime = time.setSeconds(time.getSeconds() + 1);

  //qui ho creato le due variabili che mi determineranno di volta in volta l'istante plottato e quello da plottare

  var secondsView = {
    xaxis: {
      type: 'date',
      range: [olderTime, futureTime]
    } //quello che visualizzo sull'asse delle x
  }; //l'aggiornamento

 // Plotly.relayout('myDiv', secondsView); //faccio l'update del grafico
  Plotly.extendTraces('myDiv', update, [0]) //aggiungo i nuovi dati al grafico esistente

  if (cnt === 1000) clearInterval(interval); //quando viene raggiunto il counter il grafico viene "ripulito"
}, 1000); //tutta questa parte fa in modo da aggiornare il grafico sulla base del primo elemento creato





//Creo una gauge chart basata su dati vari (test)

var gauge_1 = setInterval(gauge_one, 1000);
function gauge_one () {
  var data1 = [{
  domain: { x: [0, 1], y: [0, 1] },
  value: rand(),
  title: { text: "Numeri random" },
  type: "indicator",
  mode: "gauge+number+delta", //number -> mostra il valore reggiunto
  delta: {reference: 0.999},  //delta -> mostra la differenza tra il target e il valore attuale
  gauge: {
    axis: {range: [null, 0.999]},
    steps: [
      {range: [0, 0.25], 
       color: "lightgreen"},
      {range: [0.25, 0.4], 
       color: "yellow"},
      {range: [0.4, 0.7], 
       color: "orange"},
      {range: [0.7, 0.9], 
       color: "red"},
      {range: [0.9, 0.999], 
       color: "black"}
    ],
    threshold: {
      line: {color: "purple", width: 4},
      thickness: 0.75,
      value: 0.7
    } // barretta che indica il valore "impostato"
  }
}];
var layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
var test2 = Plotly.newPlot('gaugeChart', data1, layout); 
} // questa funzione permette l'aggiornamento del gauge chart ogni tot ms





