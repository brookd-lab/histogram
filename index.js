const ctx = document.getElementById("histogram").getContext("2d");
const values = document.getElementById("values");
let customRendered = false;
let chart = undefined;
initialize();

function drawChart(arr) {    
    if (chart != undefined)
        chart.destroy();
    chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [0, 10, 20, 30, 40, 50, 60],
      datasets: [
        {
          label: "Amount of Substance for Curing",
          data: arr,
          backgroundColor: "lightgreen",
        },
      ],
    },
    options: {
      scales: {
        xAxes: [
          {
            display: false,
            barPercentage: 1.3,
            ticks: {
              max: 3,
            },
          },
          {
            display: true,
            ticks: {
              autoSkip: false,
              max: 4,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
}

// obtain random number between inclusive range
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function initialize() {
  const length = 7; //randomIntFromInterval(6);

  //build array of chart data
  let arr = Array.from({ length }, () => randomIntFromInterval(20, 100));
  drawChart(arr);
}

const redraw = () => {
  var data = values.value;
    
  arr = values.value.split(",");

    let valid = true;
    arr.forEach(num => {
        if (!parseInt(num)) {
            valid = false;
            return false;
        }
    })

    if (!valid) {
        alert('Please input numeric values, only.')
        return
    }
    
 
  if (arr.length < 1 || arr.length > 7) {
    alert("Please submit 1 to 7 values");
    return
  }

  drawChart(arr);
  customRendered = true;
};


