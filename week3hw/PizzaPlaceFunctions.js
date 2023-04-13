//create a array of toppings
const pizzaToppings = ['cheese', 'pepperoni', 'onions', 'bacon'];


//greet the customer and list toppings
function greetCustomer() {
console.log("Welcome, here are our toppings: ")
}
greetCustomer();

for (let i = 0; i < pizzaToppings.length; i++) {
  console.log(" " + pizzaToppings[i]);
}


//take pizza order
function getPizzaOrder(size, crust, ...toppings) {
  console.log(` Here are two ${size} ${crust} crust pies with ${toppings}.`);
}
getPizzaOrder('small', 'thick', 'cheese', 'pepperoni', 'onions', 'bacon');



//prepare pizza order
function preparePizza([size, crust, toppings]) {
  console.log('Pizza cooking! ');
  let pizza = {
    size: size,
    crust: crust,
    toppings: toppings,
  };
}
preparePizza('small', 'thick', 'cheese', 'pepperoni', 'onions', 'bacon');


// serve pizza
function servePizza(pizza){
console.log(`"Order up! Here's your ${pizza.size}, ${pizza.crust}, with ${pizza.toppings}, Enjoy!"`)
}
servePizza();

