<?php

 @include["connecte.php"];
$ref = $_POST['reference'];
$nb_page = $_POST['nb_pages'];
$auteur = $_POST['auteur'];
$date_pub = $_POST['Date_publication'];
$genre = $_POST['Genre'];
$dispo = $_POST['dispo'];
$nb_emp = $_POST['Nbre_emprunts'];
$etat = $_POST['etat'];
$nb_ex = $_POST['nb_ex'];

$requete = "INSERT TO livres VALUES ('$ref', '$nb_pages', '$auteur', '$date_pub','$genre','$dispo','$nbre_emprunts','$etat','$nb_ex')";
$rl = mysqli_query($conn,$requete);

echo "<center><p>Ajout OK</p></center>";
echo '<center><a href="index.html">Retour</a></center>'

mysqli_close($conn)

?>
