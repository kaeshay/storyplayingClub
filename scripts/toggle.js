var backgroundCounter=0;

function changeBackground(){
	background=document.getElementById('background');
	if (backgroundCounter==0){
		background.src="assets/backgrounds/2.png";
		backgroundCounter++;
	} else if (backgroundCounter==1){
		background.src="assets/backgrounds/3.png";
		backgroundCounter++;
	} else if (backgroundCounter==2){
		background.src="assets/backgrounds/1.png";
		backgroundCounter=0;
	}
}

var transformCounter=0;

function changeAvatar(idString){
	element=document.getElementById(idString);
	if (transformCounter==0){
		element.src="assets/avatars/"+idString+"-2.png";
		transformCounter++;
	} else if (transformCounter==1){
		element.src="assets/avatars/"+idString+".png";
		transformCounter=0;
	}
}

