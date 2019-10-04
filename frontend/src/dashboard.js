function loadDashboard(user) {
    const mainEl = document.getElementById("main")
    if (mainEl.hasChildNodes()) {
        mainEl.innerHTML = "";
    };

    const chartEl = document.getElementById("chart")
    if (chartEl.hasChildNodes()) {
        chartEl.innerHTML = "";
    };
    
    const welcome = document.createElement("p")
    welcome.textContent = `Hello, ${user.name}!`
    mainEl.appendChild(welcome)

    // More info will be displayed here later

    // Only show "Take New Test" button if user is logged in

    makePrevResultList(user, mainEl);
};

function makePrevResultList(user, mainEl) {
    let prevResults = document.createElement("ul")
    prevResults.id = prevResults
    mainEl.appendChild(prevResults)

    getPrevResults(user, prevResults)
}

function getPrevResults(user, prevResults) {
    fetch(`http://localhost:3000/users/${user.id}/answers`)
    .then(resp => resp.json())
    .then(data => findUniqueDates(user, data, prevResults))
}

function findUniqueDates(user, data, prevResults) {
    const uniqueDates = []
    for (response of data) {
        if (!uniqueDates.includes(response.date)) {
            uniqueDates.push(response.date)
        }
    }
    displayDates(user, uniqueDates, prevResults, data)
}

function displayDates(user, uniqueDates, prevResults, data) {
    for (date of uniqueDates) {
        const dateItem = document.createElement("li")
        dateItem.textContent = date
        dateItem.onclick = function() {
            filterData(user, date, data)
          }
        prevResults.appendChild(dateItem)
    }
}

function filterData(user, date, data) {
    i = 1
    let displayData = {}
    for (response of data) {
        if (response.date == date) {
            displayData[i] = response
            i++
        }
    }
    prepForChart(displayData, user)
}