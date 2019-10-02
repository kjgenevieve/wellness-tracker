document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    main();
});

function main() {
    checkLogin();
};

function checkLogin() {
    // Will check if a user is logged in; if no, page loads a login form. Else:
    const user_id = 1
    fetch(`http://localhost:3000/users/${user_id}`)
    .then(resp => resp.json())
    .then(data => loadDashboard(data))
};

function loadDashboard(user) {
    // console.log(`loadDashboard(); user object =`, user)
    const mainEl = document.getElementById("main")
    // console.log(`mainEl`, mainEl)
    const welcome = document.createElement("p")
    welcome.textContent = `Hello, ${user.name}!`
    mainEl.appendChild(welcome)

    // Only show "Take New Test" button if user is logged in
    newTestListener(user, mainEl);
};

function newTestListener(user, mainEl) {
    const newTestBtn = document.getElementById("newTestBtn")
    newTestBtn.addEventListener("click", () => loadNewTest(user, mainEl))
}

function loadNewTest(user, mainEl) {
    if (mainEl.hasChildNodes()) {
        mainEl.innerHTML = "";
    }    
    const test = document.createElement("container");
    test.textContent = `TEST TIME, ${user.name}!`;
    mainEl.appendChild(test);
    
    fetch(`http://localhost:3000/questions`)
    .then(resp => resp.json())
    .then(data => showTest(user, test, data))
}

function showTest(user, test, questions) {
    console.log(`user`, user)
    console.log(`test`, test)
    console.log(`questions`, questions)

    // Create Form
    const newTest = document.createElement("form")
    newTest.id = "newTestForm"
    test.appendChild(newTest)
    // Create each question
    
    const physicalDiv = document.createElement("div")
    physicalDiv.id = "physicalQs"
    newTest.appendChild(physicalDiv)

    const financialDiv = document.createElement("div")
    financialDiv.id = "financialQs"
    newTest.appendChild(financialDiv)

    const intellectualDiv = document.createElement("div")
    intellectualDiv.id = "intellectualQs"
    newTest.appendChild(intellectualDiv)

    const emotionalDiv = document.createElement("div")
    emotionalDiv.id = "emotionalQs"
    newTest.appendChild(emotionalDiv)

    const socialDiv = document.createElement("div")
    socialDiv.id = "socialQs"
    newTest.appendChild(socialDiv)

    const spiritualDiv = document.createElement("div")
    spiritualDiv.id = "spiritualQs"
    newTest.appendChild(spiritualDiv)
    
    for (question of questions) {
        let category = question.category;
        let number = question.number;
        let text = question.text;
        console.log(`category`, category)
        console.log(`number`, number)
        console.log(`text`, text)

        let questionDiv = document.createElement("div")
        questionDiv.id = (`q${number}`)
        
        let qText = document.createElement("p")
        qText.textContent = (`${number}. ${text}`)
        questionDiv.appendChild(qText)


        let response = document.createElement("input");
        response.setAttribute("type", "text")
        questionDiv.appendChild(response)

        if (category === "physical") {
            physicalDiv.appendChild(questionDiv)
        } else if (category === "financial") {
            financialDiv.appendChild(questionDiv)
        } else if (category === "intellectual") {
            intellectualDiv.appendChild(questionDiv)
        } else if (category === "emotional") {
            emotionalDiv.appendChild(questionDiv)
        } else if (category === "social") {
            socialDiv.appendChild(questionDiv)
        } else if (category === "spiritual") {
            spiritualDiv.appendChild(questionDiv)
        } else {
            console.log("Question's Category not found!")
        }
    }



    // Create submit button
    let submitBtn = document.createElement("button");
    submitBtn.innerHTML = "Submit"
    newTest.appendChild(submitBtn)
}