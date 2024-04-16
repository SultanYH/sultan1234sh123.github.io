function getCategoryShortNames() {
    return ["LN", "DN", "SU"];
  }
  
  function getRandomCategoryShortName() {
    const categoryShortNames = getCategoryShortNames();
    const randomIndex = Math.floor(Math.random() * categoryShortNames.length);
    return categoryShortNames[randomIndex];
  }
  
  document.getElementById("specialsTile").onclick = function() {
    const randomShortName = getRandomCategoryShortName();
    $dc.loadMenuItems(randomShortName);
  };
  