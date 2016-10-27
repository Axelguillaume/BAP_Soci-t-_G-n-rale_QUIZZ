<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <title>Google Form</title>
  <link rel="stylesheet" href="style/style.css">
  <link rel="stylesheet" type="text/css" href="style/bootstrap.css">

</head>
<body>

	<!-- HEADER -->

	<header class="col-lg-12 container-fluid"></header>


	<!-- DOcument -->

	<div id="document">
		<div id="color"></div>
		<center><p>Finkielsztejn Paul Groupe 2 Web</p></center>
		<div id="question">
			<!--	<p> Lorem Ipsum 1</p>
					<div class="checkbox">
					<label><input type="checkbox" value="">Option 1</label>
					</div>
					<div class="checkbox">
					<label><input type="checkbox" value="">Option 2</label>
					</div>
					<br>
				<p> Lorem Ipsum 2</p>
					<div class="checkbox">
					<label><input type="checkbox" value="">Option 1</label>
					</div>
					<div class="checkbox">
					<label><input type="checkbox" value="">Option 2</label>
					</div>
					<br>
				<p> Lorem Ipsum 3</p>
					<div class="checkbox">
					<label><input type="checkbox" value="">Option 1</label>
					</div>
					<div class="checkbox">
					<label><input type="checkbox" value="">Option 2</label>
					</div>	
					<br>
				<p> Lorem Ipsum 4</p>
					<div class="checkbox">
					<label><input type="checkbox" value="">Option 1</label>
					</div>
					<div class="checkbox">
					<label><input type="checkbox" value="">Option 2</label>
					</div>
					<br>
				<p> Lorem Ipsum 5</p>
					<div class="checkbox">
					<label><input type="checkbox" value="">Option 1</label>
					</div>
					<div class="checkbox">
					<label><input type="checkbox" value="">Option 2</label>
					</div>
					<br>
				<p> Lorem Ipsum 6</p>
					<div class="checkbox">
					<label><input type="checkbox" value="">Option 1</label>
					</div>
					<div class="checkbox">
					<label><input type="checkbox" value="">Option 2</label>
					</div>
					<br>
				<p> Lorem Ipsum 7</p>
					<div class="checkbox">
					<label><input type="checkbox" value="">Option 1</label>
					</div>
					<div class="checkbox">
					<label><input type="checkbox" value="">Option 2</label>
					</div>	
					<br>	
				<p> Lorem Ipsum 8</p>
					<div class="checkbox">
					<label><input type="checkbox" value="">Option 1</label>
					</div>
					<div class="checkbox">
					<label><input type="checkbox" value="">Option 2</label>
					</div>
					<button type="button" class="btn btn-primary">ENVOYER</button> -->

			<form action="#" method="post">
				<?php

				require_once("connect.php");		// Connexion a la bdd

				$questions = mysqli_query($con, "SELECT * FROM `test_question` ");
				$i = 1;
				while($row = mysqli_fetch_assoc($questions)){
					$id = $row['id'];
					echo "<div class='thumbnail'>
					<p>{$i}-: ".$row['question']."</p>
					<div class='radio'>
						<label><input checked type='radio' name='{$id}' value='1'> ".htmlspecialchars($row['option1'])."</label>
					</div>
					<div class='radio'>
						<label><input type='radio' name='{$id}' value='2'> ".htmlspecialchars($row['option2'])."</label>
					</div>
					<div class='radio'>
						<label><input type='radio' name='{$id}' value='3'> ".htmlspecialchars($row['option3'])."</label>
					</div>
					<div class='radio'>
						<label><input type='radio' name='{$id}' value='4'> ".htmlspecialchars($row['option4'])."</label>
					</div>
					</div>";
					$i++;
				}
				?>
				<input type="hidden" name="test_id" value='#'>
				<input type="submit" value="submit" class='btn btn-primary'>
			</form>

		</div>
	</div>

	


	<!-- FOOTER -->

	<div id="footer" class="col-lg-12 container-fluid">
			<center><p>Ce contenu n'est ni rédigé, ni cautionné par Google. Signaler un cas d'utilisation abusive - Conditions d'utilisation - Clauses additionnelles</p><center>
	</div>
	<center><a href="https://www.google.com/forms/about/?utm_source=product&utm_medium=forms_logo&utm_campaign=forms"><img  src="img/googleforms.png" alt="Google Forms" style="width:140px;height:30px;"></a><center>

</body>
</html> 