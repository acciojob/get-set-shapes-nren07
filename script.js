//complete this code
class Rectangle {
	constructor(width,height){
		this.width=width;
		this.height=height;
	}
	getWidth(){
		return this.width;
	}
	getHeight(){
		return this.height;
	}
	setWidth(width){
		this.width=width;
	}
	setHeight(height){
		this.height=height;
	}
	getArea(){
		return this.height*this.width;
	}
}

class Square extends Rectangle {
	constructor(side){
		super(side,side);
	}
	getPerimeter(){
		return 2*(this.width+this.height);
		
	}
}
// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
