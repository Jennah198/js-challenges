var markHeight = 1.88 // in meters
var johnHeight = 1.76

var markWeight = 95 // in kilograms
var johnWeight = 85

var markBmi = markWeight / (markHeight * markHeight)
var johnBmi = johnWeight / (johnHeight * johnHeight)

if ((markHigherBmi = markBmi > johnBmi)) {
  console.log("Mark's BMI is higher than John's.")
} else {
  console.log("John's BMI is higher than Mark's.")
}
//console.log("Is Mark's BMI higher than John's? " + markHigherBmi)
