 var Carlot = (function(oldCarlot) {
    // The final IIFE should augment the object with two more functions. One function resets the border thickness and background color for each car element back to the original values. The other function changes the thickness of the border of a car element, and changes its background color. The function must accept two arguments.
        //A car DOM element that was clicked on.
        //A color name.
    
    oldCarlot.resetBorder = function() {
        // One function resets the border thickness and background color for each car element back to the original values.
        var carsOnDom = document.getElementsByClassName("myCarCard");
        for (var i = 0; i < carsOnDom.length; i++) {
            carsOnDom[i].classList.remove("selected");
            carsOnDom[i].style.borderWidth = "medium"
        }
       
    };

    oldCarlot.addBorder = function(clicked) {
        // The other function changes the thickness of the border of a car element, and changes its background color. The function must accept two arguments.
        oldCarlot.resetBorder();
        clicked.classList.add("selected");
        clicked.style.borderWidth = "thick"
    }

    oldCarlot.editText = function() {
        var descriptionValue = document.getElementById("editDescription");
        var currentCard = document.getElementsByClassName("selected")[0];
        var theParagraph = currentCard.getElementsByTagName("p")[0];
        theParagraph.innerHTML = descriptionValue.value;
    }

    return oldCarlot
}(Carlot || {})); 