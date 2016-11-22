function aleatoire_01() {
    var nombre_aleatoire_1 = 0;
    var nombre_aleatoire_2 = 0;
    var x = 0;
    var y =0;

    x = Math.floor((Math.random() * 4) +1);
    while (x == 3) {
    	x = Math.floor((Math.random() * 4) +1);
    }
    nombre_aleatoire_1 = x;

    y = Math.floor((Math.random() * 4) +1);
    while (y == 3 || y == nombre_aleatoire_1) {
    	y = Math.floor((Math.random() * 4) +1);
    }
    nombre_aleatoire_2 = y;

    console.log(nombre_aleatoire_1 , nombre_aleatoire_2);

    if (nombre_aleatoire_1 == 1 || nombre_aleatoire_2 == 1) {
    	//cache la reponse 1
    	$('#r1').hide();
    }
     if (nombre_aleatoire_1 == 2 || nombre_aleatoire_2 == 2) {
    	//cache la reponse 2
    	$('#r2').hide();
    }
     if (nombre_aleatoire_1 == 4 || nombre_aleatoire_2 == 4) {
    	//cache la reponse 4
    	$('#r4').hide();
    }

    $('.q1_50').hide();
}

function aleatoire_02() {
    var nombre_aleatoire_1 = 0;
    var nombre_aleatoire_2 = 0;
    var x = 0;
    var y =0;

    x = Math.floor((Math.random() * 4) +1);
    while (x == 4) {
    	x = Math.floor((Math.random() * 4) +1);
    }
    nombre_aleatoire_1 = x;

    y = Math.floor((Math.random() * 4) +1);
    while (y == 4 || y == nombre_aleatoire_1) {
    	y = Math.floor((Math.random() * 4) +1);
    }
    nombre_aleatoire_2 = y;

    console.log(nombre_aleatoire_1 , nombre_aleatoire_2);

    if (nombre_aleatoire_1 == 1 || nombre_aleatoire_2 == 1) {
    	//cache la reponse 4
    	$('#r5').hide();
    }
     if (nombre_aleatoire_1 == 2 || nombre_aleatoire_2 == 2) {
    	//cache la reponse 6
    	$('#r6').hide();
    }
     if (nombre_aleatoire_1 == 3 || nombre_aleatoire_2 == 3) {
    	//cache la reponse 7
    	$('#r7').hide();
    }

    $('.q1_50').hide();
}

function aleatoire_03() {
    var nombre_aleatoire_1 = 0;
    var nombre_aleatoire_2 = 0;
    var x = 0;
    var y =0;

    x = Math.floor((Math.random() * 4) +1);
    while (x == 3) {
    	x = Math.floor((Math.random() * 4) +1);
    }
    nombre_aleatoire_1 = x;

    y = Math.floor((Math.random() * 4) +1);
    while (y == 3 || y == nombre_aleatoire_1) {
    	y = Math.floor((Math.random() * 4) +1);
    }
    nombre_aleatoire_2 = y;

    console.log(nombre_aleatoire_1 , nombre_aleatoire_2);

    if (nombre_aleatoire_1 == 1 || nombre_aleatoire_2 == 1) {
    	//cache la reponse 9
    	$('#r9').hide();
    }
     if (nombre_aleatoire_1 == 2 || nombre_aleatoire_2 == 2) {
    	//cache la reponse 10
    	$('#r10').hide();
    }
     if (nombre_aleatoire_1 == 4 || nombre_aleatoire_2 == 4) {
    	//cache la reponse 12
    	$('#r12').hide();
    }

    $('.q1_50').hide();
}

function aleatoire_04() {
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

    if (nombre_aleatoire_1 == 1 || nombre_aleatoire_2 == 1) {
    	//cache la reponse 13
    	$('#r13').hide();
    }
     if (nombre_aleatoire_1 == 2 || nombre_aleatoire_2 == 2) {
    	//cache la reponse 14
    	$('#r14').hide();
    }
     if (nombre_aleatoire_1 == 4 || nombre_aleatoire_2 == 4) {
    	//cache la reponse 16
    	$('#r16').hide();
    }

    $('.q1_50').hide();
}