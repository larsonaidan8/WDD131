const recipes = [
    {
        id: 1,
        name: "Spaghetti Bolognese",
        image: "spaghetti.jpg",
        rating: 5,
        category: "Main Course",
        suggestion: true,
    },
    {
        id: 2,
        name: "Chocolate Cake",
        image: "chocolate-cake.jpg",
        rating: 4,
        category: "Dessert",
        suggestion: true,
    },
    {
        id: 3,
        name: "Caesar Salad",
        image: "caesar-salad.jpg",
        rating: 4,
        category: "Appetizer",
        suggestion: false,
    },
    {
        id: 4,
        name: "Pancakes",
        image: "pancakes.jpg",
        rating: 5,
        category: "Breakfast",
        suggestion: false,
    },
];

function renderRecipes(containerId, filterFn) {
    const container = document.getElementById(containerId);
    container.innerHTML = ""; // Clear container
    const filteredRecipes = recipes.filter(filterFn);

    filteredRecipes.forEach(recipe => {
        const card = document.createElement("div");
        card.classList.add("recipe-card");

        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}">
            <h3>${recipe.name}</h3>
            <p>Category: ${recipe.category}</p>
            <div class="rating" aria-label="Rating: ${recipe.rating} out of 5 stars">
                ${"⭐".repeat(recipe.rating)}${"☆".repeat(5 - recipe.rating)}
            </div>
        `;

        container.appendChild(card);
    });
}

function filterSuggestions(recipe) {
    return recipe.suggestion;
}

function filterAll(recipe) {
    return true;
}

function searchRecipes(event) {
    event.preventDefault();
    const query = document.getElementById("searchBar").value.toLowerCase();
    renderRecipes("recipeContainer", recipe =>
        recipe.name.toLowerCase().includes(query)
    );
}

// Initial render
renderRecipes("suggestedRecipes", filterSuggestions);
renderRecipes("recipeContainer", filterAll);

// Add event listener for search
document.getElementById("searchForm").addEventListener("submit", searchRecipes);
