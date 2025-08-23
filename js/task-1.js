const categoriesList = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach((categories) => {
    const categoriesTitle = categories.querySelector("h2").textContent;
    const categoriesItem = categories.querySelectorAll("ul li").length;

    console.log(`Category: ${categoriesTitle}`);
    console.log(`Elements: ${categoriesItem}`);
})

