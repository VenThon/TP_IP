// 1. Define your class
class Recipe {
    constructor(container, menu, wrapper,recipe, right, otherRecipe){
        this.container=container;
        this.menu=menu;
        this.wrapper=wrapper;
        this.recipe=recipe;
        this.right=right;
        this.otherRecipe=otherRecipe
    }
    display(){
        console.log(data[0]: `Price name: ${this.container},in menu ${this.menu}`)
    }
}

// 2. Initialize your object
const GetRecipe = new GetRecipe("Our recipe","Eating","Soupe");
GetRecipe.display();

// 3. Validate your object
function displayform(){
    var x= document.forms["container"]["menu"]["recipe"]["otherRecipr"]
    if(x == ""){
        alert("Welcom Plseae wait your food.")
    }else{
        alert("Is not enough or valid")
    }
}


// 4. Generate the template

// 5. Create new object

function render() {
  console.log("render");
  // Generate your object ....
  // Hide button generate
  const buttonGenerate = document.getElementById("button-generate");
  buttonGenerate.style.display = "none";
  // Display template
  const recipeTemplate = document.getElementsByClassName("recipe")[0];
  recipeTemplate.style.display = "block";
}