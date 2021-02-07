document.getElementById("submitButton").addEventListener('click',function(){
   const name= document.getElementById("searchName");
   const Name =name.value;
   const url =`https://www.themealdb.com/api/json/v1/1/search.php?f=${Name}`
   fetch(url)
   .then(res => res.json())
   .then(data =>{
    displayMeals(data);
   })
})
const displayMeals = data => {
    const mealsDiv = document.getElementById('meals');

    data.meals.forEach(meal=> {
          
        const mealDiv = document.createElement('div');
      
        mealDiv.className ='meal';

        const mealInfo = `
         
        <button id="div" onclick="mealInfo('${meal.strMeal}')"
        <div id="div1">
        
            <img  id="imgs" src="${meal.strMealThumb}"</p>
    
            <h3 id="meal-name">${meal.strMeal}</h3>
            </div>
            </button>

        `;
        mealDiv.innerHTML=mealInfo;
        mealsDiv.appendChild(mealDiv);
      
        
    });
}


const mealInfo = de =>{
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${de}`
    fetch(url)
    .then(res =>res.json())
    .then(data =>{
       displayInfo(data.meals[0]);
    })
    
}

const displayInfo = de => {
    console.log(de);
    const mealDiv = document.getElementById('mealDetail')
    mealDiv.innerHTML = `
      
  

   <div id = "ingredient"> 
   <img  id="imgs" src="${de.strMealThumb}" </p>
   <h3>${de.strMeal}</h3>
   <h5>Ingredient</h5>
   <li>${de.strIngredient1}</li>
   <li>${de.strIngredient2}</li>
   <li>${de.strIngredient3}</li>
   <li>${de.strIngredient4}</li>
   <li>${de.strIngredient5}</li>
   <li>${de.strIngredient6}</li>
   <li>${de.strIngredient7}</li>
   <li>${de.strIngredient8}</li>
    </div>
    
    
    `
}
