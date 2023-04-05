const quizData = [
    {
        question: "¿Cuántas copas oficiales tiene Bokita?",
        a: "74",
        b: "70",
        c: "76",
        d: "58",
        correct: "a",
    },
    {
        question: "Boca lo corre a rasin y a las gallinas...",
        a: "lo corre al lobo hasta la carniceria",
        b: "lo corre al cuervo y a la policia",
        c: "lo corre al pincha hasta la facu de medicina",
        d: "dale bo, dale bo",
        correct: "b",
    },
    {
        question: "¿Contra quién debuto en primera JRR?",
        a: "Unión",
        b: "Ferro",
        c: "Argentinos Juniors",
        d: "Belgrano",
        correct: "a",
    },
    {
        question: "¿Contra que equipo Carlos Biachi le gritaba a Ledesma: 'METEEEELEEEE, METANLE MIERDA'",
        a: "Riber",
        b: "Rasin",
        c: "San Silencio",
        d: "El bojo",
        correct: "b",
    },
    {
        question: "Ultima: ¿Quien reemplazo a Maradona el dia de su ultimo partido en boca?",
        a: "Julio César Toresani",
        b: "Martín Palermo",
        c: "Héctor Bambino Veira",
        d: "Riquelme",
        correct: "d",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})