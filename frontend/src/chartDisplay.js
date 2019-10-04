// document.addEventListener("DOMContentLoaded", () => {
//     displayChart();
// })

function prepForChart(data, user) {
    const mainEl = document.getElementById("main")
    if (mainEl.hasChildNodes()) {
        mainEl.innerHTML = "";
    };
    
    const chartEl = document.getElementById("chart")
    if (chartEl.hasChildNodes()) {
        mainEl.innerHTML = "";
    };
    
    const myChart = document.createElement("canvas")
    myChart.id = "myChart"
    myChart.width = "400"
    myChart.height = "400"
    chartEl.appendChild(myChart)
    
    displayChart(data);
};

function displayChart(data) {
    // console.log(readyData)
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: createLabels(),
            datasets: [{
                label: 'Responses',
                data: prepareData(data),
                backgroundColor: function(context) {
                    var indexBG = context.dataIndex;
                    return indexBG < 7 ? 'rgba(255, 99, 132, 0.2)' :
                        indexBG < 13 ? 'rgba(54, 162, 235, 0.2)' :
                        indexBG < 19 ? 'rgba(255, 206, 86, 0.2)' :
                        indexBG < 25 ? 'rgba(75, 192, 192, 0.2)' :
                        indexBG < 31 ? 'rgba(153, 102, 255, 0.2)' :
                        'rgba(255, 159, 64, 0.2)';
                },
                borderColor: function(context) {
                    var indexB = context.dataIndex;
                    return indexB < 7 ? 'rgba(255, 99, 132, 1)' :
                        indexB < 13 ? 'rgba(54, 162, 235, 1)' :
                        indexB < 19 ? 'rgba(255, 206, 86, 1)' :
                        indexB < 25 ? 'rgba(75, 192, 192, 1)' :
                        indexB < 31 ? 'rgba(153, 102, 255, 1)' :
                        'rgba(255, 159, 64, 1)';
                },
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                display: true
            },
            legend: {
                display: false
            }
        }
    })
};

function createLabels() {
    let labelsAry = []
    for (i = 1; i <= 6; i++) {
        labelsAry.push(`Physical Q${i}`)
    }
    for (i = 7; i <= 12; i++) {
        labelsAry.push(`Financial Q${i}`)
    }
    for (i = 13; i <= 18; i++) {
        labelsAry.push(`Intellectual Q${i}`)
    }
    for (i = 19; i <= 24; i++) {
        labelsAry.push(`Emotional Q${i}`)
    }
    for (i = 25; i <= 30; i++) {
        labelsAry.push(`Social Q${i}`)
    }
    for (i = 31; i <= 36; i++) {
        labelsAry.push(`Spiritual Q${i}`)
    }
    return labelsAry
};

function prepareData(data) {
    let readyData = []
    for (i = 1; i <= 36; i++) {
        readyData.push(parseInt(data[i].response, 10));
    };
    return readyData
}