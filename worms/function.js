

	function initBird(element){

		element.css('left',-1000);
		y = Math.floor( Math.random()*( innerHeight - parseInt(element.css('height')) ) );
		vx = Math.floor(Math.random()*10 + 5);
		element.css('top',y);
		element.attr('vx',vx);

	}




	function initWorms(element){

		element.css('left',innerWidth - worms.w);
		element.css('top',innerHeight/2 - worms.h);

	}




	function contactWithWorms(element){

		if(
			element.css('left') + element.css('left') < worms.x ||
			element.css('top') + element.css('top') < worms.y ||
			element.css('left') > worms.x + worms.w ||
			element.css('top') > worms.y + worms.h
		){
			contact = false;
		}else{
			contact = true;
		}

		return contact;
	}




	function input(){

		if(keyboard.up) worms.vy -= 1;
		if(keyboard.down) worms.vy += 1;
		if(keyboard.left) worms.vx -= 1;
		if(keyboard.right) worms.vx += 1;

	}




	function initGame(){
		
		$('.bird').each(function(element){
			initBird($(this));
		});

		initWorms($('.worms'));
		$('.vie').html(worms.vie);

	}