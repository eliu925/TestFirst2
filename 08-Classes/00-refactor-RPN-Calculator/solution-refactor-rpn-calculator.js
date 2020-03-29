 /* eslint-disable no-unused-vars, no-throw-literal*/

/*
  Refactor the constructor function below and use ES2015 Class Syntax
*/

class RPNCalculator {
  constructor(){
    this.numStack = [];
}

push(num) {
  this.numStack.push(num);
};

popCompute (operationFunc) {
  if (this.numStack.length < 2) {
    throw 'rpnCalculatorInstance is empty';
  } else {
    const num1 = this.numStack.pop();
    const num2 = this.numStack.pop();

    this.push(operationFunc(num1, num2));
  }
};

plus () {
  this.popCompute((first, second) => first + second);

  /* does this arrow function syntax look funky? It's missing a return statement! AND a code block!
  When an arrow function is condensed to a single line expression, it can be reduced to a single line of code which saves
  a few characters to type (whew :) ) and enhances readability.
  the function passed to popCompute could also use the standard syntax:
  this.popCompute((first,second) => {
    return first + second;
  })
  It is not necessary to use the shorthand single line expression syntax, both formats behave exactly the same.
  */
};

value () {
  return this.numStack[this.numStack.length - 1];
};

minus() {
  this.popCompute((first, second) => second - first);
};

times () {
  this.popCompute((first, second) => first * second);
};

divide () {
  this.popCompute((first, second) => second / first);
};

}