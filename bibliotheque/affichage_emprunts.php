<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            margin: 0;
            padding: 20px;
        }

        table {
            border-collapse: collapse;
            width: 80%;
            margin: 20px auto;
            background-color: #fff;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        th, td {
            border: 1px solid #ddd;
            text-align: left;
            padding: 8px;
        }

        th {
            background-color: #007BFF;
            color: white;
        }

        tr:nth-child(even) {
            background-color: #f2f2f2;
        }

        tr:hover {
            background-color: #ddd;
        }

        a {
            display: inline-block;
            margin: 20px auto;
            text-align: center;
            text-decoration: none;
            color: white;
            background-color: #007BFF;
            padding: 10px 20px;
            border-radius: 5px;
            transition: background-color 0.3s;
        }

        a:hover {
            background-color: #0056b3;
        }

        center {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    </style>
<html>
    <body>
    <center>
        <?php
        @include("connexion.php");
        $requete="select * from emprunts";
        $resultat=mysqli_query($conn,$requete);
        ?>
            <table border="1">
            <tr>
                <td>ID</td>
                <td>Date</td>
                <td>Duree</td>
                <td>ID d'adherent</td>
                <td>Livre</td>
            </tr>
            <?php while($enreg=mysqli_fetch_array($resultat)) { ?>
            <tr>
                <td><?php echo $enreg["ID_emprunt"];?></td>
                <td><?php echo $enreg["Date_emprunt"];?></td>
                <td><?php echo $enreg["Duree"];?></td>
                <td><?php echo $enreg["ID_Adherent"];?></td>
                <td><?php echo $enreg["Reference_livre"];?></td>
            </tr>
            <?php } ?>
            </table>
            <a href="index.html">Retour</a>
        </center>
        <?php
        mysqli_close($conn);?>
    </body>
</html>