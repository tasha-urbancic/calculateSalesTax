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

function add(a, b) {
 return a + b;
}

function calculateSalesTax(salesData, taxRates) {
var output = {};
  for (var i = 0; i < salesData.length; i++) {
  var obj = salesData[i];

  var company = obj.name;
  var provinces = ['BC','AB','SK'];

  if(output[company] === undefined) {
    output[company] = {};

    for (var j = 0; j < provinces.length; j++) {

      if(obj.province === provinces[j]) {
        output[company]["totalSales"] = obj.sales.reduce(add, 0);
        output[company]["totalTaxes"] = output[company]["totalSales"] * salesTaxRates[provinces[j]];
      }

    }

  } else {
    for (var j = 0; j < provinces.length; j++) {

      if(obj.province === provinces[j]) {
        output[company]["totalSales"] += obj.sales.reduce(add, 0);
        var tempTot = obj.sales.reduce(add, 0);
        output[company]["totalTaxes"] += tempTot * salesTaxRates[provinces[j]];
      }

    }
  }

 }

 return output;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);