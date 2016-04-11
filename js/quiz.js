var carCards = document.getElementById("carCardContainer");



function populatePage (inventory) {
  var carArray = inventory.cars;
  var buildString = "";
  // Loop over the inventory and populate the page
  for (var i = 0; i < carArray.length; i++) {
    buildString += `<section class="col-md-4 myCarCard" style=" border: 5px solid ${carArray[i].color}">`
    buildString += `<h2>${carArray[i].make} `
    buildString += `${carArray[i].model} </h2>`
    buildString += `<h3> Year: ${carArray[i].year} </h3>`
    buildString += `<h3> Price: ${carArray[i].price} </h3>`
    buildString += `<h4> Color: ${carArray[i].color} </h4>`
    buildString += `<p> Description: ${carArray[i].description} </p>`
    buildString += `</section>`
    Carlot.resetBorder(buildString, carArray[i].color.toLowerCase());
  }
  carCards.innerHTML += buildString;

  // Now that the DOM is loaded, establish all the event listeners needed
  Carlot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
Carlot.loadInventory(getCars);

function getCars(){
    var carInventory = Carlot.getInventory();
    populatePage(carInventory)
}