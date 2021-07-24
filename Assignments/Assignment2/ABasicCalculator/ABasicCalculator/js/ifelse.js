// The following comments are settings for various linters
// Not sure if a reported error matters? Look it up at http://linterrors.com/js
/*global math: false, calc: false, console: false, eval: false */

/*jslint es5: true */
/*jslint node: false*/
/*jslint browser: true*/
/*jslint devel: true*/
/*jslint plusplus: true */
/*jslint evil: true */

/*jshint es5: true */
/*jshint globalstrict: true*/
/*jshint jquery: false*/
/*jshint node: false*/
/*jshint browser: true*/
/*jshint devel: true*/

/*eslint-env jquery: false*/
/*eslint-env browser*/
/*eslint no-console: 0*/

// CS22A: A Basic Calculator Part 3 - calcu() function with if-else
// Authors: Zechen Liu and Stephanie Pancho

var calcu = function(calcValue) {
  "use strict";
  console.log(calcValue);
  if (calcValue) {
    // calcValue wasn't null or undefined'
    console.log("calcValue:", calcValue);
    if (calcValue === "c") {
      calc.output.value = "";
    } else if (calcValue === "equate") {
      calc.output.value = math.eval(calc.output.value);
    } else {
      calc.output.value += calcValue;
    }
  }
};

var clickEventHandler = function(event) {
  "use strict";
  calcu(this.id);
};
// TODO: Add missing code here
var inputs = document.getElementsByTagName("input");
for (var i = 0; i < inputs.length; i++) {
  if (inputs[i].type === "button") {
    inputs[i].onclick = clickEventHandler;
  }
}
