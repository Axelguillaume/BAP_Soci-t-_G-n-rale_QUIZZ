$(document).ready(function(){

	function Worms(url_img,name){
		this.name = name;
		this.url_img = url_img;
		this.element = function(){
			if($('.'+this.name)){
				return $('.'+this.name);
			}else{
				return $('<img class="'+this.name+'" src="'+this.url_img+'"/>');
			}
		};
		this.x = innerWidth;
	}

	worms = new Worms('lkj.jql','roger');
	function init(){
		//___Worm
		worms = $('.worms');
		posy = innerHeight - worms.height();
		posx = innerWidth - worms.width() - 10; 

		worms.css({'top':posy, 'left':posx});

		//__Bird
		$('.bird').css({'left':0});

		birdDepart = ['bird1','bird2','bird3','bird4','bird5','bird6','bird7','bird8','bird9'];
		birdArrive = [];
		birdActive = [];
		vbird = 10;

	}
	init();

	$('body').keydown(function(event){
		console.log(event.keyCode);
		if(event.keyCode == 32){
			console.log('start');
			var intervalGameLoop = setInterval(run,1000/60);
			var intervalApparitionBird = setInterval(apparition_bird,5000);
		}

		switch(event.keyCode){
			case 38:
				posy -= 5;
			break;
			case 40:
				posy += 5;
			break;
			case 37:
				posx -= 5;
			break;
			case 39:
				posx += 5;
			break;
		}

		$('.worms').css({'top':posy, 'left':posx});
	});

	var rdm_height_bird = Math.floor(Math.random()*(innerHeight-10));

	function run(){
			
			
	}

	function apparition_bird(){
		if(birdDepart.length>0){
			var rdm_case = Math.floor(Math.random()*(birdDepart.length));
			birdActive.push(birdDepart[rdm_case]);			
		}else{
			setTimeOut(apparition_bird);
		}
	}


});