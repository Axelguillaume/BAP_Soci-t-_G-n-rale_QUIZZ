$(document).ready(function(){

	
	//--init clavier
	var keyboard = {
		up : 0,
		dpwn : 0,
		left : 0,
		right : 0,

		shoot : 0,
		timer : 0
	}

	var worms = {
		w : parseInt($('.worms').css('width')),
		h : parseInt($('.worms').css('height')),

		vx : 0,
		vy : 0,

		vie : 5,
		munition : 30
	}

	var missile = {
		h : parseInt($('._missile').height()),
		w : parseInt($('._missile').width())
	}
	
	var _plat = {
		h : parseInt($('._plat').height()),
		w : parseInt($('._plat').width())
	}

	var score = {
		total : 0,
		killBird : 20,
		takeEgg : 100
	}

	//--Touche clavier
	$(document).keydown(function(event){

		if(event.keyCode == 38) keyboard.up = 1;
		if(event.keyCode == 40) keyboard.down = 1;
		if(event.keyCode == 37) keyboard.left = 1;
		if(event.keyCode == 39) keyboard.right = 1;
		if(event.keyCode == 32) keyboard.shoot = 1;

	});

	$(document).keyup(function(event){

		if(event.keyCode == 38) keyboard.up = 0;
		if(event.keyCode == 40) keyboard.down = 0;
		if(event.keyCode == 37) keyboard.left = 0;
		if(event.keyCode == 39) keyboard.right = 0;
		if(event.keyCode == 32) keyboard.shoot = 0;

	});

	//--gameLoop
	
	function gameLoop(){
		input();

		$('.worms').css('left','+='+worms.vx);
		$('.worms').css('top','+='+worms.vy);
		worms.vx = worms.vx * 0.90;
		worms.vy = worms.vy * 0.90;

		if(parseInt($('.worms').css('top')) < 0) $('.worms').css('top',0);
		if(parseInt($('.worms').css('top')) + worms.h > innerHeight) $('.worms').css('top',(innerHeight - worms.h));
		if(parseInt($('.worms').css('left')) < 0) $('.worms').css('left',0);
		if(parseInt($('.worms').css('left')) + worms.w > innerWidth) $('.worms').css('left',(innerWidth - worms.w));

		$('.missile').each(function(){
			
			
			$(this).css('left','-=10');

			if( parseInt($(this).css('left')) < -100 ){
				$(this).remove();
			}
		});

		$('.element').children().each(function(){
			
			$(this).css('left','+='+$(this).attr('vx'));

			contact = contactWithWorms($(this));

			if( parseInt($(this).css('left')) > innerWidth ){
				initElement($(this));
			}else if(contact){
				
				initElement($(this));
				if($(this).hasClass('bird')){
					worms.vie --;
					//______________908098098098
					$('.pensement[active=false]:last').show().attr('active','true');
					//display:none pour le dernier life;
					//display:block pour le dernier killed;
					//_______________________àç_èàç_èàç_èàç_èàç_èàç_è
					//-- oeuf qui tombe;
				}else if($(this).hasClass('apple')){
					worms.vie = (worms.vie<5)? worms.vie + 1 : worms.vie;
					$('.pensement[active=true]:first').hide().attr('active','false');
				}else if($(this).hasClass('ammo')){
					worms.munition += 10;
				}
				
				
			}

			contact_b = contactWithBullet($(this));
			if(contact_b){
				if($(this).hasClass('bird')){

					score.total += score.killBird;

					if($(this).attr('color') == 'purple') {
						oeuf = $('<img class="oeuf" src="images/birds/egg_purple_bird.png">');
					}else if($(this).attr('color') == 'blue'){
						oeuf = $('<img class="oeuf" src="images/birds/egg_blue_bird.png">');
					}else if($(this).attr('color') == 'red'){
						oeuf = $('<img class="oeuf" src="images/birds/egg_red_bird.png">');
					}else if($(this).attr('color') == 'grey'){
						oeuf = $('<img class="oeuf" src="images/birds/egg_grey_bird.png">');
					}else if($(this).attr('color') == 'green'){
						oeuf = $('<img class="oeuf" src="images/birds/egg_green_bird.png">');
					}

					oeuf.css('left',$(this).css('left') );
					oeuf.css('top',$(this).css('top') );
					oeuf.appendTo('.jeu');
				}
				contact_b.remove();
				initElement($(this));
			}

		});

		$('.oeuf').each(function(){
			$(this).css('top','+=10');
			if(parseInt($(this).css('top')) + parseInt($(this).height()) > innerHeight){

				plat = $('<img class="plat" src="images/birds/egg.png" />');
				x = parseInt($(this).css('left')) - 50;
				plat.css('left', x );
				plat.css('top',(innerHeight - _plat.h));
				plat.appendTo('.jeu');

				$(this).remove();

			}
		});

		$('.plat').each(function(){
			contact = contactWithWorms($(this));
			if(contact){
				$(this).remove();
				score.total += score.takeEgg;
			}
		});

		$('.score').html(score.total);
		$('.munitions').html(worms.munition);
		//$('.vie').html(worms.vie);

		if(worms.vie > 0){
			requestAnimationFrame(gameLoop);
		}else{
			end(); 
		}
	}



	//________________function
	//------------------------------------------
	//------------------------------------------
	//------------------------------------------



	function initElement(element){
		if(element.hasClass('apple') || element.hasClass('ammo')){
			element.css('left',-2000);	
		}else{
			element.css('left',-500);	
		}
		y = Math.floor( Math.random()*( innerHeight - parseInt(element.css('height')) ) );
		vx = Math.floor(Math.random()*10 + 5);
		element.css('top',y);
		element.attr('vx',vx);

	}




	function initWorms(element){

		element.css('left',innerWidth - worms.w);
		element.css('top',innerHeight/2 - worms.h);
		worms.vie = 5;
		worms.munition = 30;

	}




	function contactWithWorms(element){
		if(
			parseInt(element.css('left')) + parseInt(element.css('width')) < parseInt($('.worms').css('left')) ||
			parseInt(element.css('top')) + parseInt(element.css('height')) < parseInt($('.worms').css('top')) ||
			parseInt(element.css('left')) > parseInt($('.worms').css('left')) + worms.w ||
			parseInt(element.css('top')) > parseInt($('.worms').css('top')) + worms.h
		){
			contact = false;
		}else{
			contact = true;
		}

		return contact;
	}

	function contactWithBullet(element){
		contact = false;
		$('.missile').each(function(){
			if(
				parseInt(element.css('left')) + parseInt(element.css('width')) < parseInt($(this).css('left')) ||
				parseInt(element.css('top')) + parseInt(element.css('height')) < parseInt($(this).css('top')) ||
				parseInt(element.css('left')) > parseInt($(this).css('left')) + missile.w ||
				parseInt(element.css('top')) > parseInt($(this).css('top')) + missile.h
			){

			}else{
				contact = $(this);
			}
		});
		

		return contact;
	}




	function input(){

		if(keyboard.up) worms.vy -= 2;
		if(keyboard.down) worms.vy += 2;
		if(keyboard.left) worms.vx -= 2;
		if(keyboard.right) worms.vx += 2;

		if(keyboard.shoot && keyboard.timer == 0 && worms.munition > 0){
			worms.munition -- ;
			x = $('.worms').css('left');
			y = $('.worms').css('top');
			$('<img class="missile" src="images/worms/missile4.png" style="top:'+y+'; left:'+x+'"/>').appendTo('.jeu');

			keyboard.timer = 10;
		}else if(keyboard.timer > 0 ){
			keyboard.timer -= 1;
		}

	}




	function initGame(){
		
		$('.element').children().each(function(element){
			initElement($(this));
		});

		initWorms($('.worms'));
		$('.pensement').hide().attr('active','false');
		//$('.vie').html(worms.vie);
		$('.munition').html(worms.munition);
		score = {	
				total : 0,
				killBird : 20,
				takeEgg : 100
			}
		$('.score').html(score.total);
	}

	function end(){
		$('.missile').remove();
		$('.oeuf').remove();
		$('.plat').remove();
		$('.jeu').hide();
		$('.form_hightScore').show();
		$('.end_game').show();
		console.log($('.score').html());
		getHightScore();
	}

	//------------------------------------------
	//------------------------------------------
	//------------------------------------------


	


	//-------------------------------------------
	// FUNCTION de liaison avec bdd hightScore
	//-------------------------------------------


	//-------------------------------------------
	// FUNCTION de liaison avec bdd hightScore
	//-------------------------------------------

	$('#submit_hightScore').click(function(){
		
		if($('input[name=pseudo]').val() != ''){

			pseudo = $('input[name=pseudo]').val();
			setscore = parseInt($('.score').html());
			console.log(setscore);
			$.ajax({
				url : 'models/setHightScore.php',
				type : 'post',
				data : {'pseudo':pseudo,'score':setscore},
				dataType : 'json',
				success : function(data){
					console.log('score envoyé');
					console.log(data);
					$('.form_hightScore').hide();
					getHightScore();
				}
			});
		}
		
	});

	$('#rejouer').click(function(){
		$('.end_Game').hide();
		$('.jeu').show();
		initGame();
		gameLoop();
	});

	$('#jouer').click(function(){
		$('.rules').hide();
		$('.jeu').show();
		initGame();
		gameLoop();
	});

	function getHightScore(){
		$('.table').remove();
		$('<table class="table table-striped"> <thead> <tr> <td>#</td> <td>Pseudo</td> <td>Score</td> </tr> </thead> <tbody> </tbody> </table> ').appendTo('.panel-default');		
		$.ajax({
			url : 'models/getHightScore.php',
			dataType : 'json',
			success : function(data){
				console.log(data);
				classement = 1;
				data.forEach(function(joueur){
					row = $('<tr></tr>');
					$('<td>'+classement+'</td>').appendTo(row);
					pseudo = $('<td>'+joueur.pseudo+'</td>');
					score = $('<td class="joueur_score">'+joueur.score+'</td>');

					pseudo.appendTo(row);
					score.appendTo(row);
					row.appendTo('table tbody');

					classement ++;
				});
			}


		});

	}







	//--------------------------------------------


	$('.end_game').hide();
	$('.jeu').hide();
	//initGame();
	//gameLoop();



	//--------------------------------------------

});