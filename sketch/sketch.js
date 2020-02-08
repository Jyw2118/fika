function setup(){
	createCanvas(200,200);
	background(0)
	let r =floor(random(5))+1;
	let img = createIm('background/'+r+'.jpg');
	img.size(windowWidth, windowHeight);
	img.position(0,0)
}