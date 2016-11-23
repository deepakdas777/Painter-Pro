
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
      context.lineWidth = 5;
      context.fillStyle="red";
      context.fill();
      context.stroke();
}

function smile() {
   // Draw the face
context.fillStyle = "yellow";
context.beginPath();
context.arc(95, 85, 40, 0, 2*Math.PI);
context.closePath();
context.fill();
context.lineWidth = 2;
context.stroke();
context.fillStyle = "black";

// Draw the left eye
context.beginPath();
context.arc(75, 75, 5, 0, 2*Math.PI);
context.closePath();
context.fill();

// Draw the right eye
context.beginPath();
context.arc(114, 75, 5, 0, 2*Math.PI);
context.closePath();
context.fill();

// Draw the mouth
context.beginPath();
context.arc(95, 90, 26, Math.PI, 2*Math.PI, true);
context.closePath();
context.fill();
  
}
var get_file_width = function()
{
        var file_width = document.getElementById("filewidth").value;
        return file_width;
}

var get_file_height = function()
{
        var file_height = document.getElementById("fileheight").value;
        return file_height;
}

var print_file_image = function(e)
{
        clear_canvas();
        var temp = URL.createObjectURL(e.target.files[0]);
        var image = new Image();
        image.src = temp;
        image.addEventListener("load", function()
        {
                var width = get_file_width();
                var height = get_file_height();
                context.drawImage(image, 0, 0, width, height);
        });
        return;
}

var save_image = function()
{
        var data = canvas.toDataURL();
        window.open(data, '_blank', 'location=0, menubar=0');
}
 



