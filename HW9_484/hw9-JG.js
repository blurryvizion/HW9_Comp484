// ========================
// Set 1: Advanced Syntax, Types, and Quirks
// ========================


/** ------Exercise 1: Complex Arithmetic and Standard Rules.------ */
var res = 3 + 5 * (10 / 2) - (8 - 4);
console.log("Exercise 1 - result:", res);


/** ------Exercise 2: Case Sensitivity Test------**/
var projId = "COMP484";
// ProjectIdentifier = "JS_Advanced"; 
// The line above would fail because JavaScript is case-sensitive.
projId = "JS_Advanced";
console.log("Exercise 2 - projectIdentifier:", projId);


/** ------Exercise 3: String Quoting Challenge------
Declare a variable named courseDescription using var and camelCase. 
Assign it the string value: The course is "interactive" and involves 'scripting' logic.*/
var courseDesc = "The course is \"interactive\" and involves 'scripting' logic.";
console.log("Exercise 3 - courseDescription:", courseDesc);


/** ------Exercise 4: Escaping and Console Output------
Declare a variable named errorMessage and assign it a string defined using single quotes. 
The string content must be: An internal server error occurred: "Access Denied".*/
var errMsg = 'An internal server error occurred: \"Access Denied\"';
console.log("Exercise 4 - errorMessage:", errMsg);


/** ------Exercise 5: Type Coercion with Non-Plus Operators------
Set valueA to the number 10 and valueB to the string "4".
Calculate resultSubtraction using the subtraction operator (-) and 
resultMultiplication using the multiplication operator (*).*/
var b = "4";
var subRes = a - b;
var mulRes = a * b;
console.log("Exercise 5 - resultSubtraction:", subRes, "type:", typeof subRes);
console.log("Exercise 5 - resultMultiplication:", mulRes, "type:", typeof mulRes);


// ========================
// Set 2: Operators and Type Theory
// ========================


/** ------Exercise 6: Understanding null and undefined Types------
Declare a variable unassignedVar without giving it a value. 
Declare a second variable explicitNull and set its value explicitly to null. */
var undef;
var nullVal = null;
console.log("Exercise 6 - typeof unassignedVar:", typeof undef);
console.log("Exercise 6 - typeof explicitNull:", typeof nullVal);
/********************************************************************************
typeof null returns "object" because of a historical implementation quirk.
Originally, values in JavaScript were stored with type tags — null was given
an object tag and this behavior remains for backward compatibility.
*********************************************************************************/


/** ------Exercise 7: Boolean Assignment and Type Identification------
Declare a variable isBlocking and assign it the boolean value true. 
Then, reassign isBlocking to the string value "true" (with quotes). 
Use console.log(typeof isBlocking) after each assignment to demonstrate 
how JavaScript variables are weakly typed and hold typed values. */
var block = true;
console.log("Exercise 7 - typeof isBlocking (boolean):", typeof block);
block = "true";
console.log("Exercise 7 - typeof isBlocking (string):", typeof block);


/** ------Exercise 8: Invalid Variable Naming------
Write three attempted variable declarations that would violate JavaScript's naming rules
************************************************************************************
  var 1abc = 5; // Invalid: variable names cannot start with a number.
  var my var = 10; // Invalid: cannot contain spaces.
  var my-var = 15; // Invalid: hyphens act as subtraction operators.
*************************************************************************************/


/** -------Exercise 9: Chained Shorthand Arithmetic------
Initialize a variable counterValue to 50. In a single sequence of statements, first use the shorthand division assignment operator (/=) to divide the value by 5, and then use the shorthand subtraction assignment operator (-=) to subtract 3 from the result. Log the final counterValue. */
var cnt = 50;
cnt /= 5;
cnt -= 3;
console.log("Exercise 9 - counterValue:", cnt);

/** ------Exercise 10: Prefix vs. Postfix Unary Operators------
Initialize a variable x to 10.
1. Create a variable y_post and assign it the result of x++. Log both y_post and x.
2. Reinitialize x to 10.
3. Create a variable z_pre and assign it the result of ++x. Log both z_pre and x.
Use comments to explain how the placement of the unary operator (++ before or after) affects the timing of the increment relative to the assignment. */
var x = 10;
var yPost = x++;
console.log("Exercise 10 - yPost:", yPost, "x:", x);
x = 10;
var zPre = ++x;
console.log("Exercise 10 - zPre:", zPre, "x:", x);
// Postfix (x++) increments after assignment; Prefix (++x) increments before.

// ========================
// Set 3: Advanced Logic and Comparisons
// ========================

/** ------Exercise 11: Loose Equality and Coercion------
Set testNumber to 0 (a number) and testBoolean to false (a boolean). Write an if statement that compares them using the loose equality operator (==). Inside the if block, log a message confirming they are loosely equal. Explain in a comment why this comparison returns true (due to type coercion). */
var num = 0;
var bool = false;
if (num == bool)
{
  console.log("Exercise 11 - loosely equal");
}
/*
JS coerces false to 0 when using ==, so 0 == 0 evaluates true.
*/

