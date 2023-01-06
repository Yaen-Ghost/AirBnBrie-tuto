const quizData = [
    {
        question: "1. De quelle couleur est la mimolette ?",
        img: '',
        a: "Blanc",
        b: "Noire",
        c: "Rouge",
        d: "Orange",
        correct: "d",
    },
    {
        question: "2. De quelle région est originaire le fromage la fourme d'Ambert  ?",
        img: 'cc',
        a: "Limousin",
        b: "Rhone-Alpes",
        c: "Auvergne",
        d: "Corse",
        correct: "b",
    },
    {
        question: "3. De quelle commune de Seine-et-Marne est originaire un brie ?",
        img: 'cc',
        a: "Fontainebleau",
        b: "Meaux",
        c: "Provins",
        d: "Torcy",
        correct: "b",
    },
    {
        question: "4. D'aprés la légende qui aurait crée le camembert ?",
        img: 'cc',
        a: "Marie Harel",
        b: "Jeanne d'Arc ",
        c: "Olympe de Gourges",
        d: "Charlotte Corda",
        correct: "a",
    },
    {
        question: "5. D'où est l'originaire le broccio",
        img: 'cc',
        a: "De Corse",
        b: "D'Italie",
        c: "Du Languedoc",
        d: "Du Pays Basque",
        correct: "a",
    },
    {
        question: "6. Avec quel lait d'animal fabrique t-on le cantal ?",
        img: 'cc',
        a: "La chévre",
        b: "La vache",
        c: "La brebis",
        d: "La bufflonne",
        correct: "b",
    },
    {
        question: "7. DE quelle région est originaire le Mont D'Or ?",
        img: 'cc',
        a: "Poitou-Charantes",
        b: "Franche Comté",
        c: "Midi-Pyrénées",
        d: "Haute-Normandie",
        correct: "b",
    },
    {
        question: "8.Avec le lait de quel animalfabrique-t-on l'ossau-iraty ?",
        img: 'cc',
        a: "La chévre",
        b: "La brebis",
        c: "La bouquetin",
        d: "La vache",
        correct: "b",
    },
    {
        question: "9. DE quelle région est originaire le fromage le saint-nectaire ",
        img: 'cc',
        a: "Auvergne",
        b: "L'Aquitaine",
        c: "Haute-Normandie",
        d: "La Bourgogne",
        correct: "a",
    },
    {
        question: "10. Avec le lait de quel animal produit-on le fromage l'Abondance  ?",
        img: 'cc',
        a: "La brebis",
        b: "la chévre",
        c: "La bufflonne",
        d: "La vache",
        correct: "d",
    },
]

const quiz = document.getElementById('Quizz');
const answerEls = document.querySelectorAll(".answerls");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitbtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;


loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuiz.a;
    b_text.innerText = currentQuiz.b;
    c_text.innerText = currentQuiz.c;
    d_text.innerText = currentQuiz.d;
}

function deselectAnswers(){
    answerEls.forEach(answerEls => answerEls.checked = false)
}

function getSelected(){
    let answer;
    answerEls.forEach(answerEls =>{
        if(answerEls.checcked){
            answer = answerEls.id
        }
    })
    return answer;
}

submitBtn.addEventListener('click', () => { 
    const answer = getSelected()
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }
        
        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        }  else {
            quiz.innerHTML = `
            <h2>vous 
            <button onclick="location.reload()">REload</button>
            `
        }
    }
})