var Carlot = (function() {

    var inventory = [];

    return {
        loadInventory: function(callbackFunc) {
            // The first IIFE should add a public function (e.g. loadInventory) that loads the inventory.json file and stores the inventory in a private variable.
            //Step 1: Set up http req for inventory
            var myInventoryReq = new XMLHttpRequest;

            //Step 2: Go get it
            myInventoryReq.open("GET", "inventory.json");
            myInventoryReq.send();

            //Step 3: Event Listener
            myInventoryReq.addEventListener("load", inventorySuccess);
            myInventoryReq.addEventListener("failed", failedExecution);

            //Step 4: Translate into JS
            function failedExecution() {
                alert("Error loading page. Please refresh.")
            };

            //Step 5: Create callback for once the product page loads
            function inventorySuccess() {
                inventory = JSON.parse(this.responseText);
                callbackFunc();
            };
        }, 

        getInventory: function() {
            // It should also expose a public getter to read the array of cars (e.g. getInventory)
            return inventory;
        }
    }
}());

