fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        parsedFoods.forEach(food => {
            const foodAsHTML = foodFactory(food)
            addFoodToDom(foodAsHTML)
        })
    })

addFoodToDom = (food4DOM) => {
    document.querySelector(".foodList").innerHTML += food4DOM
}

foodFactory = (foodObj) => {
    return `
        <div class="horizontal_contain">
            <h1>${foodObj.name}</h1>
            <p>${foodObj.ethnicity}<br>${foodObj.category}</p>
        </div>
    ` 
}