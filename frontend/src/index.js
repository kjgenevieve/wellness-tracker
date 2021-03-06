document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    main();
});

function main() {
    checkLogin();
    // showChart();
};

function checkLogin() {
    // Will check if a user is logged in; if no, page loads a login form. Else:
    
    const loggedIn = true
    const user_id = 1
    fetch(`http://localhost:3000/users/${user_id}`)
    .then(resp => resp.json())
    .then(user => {
        loadDashboard(user)

        const mainEl = document.getElementById("main")
        const newTestBtn = document.getElementById("newTestBtn");
        newTestBtn.addEventListener("click", () => prepNewTest(user, mainEl));

        const dashboardBtn = document.getElementById("dashboard");
        dashboardBtn.addEventListener("click", () => loadDashboard(user));
    })
};
