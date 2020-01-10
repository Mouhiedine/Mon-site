<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">



<?php
if(isset($_POST['Envoi']))
{
    if(!empty($_POST['TextBoxNom']) and !empty($_POST['TextBoxMail']) and !empty($_POST['TextBoxRemarque']))
    {
        $header ="MIME-Version: 1.0\r\n";
        $header.='From:'.$_POST['TextBoxNom'].'<testwampmountainboard@gmail.com>'."\n";
        $header.='Content-Type:text/html; charset="utf-8" '."\n";
        $header.='Content-Transfert-Encoding : 8bit';

        $message = '

        <html>
            <body>
                <div align="center">
                    <u>Nom de l\'expéditeur :</u>'.$_POST['TextBoxNom'].'<br/>
                    <u>Mail de l\'expéditeur :</u>'.$_POST['TextBoxMail'].'<br/>
                    <br />
                    '.$_POST['TextBoxRemarque'].'
                </div>
            </body>
        </html>
        ';

        mail("b.mouhiedine@hotmail.fr", "Salut", $message, $header);

        $erreur = "Votre message a bien été envoyé. Nous y répondrons rapidement !";
    }
    else
    {
        $erreur = "Tous les champs doivent être complétés";
    }
}
?>

<html>
    <head>
        <link rel="stylesheet" href="../css/contactstyle.css">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Fiche de contact</title>
    </head>

    <body>

        <a class="Contactbouton" href="Contact.php" >Contact</a>
    
        <a class="Inscriptionbouton" href="Inscription.php">Inscription</a>

        <a class="Connexionbouton" href="<?php if (!isset($_SESSION['Identifiant'])) {echo "Connexion.php";} else {echo "Deconnexion.php";}?>"/> <?php if (!isset($_SESSION['Identifiant'])) {echo "Connexion";} else {echo "Deconnexion";}?> </a>

        <a class="Accueilbouton" href="../Index.php">Accueil</a>

       



        <div class = "PositionTotale">

            <h2>Une question? Une remarque ? N'hésitez pas !</h2>

            <form  method="post" action="">

                <p>
                    <label for="TextBoxNom">Nom :</label>
                    <input type="text" name="TextBoxNom" value = "<?php if(isset($_POST['TextBoxNom'])) {echo $_POST['TextBoxNom'];} ?>" /><br />
                </p>

                <p>
                    <label for="TextBoxMail">Adresse Mail :</label>
                    <input type="mail" name="TextBoxMail" value = "<?php if(isset($_POST['TextBoxMail'])) {echo $_POST['TextBoxMail'];} ?>"/><br />
                </p>

                <p>
                    <label for="TextBoxRemarque"> Remarque : </label>
                    <textarea cols='40' rows='10' type="text" name="TextBoxRemarque"> </textarea><br />
                </p>
                
                <p>
                    <input  type="submit" class="BoutonValidation" name="Envoi"  value="Envoi">
                    </p>
            </form>
                
                <?php
                    if(isset($erreur))
                    {
                        echo $erreur;
                    }
                ?>
            
        </div>

        <img class="Idee" src="../images/idee.jpg"></a>  

    </body>
</html>