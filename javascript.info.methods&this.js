// Using "this" in object literal

function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    } 
  };
}

let user = makeUser();

console.log(user.ref().name);

// Create a calculator

let calculator = {
  read() {
    this.a = +prompt("Value for a:", 0);
    this.b = +prompt("Value for b:", 0);
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  }
};

calculator.read();
alert("Sum is " + calculator.sum());
alert("Multiplication is " + calculator.mul());

// Chaining

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // shows the current step
    console.log(this.step);
    return this;
  }
};

ladder.up().up().down().showStep().down().showStep();