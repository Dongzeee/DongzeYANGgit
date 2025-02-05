function ajouterLigne() {
    let tableBody = document.getElementById("facture-body");
    let modele = document.querySelector(".ligne-modele");
    let nouvelleLigne = modele.cloneNode(true);
    nouvelleLigne.classList.remove("ligne-modele"); // Retirer la classe modèle
    tableBody.appendChild(nouvelleLigne);
}

function remplir() {
    let descriptions = ["Ordinateur", "Clavier", "Souris", "Écran", "Casque", "Imprimante"];
    let lignes = document.querySelectorAll("#facture-body tr");

    lignes.forEach(ligne => {
        ligne.querySelector(".desc").value = descriptions[Math.floor(Math.random() * descriptions.length)];
        ligne.querySelector(".qte").value = Math.floor(Math.random() * 10) + 1;
        ligne.querySelector(".prix").value = Math.floor(Math.random() * 100) + 1;
    });
}

function calculer() {
    let sousTotal = 0;

    document.querySelectorAll("#facture-body tr").forEach(ligne => {
        const qte = parseFloat(ligne.querySelector(".qte").value) || 0;
        const prix = parseFloat(ligne.querySelector(".prix").value) || 0;
        const totalLigne = qte * prix;
        ligne.querySelector(".total-ligne").textContent = totalLigne.toFixed(2);
        sousTotal += totalLigne;
    });

    document.getElementById("sousTotal").textContent = sousTotal.toFixed(2);

    const remisePourcentage = parseFloat(document.getElementById("remise").value) || 0;
    const remiseMontant = sousTotal * (remisePourcentage / 100);
    const totalApresRemise = sousTotal - remiseMontant;
    document.getElementById("sousTotalRemise").textContent = totalApresRemise.toFixed(2);

    const taxePourcentage = parseFloat(document.getElementById("taxe").value) || 0;
    const taxe = totalApresRemise * (taxePourcentage / 100);
    document.getElementById("taxeTotale").textContent = taxe.toFixed(2);

    const frais = parseFloat(document.getElementById("frais").value) || 0;
    const totalFinal = totalApresRemise + taxe + frais;
    document.getElementById("totalFinal").textContent = totalFinal.toFixed(2);
}

function annuler() {
    document.getElementById("facture-body").innerHTML = "";
    document.getElementById("sousTotal").textContent = "0.00";
    document.getElementById("sousTotalRemise").textContent = "0.00";
    document.getElementById("taxeTotale").textContent = "0.00";
    document.getElementById("totalFinal").textContent = "0.00";
}
