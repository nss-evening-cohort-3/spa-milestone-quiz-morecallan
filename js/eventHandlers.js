var Carlot = (function(oldCarlot) {

    oldCarlot.activateEvents = function() {
        // The second IIFE should augment the original one with a function that creates all of the eventHandlers that you need for the application
        var carsArray = document.getElementsByClassName("myCarCard");
        for (var i = 0; i < carsArray.length; i++) {
            carsArray[i].addEventListener("click", function(e, color) {
                var clickedItem = e.currentTarget;
                oldCarlot.addBorder(clickedItem);
                textChangeUp(clickedItem)
            })
        }

        function textChangeUp(selectedCard) {
            var currentCard = selectedCard;
            var textInput = document.getElementById("editDescription");
            textInput.addEventListener("keyup", function(e, currentCard) {
                Carlot.editText();
            })
        }
    }

    return oldCarlot
}(Carlot || {}));
