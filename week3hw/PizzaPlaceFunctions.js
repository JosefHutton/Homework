let pizzaToppings = ['cheese', 'pepperoni', 'onions', 'bacon'];

//console.log(pizzaToppings);



for (let greeting = 0; greeting < pizzaToppings.length; greeting++) {
  const element = pizzaToppings[greeting];
  function greetCustomer() {
    return "Welcome, these are our toppings, += '$pizzaToppings'"
  }
}
console.log(greetCustomer)
//for (let greeting of pizzaToppings) {
//  console.log(`"Welcome, these are our toppings, '$pizzaToppings'`)
//}


//function getPizzaOrder([size, crust, ...toppings]);
