

document.querySelector('#specials-tile').addEventListener('click', function() {
    var randomIndex = Math.floor(Math.random() * categories.length);
    var randomCategoryShortName = categories[randomIndex];
    
   
    $dc.loadMenuItems(randomCategoryShortName);
});