/** ------Exercise 12: Strict Inequality Test------
Set versionA to 10.0 (a number) and versionB to "10.0" (a string). Write an if statement using the strict inequality operator (!==). Log a message if they are not strictly equal, and use an else block to handle the case where they are strictly equal. */
var vA = 10.0;
var vB = "10.0";
if (vA !== vB)
{
  console.log("Exercise 12 - not strictly equal");
}
else
{
  console.log("Exercise 12 - strictly equal");
}

/** ------Exercise 13: Logical OR and AND Combination------
Set three boolean variables: isLoggedIn, isSubscriber, and isTrialExpired. 
Write an if condition using logical operators (&& and ||) that checks if access should be granted.
Access is granted if (isLoggedIn is true AND isSubscriber is true) OR if (isLoggedIn is true AND isTrialExpired is false). */
var logged = true;
var sub = false;
var trialExp = false;
if ((logged && sub) || (logged && !trialExp)) 
{
console.log("Exercise 13 - Access granted");
}
else 
{  
console.log("Exercise 13 - Access denied");
}


/** ------Exercise 14: Simulating XOR using Nested Conditionals-------
Simulate the Logical XOR operator (either A is true or B is true, but NOT BOTH) using variables conditionA and conditionB. Use a combination of if statements and logical operators to achieve this. Log "XOR Success" if the condition is met, otherwise log "XOR Fail". */
var condA = true;
var condB = false;
if ((condA || condB) && !(condA && condB))
{
  console.log("Exercise 14 - XOR Success");
}
else 
{
  console.log("Exercise 14 - XOR Fail");
}


/** ------Exercise 15: Converting IF/ELSE to Ternary Operator------
Write an initial if/else statement that checks if a variable scriptLoadType (initialized to "deferred") 
is equal to "deferred". If true, assign the string "Non-blocking" to a variable loadStatus. 
Otherwise, assign "Potentially Blocking". 
Then, rewrite the entire conditional structure using only the Ternary Operator (? :) and store 
the result in a new variable loadStatusTernary. */
var loadType = "deferred";
var loadStat;
if (loadType === "deferred")
{ 
  loadStat = "Non-blocking";
}
else 
{
loadStat = "Potentially Blocking";
}
console.log("Exercise 15 - if/else:", loadStat);
var loadStatT = (loadType === "deferred") ? "Non-blocking" : "Potentially Blocking";
console.log("Exercise 15 - ternary:", loadStatT);


// ========================
// Set 4: Integration and Application
// ========================


/** ------Exercise 16: Commenting and Code Structure------
*************************************************************
function calcRenderTime() {
  // Will calculate HTML parse + JS execution time
}
***************************************************************


/** ------Exercise 17: Date Object Formatting Challenge (MM/DD/YYYY)------
Create a new Date object,extract the necessary components and use string concatenation to output 
 "Today is MM/DD/YYYY". 
 */
var d = new Date();
var m = d.getMonth() + 1;
var day = d.getDate();
var y = d.getFullYear();
var dateStr = "Today is " + m + "/" + day + "/" + y;
console.log("Exercise 17 - formatted date:", dateStr);


/** ------Exercise 18: Mixed Type Arithmetic Explanation------
Initialize val1 to 20 (number) and val2 to "5" (string). 
Calculate sumResult = val1 + val2 and diffResult = val1 - val2,
explain why the sumResult differs significantly from diffResult*/
var v1 = 20;
var v2 = "5";
var sum = v1 + v2;
var diff = v1 - v2;
console.log("Exercise 18 - sum:", sum, "diff:", diff);
/*****************************************************************
"+" performs string concatenation if one operand is a string.
"-" converts both operands to numbers.
Thus, sum = "205" and diff = 15.
******************************************************************/


/** ------Exercise 19: Conditional based on Type Check------
Initialize a variable dataInput to the numeric value 484.
Write an if/else statement. 
Use the typeof operator inside the condition to check if 
dataInput is strictly equal to the string "number".
If it is, log "Input is numeric." 
If it is not, reassign dataInput to the boolean value true, and then log the new type using typeof. */
var data = 484;
if (typeof data === "number") 
{
console.log("Exercise 19 - Input is numeric.");
}
else 
{
  data = true;
  console.log("Exercise 19 - new type:", typeof data);
}


/** ------Exercise 20: Simulating DOM Manipulation Timing Failure (Conceptual)------
Write the standard JavaScript code sequence necessary to inject an <h1> element containing 
the text "Interactive Layer Loaded" into the document body.
*/
/***************************************************************************
Place script before </body> or use defer to ensure DOM readiness.
****************************************************************************/
var h = document.createElement("h1");
h.textContent = "Interactive Layer Loaded";
document.body.appendChild(h);
