let numberToConvert = prompt('Write a number in meters to convert')
const unitOfMeasurement = prompt('What unit of measurement do you want to convert?\n'
+'1-milimiter(mm)\n2-centimeter(cm)\n3-decimeter(dm)\n4-decameter(dam)\n5-hectometer(hm)\n6-kilometer(km)')


switch (unitOfMeasurement) {
  case "1":
    alert(numberToConvert * 1000)
    break
  case "2":
    alert(numberToConvert * 100)
    break
  case "3":
    alert(numberToConvert * 10)
    break
  case "4":
    alert(numberToConvert * 0.1)
    break
  case "5":
    alert(numberToConvert * 0.01)
    break
  case "6":
    alert(numberToConvert * 0.001)
    break
  default:
    alert('Write a valid number')
    break
}