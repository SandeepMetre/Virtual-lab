var ctx = document.getElementById("myChart").getContext('2d');

const labels = ["",-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-13,-14,-15,-16,-17,-18,-19,-20,-21,-22,-23,-24,-25,-26,-27,-28,-29,-30,-31,-32];
const dataValue = [0,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.5,10];

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
