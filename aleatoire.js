function aleatoire_01() {
    var nombre_aleatoire_1 = 0;
    var nombre_aleatoire_2 = 0;
    var x = 0;
    var y =0;

    x = Math.floor((Math.random() * 4) +1);
    while (x == 1) {
    	x = Math.floor((Math.random() * 4) +1);
    }
    nombre_aleatoire_1 = x;

    y = Math.floor((Math.random() * 4) +1);
    while (y == 1 || y == nombre_aleatoire_1) {
    	y = Math.floor((Math.random() * 4) +1);
    }
    nombre_aleatoire_2 = y;

    console.log(nombre_aleatoire_1 , nombre_aleatoire_2);

    if (nombre_aleatoire_1 == 2 || nombre_aleatoire_2 == 2) {
    	//cache la reponse 2
    	$('#r2').hide();
    }
     if (nombre_aleatoire_1 == 3 || nombre_aleatoire_2 == 3) {
    	//cache la reponse 3
    	$('#r3').hide();
    }
     if (nombre_aleatoire_1 == 4 || nombre_aleatoire_2 == 4) {
    	//cache la reponse 4
    	$('#r4').hide();
    }

    $('#q1_50').hide();
}