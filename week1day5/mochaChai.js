var chai = require('chai');
var expect = chai.expect

// Product Tests

var Product = require('../src/product')

describe('Product', () => {
  it("It has a proper factory (ie. constructor)", function(){
    var product = new Product('Lone Pine IPA', 'Best IPA ever', 2.90)
      expect(product.name).to.equal("Lone Pine IPA")
      expect(product.description).to.equal('Best IPA ever')
      expect(product.price).to.equal(2.90)
      expect(product.inventory).to.equal(0)
  })
})