var cardQuiz = document.getElementById("cardQuiz");
var cardQuestions = document.getElementById("cardQuestions");
var pontuation = 0;
var currentIndex = 1;

const listQuestions = [
    {
        question: "Qual é o nome completo de Ellie ?",
        answers: [
            { option: "Ellie Williams", correct: true },
            { option: "Ellie Miller", correct: false },
            { option: "Ellie Servopoulos", correct: false },
        ],
    },
    {
        question: "Qual é a idade de Ellie em the Last of us Part I ?",
        answers: [
            { option: "12 Anos", correct: false },
            { option: "13 Anos", correct: false },
            { option: "14 Anos", correct: true },
        ],
    },
    {
        question: "Qual é  nome completo do Joel ?",
        answers: [
            { option: "Joel Williams", correct: false },
            { option: "Joel Miller", correct: true },
            { option: "Joel Servopoulos", correct: false },
        ],
    },
    {
        question: "Onde fica a base dos vagalumes ?",
        answers: [
            { option: "Seatle", correct: false },
            { option: "Boston", correct: true },
            { option: "Chicago", correct: false },
        ],
    },
    {
        question: "Qual é a idade de Joel ?",
        answers: [
            { option: "56 Anos", correct: true },
            { option: "53 Anos", correct: false },
            { option: "52 Anos", correct: false },
        ],
    },
    {
        question: "Porque Ellie Nasceu Imune ?",
        answers: [
            { option: "Porque ela deu sorte", correct: false },
            { option: "Porque sua mãe nasceu imune", correct: false },
            { option: "Porque sua mãe foi mordida na gravidez", correct: true },
        ],
    },
    {
        question: "Quem interpretou Ellie no live action ?",
        answers: [
            { option: "Ashley Johnson", correct: false },
            { option: "Bella Ramsey", correct: true },
            { option: "Miley Bobby Brown", correct: false },
        ],
    },
    {
        question: "Quando vai sair a segunda Temporada de TLOU ?",
        answers: [
            { option: "2028", correct: false },
            { option: "2026", correct: true },
            { option: "2024", correct: false },
        ],
    },
    {
        question: "Qual cenário se passa o Jogo ?",
        answers: [
            { option: "Faroeste", correct: false },
            { option: "Contemporâneo", correct: false },
            { option: "Apocalíptico", correct: true },
        ],
    },
    {
        question: "Qual o gênero do Jogo ?",
        answers: [
            { option: "Ação", correct: false },
            { option: "Terror", correct: false },
            { option: "Ficção Científica", correct: true },
        ],
    },
    {
        question: "Em português como fica a tradução da Série ?",
        answers: [
            { option: "O último de nós", correct: true },
            { option: "Os escolhidos", correct: false },
            { option: "O fim de nós", correct: false },
        ],
    },
    {
        question: "Qual o Maior medo de Ellie ?",
        answers: [
            { option: "Não ter niguem ao seu lado", correct: true },
            { option: "Morrer", correct: false },
            { option: "Perder o Joel", correct: false },
        ],
    },
];

function startQuiz() {
    pontuation = 0;
    currentIndex = 1;
    for (var i = cardQuestions.childElementCount; i > 0; i = cardQuestions.childElementCount) {
        cardQuestions.removeChild(cardQuestions.firstElementChild)
    }
    setTimeout(() => {
        cardQuiz.insertAdjacentHTML("afterbegin", `<p>${listQuestions[0].question}</p>`)
        listQuestions[0].answers.forEach(answer => {
            const button = document.createElement("button")
            button.innerHTML = answer.option
            button.classList.add("alternativa")
            cardQuestions.appendChild(button)
            if (answer.correct) {
                button.dataset.correct = answer.correct
            }
            button.addEventListener("click", selectedAnswer)
        })
    }, 300)
};

function selectedAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true"
    if (isCorrect) {
        pontuation++
    }
    nextQuestion()
};

function nextQuestion() {
    cardQuiz.removeChild(cardQuiz.firstElementChild)
    for (var i = cardQuestions.childElementCount; i > 0; i = cardQuestions.childElementCount) {
        cardQuestions.removeChild(cardQuestions.firstElementChild)
    }
    setTimeout(() => {
        if (currentIndex <= 11) {
            cardQuiz.insertAdjacentHTML("afterbegin", `<p>${listQuestions[currentIndex].question}</p>`)
            listQuestions[currentIndex].answers.forEach(answer => {
                const button = document.createElement("button")
                button.innerHTML = answer.option
                button.classList.add("alternativa")
                cardQuestions.appendChild(button)
                if (answer.correct) {
                    button.dataset.correct = answer.correct
                }
                button.addEventListener("click", selectedAnswer)
            })
        } else {
            cardQuiz.removeChild(cardQuiz.firstElementChild)
            cardQuiz.insertAdjacentHTML("beforeend", `<button onclick="finalizarQuiz()">Finalizar Quiz</button>`)
        }
        currentIndex += 1
    }, 300)
};

function finalizarQuiz() {
    for (var i = cardQuestions.childElementCount; i > 0; i = cardQuestions.childElementCount) {
        cardQuestions.removeChild(cardQuestions.firstElementChild)
    }
    for (var i = cardQuiz.childElementCount; i > 0; i = cardQuiz.childElementCount) {
        cardQuiz.removeChild(cardQuiz.firstElementChild)
    }
    cardQuiz.insertAdjacentHTML("afterbegin",
        `
            <h2>Boa Você Completou o Quiz</h2>
            <p><br>Seu total de acertos foi:</p>
            <div class="exibirAcertos">
                ${pontuation}
            </div>
            <button onclick="sair()">Voltar</button>
        `
    )
}

function sair() {
    setTimeout(() => {
        window.location = "dashboard.html";
    }, 1000); // apenas para exibir o loading
    alert("Voltando para a Tela de Perfil...");
}