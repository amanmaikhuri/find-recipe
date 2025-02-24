document.addEventListener("DOMContentLoaded",() => {
    const recipeContainer =document.getElementById("recipeContainer");
    const searchBar = document.getElementById("searchBar");
    //fetch recipe from json

    fetch("recipe.json")
    .then(response => response.json())
    .then(data => {
        dispalyRecipes(data);

    //search functionality
    searchBar.addEventListener("input",(e) => {
        const searchText =e.target.value.toLowerCase();
        const filteredRecipes =data.filter(recipe => recipe.name.toLowerCase().includes(searchText));
        const filteredCategory =data.filter(recipe => recipe.category.toLowerCase().includes(searchText));
        dispalyRecipes(filteredRecipes);
        dispalyRecipes(filteredCategory);
    });
    });
    //function to display recipes 

function dispalyRecipes(recipes){
    recipeContainer.innerHTML ="";
    //clear previous recipes
    recipes.forEach(recipe => {
        const recipeCard =document.createElement("div");
        recipeCard.classList.add("recipe-card");
        recipeCard.innerHTML =`
            <h4><strong>${recipe.category}</strong></h4>
            <img src="${recipe.image}" alt ="${recipe.name} loading="lazy">
            <h3>${recipe.name}</h3>
            <p><strong>Ingredients :</strong>${recipe.ingredients.join(",")}</p>
            <p><strong>Instructions :</strong>${recipe.instructions}</p>
        `;

        recipeContainer.appendChild(recipeCard);
    });
}
});

