//create a array of toppings
const pizzaToppings = ['cheese', 'pepperoni', 'onions', 'bacon'];


//greet the customer and list toppings

function greetCustomer() {
  let greeting = "Welcome, here are our toppings: ";
  for (let topping of pizzaToppings) {
    greeting += `${topping}, `;
  }
  console.log(greeting);
}
//greetCustomer();


//take pizza order
function getPizzaOrder(size, crust, ...toppings) {
  console.log(`Here are two ${size} ${crust} crust pies with ${toppings} com
  ing up.`);
  return [size, crust, toppings];
}
//getPizzaOrder('small', 'thick', 'cheese', 'pepperoni', 'onions', 'bacon');



//prepare pizza order
function preparePizza([size, crust, ...toppings]) {
  console.log("...Pizza cooking!... ");
  return {
    size: size,
    crust: crust,
    toppings: toppings
  };
};




//serve pizza
function servePizza(pizza) {
console.log(
  `Order up! Here's your ${pizza.size} ${pizza.crust} with ${pizza.toppings}, Enjoy!`
  );
  return pizza;
};



greetCustomer();
let pizzaOrder = getPizzaOrder('small', 'thick', 'cheese', 'pepperoni', 'onions', 'bacon');
let prepOrder = preparePizza(pizzaOrder);
servePizza(prepOrder);


