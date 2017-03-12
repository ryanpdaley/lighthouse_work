module.exports = {
  countDigits: function(ccNumber) {
    return ccNumber.length;
  },

  luhn_check: function(ccNumber){
    digits = this.countDigits(ccNumber)
    odd_digits = []
    even_digits = []
    total = 0
    for (var i = 0; i < digits; i++) {
      if (i % 2 === 0) even_digits.push(ccNumber[i])
      else odd_digits.push(ccNumber[i])
    }
    for (var i = 0; i < odd_digits.length; i++) {
      total += parseInt(odd_digits[i])
    }
    for (var i = 0; i < even_digits.length; i++) {
      doubleValue = 2 * parseInt(even_digits[i])
      if (doubleValue > 9) {
        stringInt = doubleValue.toString()
        newInt = (parseInt(stringInt[0]) + parseInt(stringInt[1]))
        total += newInt
      } else total += parseInt(doubleValue)
    }
    return (total % 10 === 0)
  },

  check: function(ccNumber) {
    return this.luhn_check(ccNumber)
  }
}
