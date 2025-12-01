// Coding Challenge #1 & 2

// var markHeight = 1.88 // in meters
// var johnHeight = 1.76

// var markWeight = 95 // in kilograms
// var johnWeight = 85

// var markBmi = markWeight / (markHeight * markHeight)
// var johnBmi = johnWeight / (johnHeight * johnHeight)

// if (markBmi > johnBmi) {
//   console.log(`Mark's BMI (${markBmi}) is higher than John's.`)
// } else {
//   console.log(`John's BMI (${johnBmi.toFixed(2)}) is higher than Mark's.`)
// }
// //console.log("Is Mark's BMI higher than John's? " + markHigherBmi)

// Coding Challenge #3

var dolphinsScore1 = 97
var dolphinsScore2 = 112
var dolphinsScore3 = 101

var koalasScore1 = 109
var koalasScore2 = 95
var koalasScore3 = 123

var dolphinsAverage = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3
var koalasAverage = (koalasScore1 + koalasScore2 + koalasScore3) / 3

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
  console.log(
    `Dolphins win the trophy with an average score of ${dolphinsAverage.toFixed(
      2
    )}!`
  )
} else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
  console.log(
    `Koalas win the trophy with an average score of ${koalasAverage.toFixed(
      2
    )}!`
  )
} else if (
  dolphinsAverage === koalasAverage &&
  dolphinsAverage >= 100 &&
  koalasAverage >= 100
) {
  console.log(
    `It's a draw with both teams having an average score of ${dolphinsAverage.toFixed(
      2
    )}!`
  )
} else {
  console.log(
    'No team wins the trophy as the minimum score of 100 was not met.'
  )
}
