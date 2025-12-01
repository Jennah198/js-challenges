var markHeight = 1.88 // in meters
var johnHeight = 1.76

var markWeight = 95 // in kilograms
var johnWeight = 85

var markBmi = markWeight / (markHeight * markHeight)
var johnBmi = johnWeight / (johnHeight * johnHeight)

if (markBmi > johnBmi) {
  console.log(`Mark's BMI ${markBmi} is higher than John's.`)
} else {
  console.log(`John's BMI ${johnBmi.toFixed(2)} is higher than Mark's.`)
}
//console.log("Is Mark's BMI higher than John's? " + markHigherBmi)
