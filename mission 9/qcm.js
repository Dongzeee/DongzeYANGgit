function testqcm() {
    let score = 0;

    // Vérifier la réponse de la question 1
    const q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value === 'c') {
        score++;
    }

    // Vérifier la réponse de la question 2
    const q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === 'd') {
        score++;
    }

    // Vérifier la réponse de la question 3
    const q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value === 'a') {
        score++;
    }
    // Vérifier la réponse de la question 4
    const q4 = document.querySelector('input[name="q4"]:checked');
    if (q4 && q4.value === 'a') {
        score++;
    }
    // Vérifier la réponse de la question 5
    const q5 = document.querySelector('input[name="q5"]:checked');
    if (q5 && q5.value === 'b') {
        score++;
    }

    // Vérifier la réponse de la question 6
    const q6 = document.querySelector('input[name="q6"]:checked');
    if (q6 && q6.value === 'c') {
        score++;
    }
    // Vérifier la réponse de la question 7
    const q7 = document.querySelector('input[name="q7"]:checked');
    if (q7 && q7.value === 'a') {
        score++;
    }
    // Vérifier la réponse de la question 8
    const q8 = document.querySelector('input[name="q8"]:checked');
    if (q8 && q8.value === 'b') {
        score++;
    }
    // Vérifier la réponse de la question 9
    const q9 = document.querySelector('input[name="q9"]:checked');
    if (q9 && q9.value === 'a') {
        score++;
    }

    // Vérifier la réponse de la question 10
    const q10 = document.querySelector('input[name="q10"]:checked');
    if (q10 && q10.value === 'd') {
        score++;
    }

    // Afficher le score
    document.getElementById('score').innerHTML = `Votre score : ${score} sur 10`;
}

function afficherCorrige() {
    window.open("correction.html", "Corrige", "width=500,height=300");
}

function effacerReponses() {
    document.getElementById("qcm-form").reset();
    document.getElementById('score').innerHTML = "";
}