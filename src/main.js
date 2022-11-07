function buttonClicked(){

    var meal = document.getElementById("meal_input").value;
  
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
    .then((response) => response.json())
    .then((data) => {
      
        console.log(data); //output the API into console.

        var info = data;

        loc.innerHTML = "From:" + info.meals[0].strArea + "<br><br>" + "Food:" + info.meals[0].strMeal;

        para.innerHTML = "Ingredients:" + "<br>" + info.meals[0].strIngredient1 +","
        +info.meals[0].strIngredient2 +","
        +info.meals[0].strIngredient3 +","
        +info.meals[0].strIngredient4 +","
        +info.meals[0].strIngredient5 +","
        +info.meals[0].strIngredient6 +","
        +info.meals[0].strIngredient7 +","
        +info.meals[0].strIngredient8 +",";
        
        

        document.getElementById("para").innerHTML == para.innerHTML;
        document.getElementById("loc").innerHTML == loc.innerHTML;
    })
  }

            



          
  
         
  
  
