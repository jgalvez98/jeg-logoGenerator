const Circle=require("./lib/Circle")
const inquirer=require("inquirer")
const fs=require("fs")
const Square=require("./lib/Square")
const Triangle=require("./lib/Triangle")


inquirer
.prompt([{
    type:"input",
    message:"Enter SVG text(up to three characters)",
    name:"text"
},{
    type:"list",
    message:"Enter color text(OR a hexadecimal number)",
    name:"textColor",
    choices:["blue","red","black","yellow",""]
},{
    type:"list",
    message:"enter shape",
    name:"shape",
    choices:["circle","square","triangle"]
},{
    type:"list",
    message:"enter shape color(OR a hexadecimal number)",
    name:"shapeColor",
    choices:["blue","yellow","red","black","white"]

}])
.then(response=>{

    if(response.shape==="circle"){
        const circle = new Circle()
        circle.setColor(response.textColor)
        circle.setText(response.text)
        circle.setShapeColor(response.shapeColor)
        fs.writeFile("./examples/logo.svg", circle.render(),(err)=>{
            console.log("Generated logo.svg")
        })

    }else if(response.shape==="square"){
        const square = new Square()
        square.setColor(response.textColor)
        square.setText(response.text)
        square.setShapeColor(response.shapeColor)
        fs.writeFile("./examples/logo.svg", square.render(),(err)=>{
            console.log("Generated logo.svg")
        })
    }else if (response.shape==="triangle"){
        const triangle = new Triangle()
        triangle.setColor(response.textColor)
        triangle.setText(response.text)
        triangle.setShapeColor(response.shapeColor)
        fs.writeFile("./examples/logo.svg", triangle.render(),(err)=>{
            console.log("Generated logo.svg")
        })
    }
})