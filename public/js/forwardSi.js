var ctx = document.getElementById("myChart").getContext('2d');

const labels = ["",0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0];
const dataValue = [0,0,1,2,3,4,5,7,40,140,300];
const data = {
    labels: labels,
    datasets: [{
        label: 'Series 1', // Name the series
        data: dataValue, // Specify the data values array
        fill: false,
        borderColor: '#2196f3', // Add custom color border (Line)
        backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
        borderWidth: 1 // Specify bar border width
    }]}

const config = {
  type: 'line',
  data,
  options: {
    tension: 0.4,
    responsive: true, // Instruct chart js to respond nicely.
    maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height
  }
}

var myChart = new Chart(ctx, config);

function updateChart(range){
  const rangeValue = labels.slice(0, range.value);
  myChart.config.data.labels = rangeValue;
  myChart.config.data.datasets[0].data = dataValue.slice(0, range.value);
  myChart.update();
}
