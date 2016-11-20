<?php
	
	require 'connect.php';

	$req = $bdd->query('SELECT id,score,pseudo FROM worms_score ORDER BY score DESC LIMIT 10');
	$res = $req->fetchAll();

	echo json_encode($res);
?>