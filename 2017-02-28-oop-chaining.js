class CoffeeOrder {

    constructor() {
        this.sugar       = 0;
        this.cream       = 0;
        this.base_price  = 1.00;
        this.sugar_price = 0.15;
        this.cream_price = 0.30;
    }

    static Make() {
        return new CoffeeOrder();
    }

    AddSugar() {
        this.sugar++;
        return this;
    }

    AddCream() {
        this.cream++;
        return this;
    }

    PrintReceipt() {
        var value = "Coffee ($" + this.base_price.toFixed(2) + ")";
        var total_price = this.base_price;
        for (var i = 0; i < this.sugar; i++) {
            value += "\n + Sugar ($" + this.sugar_price.toFixed(2) + ")";
            total_price += this.sugar_price;
        }
        for (var i = 0; i < this.cream; i++) {
            value += "\n + Cream ($" + this.cream_price.toFixed(2) + ")";
            total_price += this.cream_price;
        }
        value += "\n = TOTAL: $" + total_price.toFixed(2);
        alert(value);
    }

}

var c = CoffeeOrder
    .Make()
    .AddSugar()
    .AddCream()
    .AddSugar()
    .PrintReceipt();
