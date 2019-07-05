
let trafficWidget = document.getElementById("traffic_widget").getContext('2d');
var gradientFill = trafficWidget.createLinearGradient(500, 0, 100, 0);
gradientFill.addColorStop(0, "rgba(128, 182, 244, 0.6)");
gradientFill.addColorStop(1, "rgba(244, 144, 128, 0.6)");


// LINE GRAPH

let trafficData= {
    labels: ["0", "3", "5","7", "8", "10"],
  datasets: [{
    data: [ 0, -325, 75, 525, 600],
    backgroundColor: gradientFill,
    borderWidth: 2,
    pointBackgroundColor:'white',
    radius: 4,
  }]
};

let trafficOption = {
  aspectRatio: 0,
  animation: {
    duration: 5000
  },
  scales: {
    yAxes: [{
      ticks: {
        min: -400,
        max: 700,
        stepSize: 100,
        suggestedMin: -400
      }
    }],
    xAxes: [{
   ticks: {
      userCallback: function(item, index) {
         if (!(index % 6)) return item;
      },
      autoSkip: false
   }
}],
  },
  legend: {
    display: false
  }
};

let trafficChart = new Chart(trafficWidget, {
  type: 'line',
  data: trafficData,
options: trafficOption
});
