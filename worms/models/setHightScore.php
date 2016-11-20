<?php
	
	require 'connect.php';

	$score = $_POST['score'];
	$pseudo = $_POST['pseudo'];

	$req = $bdd->query('INSERT INTO worms_score(score,pseudo) VALUES ("'.$score.'","'.$pseudo.'") ');

	if($req){
		echo json_encode(['success'=>'true']);
	}else{
		echo json_encode(['success'=>'false']);
	}

?>