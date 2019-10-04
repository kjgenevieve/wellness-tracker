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
};