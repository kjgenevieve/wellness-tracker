document.addEventListener("DOMContentLoaded", () => {
    displayChart();
})

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
}

function displayChart(){
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: createLabels(),
            datasets: [{
                label: '# of Votes',
                data: [10, 80, 50, 20, 70, 100, 10, 80, 50, 20, 70, 100, 10, 80, 50, 20, 70, 100, 10, 80, 50, 20, 70, 100, 10, 80, 50, 20, 70, 100, 10, 80, 50, 20, 70, 100],
                backgroundColor: function(context) {
                    var index = context.dataIndex;
                    var value = context.dataset.data[index];
                    return index < 7 ? 'rgba(255, 99, 132, 0.2)' :
                        index < 13 ? 'rgba(54, 162, 235, 0.2)' :
                        index < 19 ? 'rgba(255, 206, 86, 0.2)' :
                        index < 25 ? 'rgba(75, 192, 192, 0.2)' :
                        index < 31 ? 'rgba(153, 102, 255, 0.2)' :
                        'rgba(255, 159, 64, 0.2)';
                },
                borderColor: function(context) {
                    var index = context.dataIndex;
                    var value = context.dataset.data[index];
                    return index < 7 ? 'rgba(255, 99, 132, 1)' :
                        index < 13 ? 'rgba(54, 162, 235, 1)' :
                        index < 19 ? 'rgba(255, 206, 86, 1)' :
                        index < 25 ? 'rgba(75, 192, 192, 1)' :
                        index < 31 ? 'rgba(153, 102, 255, 1)' :
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
    });
}