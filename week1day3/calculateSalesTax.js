var output = {};
var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateTotalSales(data){
  var total = 0;
  for (var i = 0; i < data.sales.length; i++) {
    total += data.sales[i]
  }
  return total
}

function calculateSalesTax(salesData, taxRates) {
  for (var i = 0; i < salesData.length; i++) {
    var company = salesData[i].name;
    totalSales = calculateTotalSales(salesData[i]);
    totalTaxes = totalSales * salesTaxRates[salesData[i].province];
    if (!output[company]) {
      output[company] = {'totalSales': totalSales, 'totalTaxes': totalTaxes};
    } else {
      companySales = output[company]['totalSales'] + totalSales;
      companyTaxes = output[company]['totalTaxes'] + totalTaxes;
      output[company] = {'totalSales': companySales, 'totalTaxes': companyTaxes};
    }
  }
  return output;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);
