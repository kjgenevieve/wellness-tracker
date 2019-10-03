document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    main();
});

function main() {
    checkLogin();
};

function checkLogin() {
    // Will check if a user is logged in; if no, page loads a login form. Else:
    
    const loggedIn = true
    const user_id = 1
    fetch(`http://localhost:3000/users/${user_id}`)
    .then(resp => resp.json())
    .then(data => loadDashboard(data))
};

function loadDashboard(user) {
    const mainEl = document.getElementById("main")
    const welcome = document.createElement("p")
    welcome.textContent = `Hello, ${user.name}!`
    mainEl.appendChild(welcome)

    // More info will be displayed here later

    // Only show "Take New Test" button if user is logged in
    dashboardListeners(user, mainEl);
};

function dashboardListeners(user, mainEl) {
    const newTestBtn = document.getElementById("newTestBtn")
    newTestBtn.addEventListener("click", () => prepNewTest(user, mainEl))

    // Other listeners go here.
}

function prepNewTest(user, mainEl) {
    if (mainEl.hasChildNodes()) {
        mainEl.innerHTML = "";
    }    
    const testContainer = document.createElement("container");
    testContainer.id = "testContainer"
    testContainer.textContent = `TEST TIME, ${user.name}!`;
    mainEl.appendChild(testContainer);
    
    fetch(`http://localhost:3000/questions`)
    .then(resp => resp.json())
    .then(data => showTestForm(user, testContainer, data))
}



function showTestForm(user, testContainer, questions) {
    // Create Form
    const newTest = document.createElement("form")
    newTest.id = "newTestForm"
    testContainer.appendChild(newTest)

    createCategoryDivs(user, questions, newTest)
}

function createCategoryDivs(user, questions, newTest) {
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

    createQuestionDivs(user, questions)
}

function createQuestionDivs(user, questions) {
    for (question of questions) {
        let category = question.category;
        let number = question.number;
        let text = question.text;

        let questionDiv = document.createElement("div")
        questionDiv.id = (`q${number}`)
        
        let qText = document.createElement("p")
        qText.id = question.id
        qText.textContent = (`${number}. ${text}`)
        questionDiv.appendChild(qText)

        let response = document.createElement("input");
        response.setAttribute("type", "text")
        questionDiv.appendChild(response)

        if (category === "physical") {
            document.getElementById("physicalQs").appendChild(questionDiv)
        } else if (category === "financial") {
            document.getElementById("financialQs").appendChild(questionDiv)
        } else if (category === "intellectual") {
            document.getElementById("intellectualQs").appendChild(questionDiv)
        } else if (category === "emotional") {
            document.getElementById("emotionalQs").appendChild(questionDiv)
        } else if (category === "social") {
            document.getElementById("socialQs").appendChild(questionDiv)
        } else if (category === "spiritual") {
            document.getElementById("spiritualQs").appendChild(questionDiv)
        } else {
            console.log("Question's Category not found!")
        }
    }
    // Create submit button
    let submitBtn = document.createElement("button");
    submitBtn.innerHTML = "Submit"
    document.getElementById("newTestForm").appendChild(submitBtn)

    testSubmitListener(user, submitBtn);
}

function testSubmitListener(user, submitBtn) {
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        prepDataForSubmit(e, user)
    });
}

function prepDataForSubmit(e, user) {
    const user_id = user.id;

    let month = new Date();
    month = month.getMonth() + 1; // JavaScript stores January as 0.
    
    let day = new Date();
    day = day.getDate();
    
    let year = new Date();
    year = year.getFullYear();
    const date = `${month}/${day}/${year}`;
    console.log(date)

    const newTestArray = {}

    for (i = 0; i < e.target.form.length - 1; i++) {
        let responseBox = e.target.form[i]
        let response = responseBox.value
        let question_id = responseBox.parentElement.firstChild.id
        newTestArray[i] = {user_id, question_id, response, date}
    }
    postNewTest(newTestArray)
}

function postNewTest(newTestArray) {
// const quote = e.target.quote.value
    // const author = e.target.author.value
    
    // submitQuote.reset();
    
    // const newQuote = {quote, author}
    
    fetch("http://localhost:3000/answers", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(newTestArray)
    })
    .then(resp => resp.json())
    .then(console.log)
    // .then(data => createQuote(data))
    


    // @answer.user_id = (params[:user_id])
    // @answer.question_id = (params[:question_id])
    // @answer.response = (params[:response])
    // @answer.date = (params[:date])


    // #=> Example Request
    // POST /pokemons
    
    // Required Headers:
    // {
    //   'Content-Type': 'application/json'
    // }
    
    // Required Body:
    // {
    //   "trainer_id": 1
    // }
    
    // #=> Example Response
    // {
    //   "id":147,
    //   "nickname":"Gunnar",
    //   "species":"Weepinbell",
    //   "trainer_id":1
    // }


    


}