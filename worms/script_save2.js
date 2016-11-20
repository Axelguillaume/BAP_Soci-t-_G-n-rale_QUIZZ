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

	//--init worms
	var worms = {
		x : innerWidth - $('.worms').width(),
		y : innerHeight/2 - $('.worms').height(),
		vx : 0,
		vy : 0,

		h : $('.worms').height(),
		w : $('.worms').width()
	}

	$('.worms').css({'left': worms.x, 'top': worms.y});

	//-vie et munition
	var vie = 5;
	$('.vie').html(vie);
	var munitions = 40;
	var missile = {};
	missile.h = $('.missile-layer').height();
	missile.w = $('.missile-layer').width();

	$('.munitions').html(munitions);
	function Bullet(x,y,w,h){
		this.x = x;
		this.y = y;
		this.h = h;
		this.w = w;

		this.vx = -20;

	}
	var bullets = [];

	//--init birds
	var birds = [
		{
			x : 0,
			y : 0,
			vx : 0,
			w : 0
		},
		{
			x : 0,
			y : 0,
			vx : 0,
			w : 0
		},
		{
			x : 0,
			y : 0,
			vx : 0,
			w : 0
		},
		{
			x : 0,
			y : 0,
			vx : 0,
			w : 0
		},
		{
			x : 0,
			y : 0,
			vx : 0,
			w : 0
		},
		{
			x : 0,
			y : 0,
			vx : 0,
			w : 0
		},
		{
			x : 0,
			y : 0,
			vx : 0,
			w : 0
		},
		{
			x : 0,
			y : 0,
			vx : 0,
			w : 0
		},
		{
			x : 0,
			y : 0,
			vx : 0,
			w : 0
		}
	];
			//-- initialisation des parametres des birds
			function initInitBird(bird,i){
				bird.vx = Math.random()*5 + 5;
				bird.w = $('.bird' + (i+1)).width();
				bird.h = $('.bird' + (i+1)).height();
				bird.x = -2000;
				bird.y = Math.random()*(innerHeight - bird.h);

				$('.bird' + (i+1)).css({'left':bird.x, 'top':bird.y});
				return bird;
			}

			function initBird(bird,i){
				bird.vx = Math.random()*5 + 5;
				bird.w = $('.bird' + (i+1)).width();
				bird.h = $('.bird' + (i+1)).height();
				bird.x = -bird.w;
				bird.y = Math.random()*(innerHeight - bird.h);

				$('.bird' + (i+1)).css({'left':bird.x, 'top':bird.y});
				return bird;
			}
			for(i=0;i<birds.length;i++){
				birds[i] = initBird(birds[i],i);
			}
	
	//--init apple
	var apples = [
		{
			x : 0,
			y : 0,
			vx : 0
		},
		{
			x : 0,
			y : 0,
			vx : 0
		}
	];
			//-- initalisationd des paramètres apples
			function initApple(apple,i){
				apple.vx = Math.random()*5 + 5;
				apple.w = $('.apple' + (i+1)).width();
				apple.h = $('.apple' + (i+1)).height();
				apple.x = -apple.w;
				apple.y = Math.random()*(innerHeight - apple.h);

				$('.apple' + (i+1)).css({'left':apple.x, 'top':apple.y});
				return apple;
			}
			for(i=0;i<apples.length;i++){
				apples[i] = initApple(apples[i],i);
			}

			function initInitApple(apple,i){
					apple.vx = Math.random()*5 + 5;
				apple.w = $('.apple' + (i+1)).width();
				apple.h = $('.apple' + (i+1)).height();
				apple.x = -2000;
				apple.y = Math.random()*(innerHeight - apple.h);

				$('.apple' + (i+1)).css({'left':apple.x, 'top':apple.y});
				return apple;
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
	for(i=0;i<birds.length;i++){
		birds[i] = initInitBird(birds[i],i);
	}
	for(i=0;i<apples.length;i++){
		apples[i] = initInitApple(apples[i],i);
	}
	
	setInterval(function(){
		
		//-- update et draw du worms
		if(keyboard.up) worms.vy -= 1;
		if(keyboard.down) worms.vy += 1;
		if(keyboard.left) worms.vx -= 1;
		if(keyboard.right) worms.vx += 1;

		worms.x += worms.vx;
		worms.y += worms.vy;
		worms.vx = worms.vx * 0.95;
		worms.vy = worms.vy * 0.95;

		if(worms.y < 0) worms.y = 0;
		if(worms.y + worms.h > innerHeight) worms.y =	 innerHeight - worms.h;
		if(worms.x < 0) worms.x = 0;
		if(worms.x + worms.w > innerWidth) worms.x = innerWidth - worms.w;

		$('.worms').css({'left': worms.x, 'top': worms.y});

		if(keyboard.shoot && keyboard.timer < 0){
			console.log('shoot');
			keyboard.timer = 10;

			var bullet = new Bullet(worms.x,worms.y,missile.w,missile.h);
			bullets.push(bullet);
		}else{
			keyboard.timer -= 1;
		}


		$('.missile').remove();
		bullets.forEach(function(bullet){
			bullet.x += bullet.vx;
			missile = $('<img class="missile" src="images/worms/missile4.png" style="position:absolute; left:'+bullet.x+ '; top:'+bullet.y+ '" />');
			missile.appendTo('body');
		});

		//-- update et draw de bird1
		for(i=0;i<birds.length;i++){
			birds[i].x += birds[i].vx;
			if(birds[i].x > innerWidth){
				birds[i] = initBird(birds[i],i);
			}

			if(
				birds[i].x + birds[i].w < worms.x ||
				birds[i].y + birds[i].h < worms.y ||
				birds[i].x > worms.x + worms.w ||
				birds[i].y > worms.y + worms.h
			){
				
			}else{
				vie -= 1;
				$('.vie').html(vie);

				birds[i] = initBird(birds[i],i);

				if(!vie){
					alert('Perdu !!!');
					// reinitialisation du jeu;

					vie = 5;
					$('.vie').html(vie);
					for(i=0;i<birds.length;i++){
						birds[i] = initInitBird(birds[i],i);
					}
					for(i=0;i<apples.length;i++){
						apples[i] = initInitApple(apples[i],i);
					}
				}
				
			}


			$('.bird' + (i+1)).css('left',birds[i].x);

		}

		for(i=0;i<apples.length;i++){
			apples[i].x += apples[i].vx;
			if(apples[i].x > innerWidth){
				apples[i] = initInitApple(apples[i],i);
			}
			$('.apple' + (i+1)).css('left',apples[i].x);

		}
		



	}, 1000/60);
});