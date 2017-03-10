function calculateArea(x,y) {
    return (x * y)
}

module.exports = {
  returnArea: function(x,y){
    console.log(`When x = ${x} and y = ${y}, the area is ${calculateArea(x,y)}`)
  }
};