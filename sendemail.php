<?php
	header('Content-type: application/json');
	$status = array(
		'type'=>'success',
		'message'=>'Mail envoyé avec succès, je vous recontacte très bientôt !'
	);

    $nom = stripslashes($_POST['name']);
    $email = stripslashes($_POST['email']);
    $message = stripslashes($_POST['message']);
    $entreprise = stripslashes($_POST['entreprise']);

    $sujet = "Contact depuis le portefolio";
    $numero = '06 24 34 44 17';
    $email_to = 'benjamin.rouquet4@gmail.com';
    $siteWeb = 'benjamin-rouquet.fr';
    $linkedin = 'https://www.linkedin.com/in/benjamin-rouquet-172a29a4/';
    $viadeo = 'http://fr.viadeo.com/fr/profile/benjamin.rouquet1';

    $body = 'Nom: ' . $nom . "\n\n"
          . 'Adresse mail: ' . $email . "\n\n"
          . 'Message :' . $message;

    $success = @mail($email_to, $sujet, $body, 'From: <'.$email.'>');

    if (isset($_POST['copie-email'])) {
    $copie = stripcslashes($_POST['copie-email']);

        if($copie == 'on') {
            $sujet = "Prise de contact avec Benjamin Rouquet";


            $body = 'Merci d\'avoir prit contact avec moi ! Je vous recontacte dès que possible.' . "\n\n\n"
                  . 'Vous pouvez me retrouver ici : ' . "\n\n"
                  . 'Adresse mail : ' . $email_to . "\n\n"
                  . 'Téléphone : ' . $numero . "\n\n"
                  . 'Site web : ' . $siteWeb . "\n\n"
                  . 'Linkedin : ' . $linkedin . "\n\n"
                  . 'Viadeo : ' . $viadeo . "\n\n"
                  . 'Votre message : ' . "\n\n" . $message . "\n\n"
                  . 'Cordialement, Benjamin Rouquet';

            $success = @mail($email, $sujet, $body, 'From: <'.$email_to.'>');

        }
    }

    echo json_encode($status);
    die;
