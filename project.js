var setup = function() {
    var background = loadImage("Background2.png");
    var tired_worker = .loadImage("Enemy.png");
    var pistol = loadImage("Gun.png");
    var assault_rifle = loadImage("Assault_Rifle.png");
    var coin = loadImage("1_Coin.png");
    var key = loadImage("Key.png")
    var jet = loadImage("Jet.png");
    var key_hole = loadImage("Key_Hole.png");
    var crate_with_button = loadImage("Crate_With_Button.png");
    var health_bar = loadImage("Health_Bar.png");
    var tank = loadImage("Tank.png");
    var ammo_box = loadImage("Ammo_Box.png");
    var main_character = loadImage("Character_With_Gun.png");
    var mainx = 100;
    var mainy = 326;
    var bulletX = mainx;
    var bulletY = mainy;
    var bulletFired = main_character;
    var speed = -5;
    var tired_workery = 300;
    var tired_workerx = 150;
    var setup = function() {
	// this code is executed once when the program is started
	var mouseClicked = function(){
	    bulletFired = true;
	    bulletX = 1;


	    draw = function() {
		// Left Number = Side to Side Right Number = Up and down
		image(background, 0, 0);
		//processing.image(killed, tired_workerx, tired_workery);
		//processing.image(coin, 500, 315);
		//processing.image(coin, 510, 315);
		//processing.image(coin, 520, 315);
		//processing.image(coin, 520, 305);
		//processing.image(coin, 510, 305);
		//processing.image(coin, 500, 305);
		//processing.image(key, 500, 275);
		image(jet, 250, 75);
       		image(key_hole, 300, 315);
		textSize(15)
		text("", 115, 50);
		image(crate_with_button, 300, 325);
		image(health_bar, 440, -3);
		image(ammo_box, 0, 300);
		image(main_character, mainx,300);
       		image(tank, 175, 250);
		image(tired_worker, tired_workerx, tired_workery);
		if (bulletX > tired_workerx){
		    bulletFired = false;
		    //Uncomment this line when worker BUG is fixed! 
		    //bulletX = 0;
		    image(killed, tired_workerx, tired_workery);
		}
		if (keyIsPressed && keyCode === processing.RIGHT) {
		    mainx += 2;

		} else if (keyIsPressed && keyCode === processing.LEFT) {
		    mainx -= 2;
		}
		if (mainx > 600) {
		    mainx = 0;
		}
		if(bulletFired){
		    var fill(166, 255, 0);
		    var ellipse(bulletX, bulletY, 4, 4);
		    bulletX = bulletX + 5;
		}
	    };
	};

    }
}
}