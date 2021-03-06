function prepNewTest(user, mainEl) {
    if (mainEl.hasChildNodes()) {
        mainEl.innerHTML = "";
    };

    const chartEl = document.getElementById("chart")
    if (chartEl.hasChildNodes()) {
        chartEl.innerHTML = "";
    };

    const testContainer = document.createElement("container");
    testContainer.id = "testContainer"
    testContainer.textContent = `TEST TIME, ${user.name}!`;
    mainEl.appendChild(testContainer);

    fetch(`http://localhost:3000/questions`)
    .then(resp => resp.json())
    .then(data => {
        showTestForm(user, testContainer, data)
    })
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

        // Create Table for Buttons
        let responseTable = document.createElement("table")
        responseTable.id = "responseTable"
        questionDiv.appendChild(responseTable)

        // Create Row Node
        let percents = document.createElement("tr")
        percents.id = "percents"
        responseTable.appendChild(percents)

        // Create Row 1 Elements
        for (i = 0; i <= 100; i += 10) {
            let percent = document.createElement("td")
            percent.textContent = `${i}%`
            percents.appendChild(percent)
        }
        
        // Create Row Node
        let btnRow = document.createElement("tr")
        btnRow.id = "btnRow"
        responseTable.appendChild(btnRow)

        // Create Row 2 Elements
        for (i = 0; i < 11; i++) {
            let btnHolder = document.createElement("td")
            btnRow.appendChild(btnHolder)

            let radioBtn = document.createElement("input")
            radioBtn.type = "radio";
            radioBtn.name = `q${number}`
            radioBtn.value = i;
            if (radioBtn.value == 0) {
                radioBtn.checked = true;
            };
            btnHolder.appendChild(radioBtn);
        }

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
        prepDataForSubmit(e, user);
    });
}

function prepDataForSubmit(e, user) {
    // Prep user_id
    const user_id = user.id;

    // Prep date
    let month = new Date();
    month = month.getMonth() + 1; // JavaScript stores January as 0.
    
    let day = new Date();
    day = day.getDate();
    
    let year = new Date();
    year = year.getFullYear();
    const date = `${month}/${day}/${year}`;
    
    // Data object
    const newTestInfo = {}

    
    let form_elements = newTestForm.elements;
    for (i = 1; i <= 36; i++) {
        let name = "q" + this.i

        let question_id = document.getElementById(name).firstChild.id
        let response = form_elements[name].value;
        
        newTestInfo[i] = {user_id, question_id, response, date}
    }

    postNewTest(newTestInfo, user)
}

function postNewTest(newTestInfo, user) {
    fetch("http://localhost:3000/answers", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(newTestInfo)
    })
    .then(resp => resp.json())
    .then(data => prepForChart(data, user))
}