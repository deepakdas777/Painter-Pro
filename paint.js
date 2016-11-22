
var canvas, context, tool,size,pen=1 ;
var drag=false,rect={},rectan=0;
function init () {
    canvas = document.getElementById('paint');
    context = canvas.getContext('2d');
    
    canvas.addEventListener('mousedown', mousepoint, false);
    canvas.addEventListener('mousemove', mousepoint, false);
    canvas.addEventListener('mouseup',   mousepoint, false);
}
paint();
function size0(){
	return size=7;
	}
function size1(){
	return size=4;
	}
function size2(){
	return size=1;
	}
function paint(){
     tool = new pencil(color='black');
}
function violet(){
     return color='violet';
}
function indigo(){
     return color='indigo';
}
function blue(){
     return color='blue';
}
function red(){
     return color='red';
}
function eraser(){
     tool = new pencil(color='white');
}
function green(){
     return color='green';
}
function orange(){
     return color='orange';
}
function yellow(){
     return color='yellow';
}
function brown(){
     return color='brown';
}
function black(){
     return color='black';
}
//-----------------------------Pencil-----------------------//
function pencil () {
    rectan=0;
    pen=1;
    
    var tool = this;
    this.started = false;
    this.mousedown = function (e) {
        context.beginPath();
        context.strokeStyle=color;
        context.lineJoin='round';
        context.lineWidth=size;
        context.moveTo(e._x, e._y);
        tool.started = true;
	
    };
    this.mousemove = function (e) {
      if (tool.started) {
        context.lineTo(e._x, e._y);
        if(pen==1&&rectan==0){
        context.stroke();
        }
      }
    };
    this.mouseup = function (e) {
      if (tool.started) {
        tool.mousemove(e);
        tool.started = false;
      }
    };
    
}
function mousepoint (e) {
    if (e.layerX || e.layerX == 0) { 
      e._x = e.layerX;
      e._y = e.layerY;
    } else if (e.offsetX || e.offsetX == 0) { 
      e._x = e.offsetX;
      e._y = e.offsetY;
    }
    var func = tool[e.type];
    if (func) {
      func(e);
    }
}
init();
//------------------------end of pencil-----------------//
//-----------------Draw rectangle--------------------//


function draw() {
  if(rectan==1){

  context.strokeRect(rect.startX, rect.startY, rect.w, rect.h);
 }
}

function mouseDownrect(e) {
  rect.startX = e.layerX - this.offsetLeft;
  rect.startY = e.layerY - this.offsetTop;
  drag = true;
  
}

function mouseUprect() {
  
  draw();
  rect.w=0;
  rect.h=0;
  drag = false;
}

function mouseMoverect(e) {
    
    if(drag==true){
    rect.w = (e.layerX - this.offsetLeft) - rect.startX;
    rect.h = (e.layerY - this.offsetTop) - rect.startY ;
    }
    
}
function rectangle() {
  //color = 'black';//
  rectan=1;
  pen=0;
  canvas.addEventListener('mousedown', mouseDownrect, false);
  canvas.addEventListener('mouseup', mouseUprect, false);
  canvas.addEventListener('mousemove', mouseMoverect, false);
  
}

var fill = function(e)
{
	
	context.fillStyle =color;
	context.strokeStyle=color;
	context.fillRect(0, 0, canvas.width, canvas.height); 

}
function circle(){
      var centerX = canvas.width / 2;
      var centerY = canvas.height / 2;
      var radius = 70;

      context.beginPath();
      context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      
      context.fill();
      context.lineWidth = 5;
      context.fillStyle=color;
      context.strokeStyle=color;
      context.stroke();
}
function line(){
				var a0x=0;
				var a0y=0;
				ctx0.beginPath();
				ctx0.strokeStyle="#333333";
				ctx0.lineWidth=1;
				ctx0.moveTo(a0x+302,a0y+32);
				ctx0.lineTo(a0x+30,a0y+40);
				ctx0.lineTo(a0x+30,a0y+40);
				ctx0.quadraticCurveTo(a0x+10,a0y+14,a0x+12,a0y+50);
				ctx0.bezierCurveTo(a0x+10,a0y+14,a0x+12,a0y+50,a0x+43,a0y+52);
				ctx0.stroke();
}
