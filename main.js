import ShoppingcartController from "./app/Components/ShoppingcartController.js";


class App {
    constructor() {
        this.controllers = {
            shoppingcartController: new ShoppingcartController()
        }
    }
}