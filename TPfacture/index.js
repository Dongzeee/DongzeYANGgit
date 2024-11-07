// Fonction pour calculer le résultat pour chaque ligne et le total
function calculer() {
    let table = document.getElementById("factureTable");
    let rows = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");
    let total = 0;

    // Parcours de chaque ligne (sauf la dernière pour le total)
    for (let i = 0; i < rows.length - 1; i++) {
        let prix = rows[i].getElementsByClassName("prix")[0].value;
        let quantite = rows[i].getElementsByClassName("quantite")[0].value;
        let resultatCell = rows[i].getElementsByClassName("resultat")[0];

        // Calculer le résultat pour la ligne
        let resultat = prix * quantite;
        resultatCell.value = resultat || ""; // Affiche vide si résultat est 0 ou NaN

        // Additionne le résultat au total général
        total += resultat || 0;
    }

    // Affiche le total
    document.getElementById("total").value = total.toFixed(2);
}

// Fonction pour réinitialiser tous les champs
function reinitialiser() {
    let table = document.getElementById("factureTable");
    let rows = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");

    // Réinitialise chaque ligne (sauf la dernière pour le total)
    for (let i = 0; i < rows.length - 1; i++) {
        rows[i].getElementsByClassName("article")[0].value = "";
        rows[i].getElementsByClassName("prix")[0].value = "";
        rows[i].getElementsByClassName("quantite")[0].value = "";
        rows[i].getElementsByClassName("resultat")[0].value = "";
    }

    // Réinitialise le total
    document.getElementById("total").value = "";
}
