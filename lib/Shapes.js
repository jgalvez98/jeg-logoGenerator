class Shape {
    constructor(text,textColor,shapeColor){
        this.text=""
        this.textColor=""
        this.shapeColor=""
    }
    setColor(textColor){
        this.textColor=textColor
    }
    setText(text){
        this.text=text
    }
    setShapeColor(shapeColor){
        this.shapeColor=shapeColor
    }
    
    render(){
        return new Error("child must create its own render function")
    }
}