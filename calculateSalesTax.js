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

function calcTotSales(array) {
  return array.reduce(add, 0);
}

function calcTotTaxes(province, salesTaxRates, tot) {
  return (tot * salesTaxRates[province]);
}

function calculateSalesTax(salesData, taxRates) {
var output = {};
  for (var i = 0; i < salesData.length; i++) {
  var obj = salesData[i];

  var company = obj.name;
  var provinces = ['BC','AB','SK'];

  if(output[company] === undefined) {
    output[company] = {};
    output[company]["totalSales"] = 0;
    output[company]["totalTaxes"] = 0;

    for (var j = 0; j < provinces.length; j++) {

      if(obj.province === provinces[j]) {
        var tot = calcTotSales(obj.sales);
        output[company]["totalSales"] += tot;
        output[company]["totalTaxes"] += calcTotTaxes(provinces[j], salesTaxRates, tot);
      }

    }

  } else {
    for (var j = 0; j < provinces.length; j++) {

      if(obj.province === provinces[j]) {
        var tot = calcTotSales(obj.sales);
        output[company]["totalSales"] += tot;
        output[company]["totalTaxes"] += calcTotTaxes(provinces[j], salesTaxRates, tot);
      }

    }
  }

 }

 return output;
}


var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);