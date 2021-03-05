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