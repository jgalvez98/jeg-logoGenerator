const Circle=require("./lib/Circle")
const inquirer=require("inquirer")
const fs=require("fs")
const Square=require("./lib/Square")
const Triangle=require("./lib/Triangle")


inquirer
.prompt([{
    type:"input",
    message:"Enter SVG text",
    name:"text"
},{
    type:"list",
    message:"Enter text color",
    name:"textColor",
    choices:["blue","red","black","yellow",""]
},{
    type:"list",
    message:"enter shape",
    name:"shape",
    choices:["circle","square","triangle"]
},{
    type:"list",
    message:"enter shape color",
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
    }
})