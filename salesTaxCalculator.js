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

function calculateSalesTax(salesData, taxRates) {
    var results = {};
    for (var i = 0; i < companySalesData.length; i++){
        var sum = 0;
        var companySales = companySalesData[i];

        for (var j = 0; j < companySales.sales.length; j++){
            sum += companySales.sales[j];
        }
        companySales.provSales = sum;
        companySales.provTaxes = sum*salesTaxRates[companySales.province];

        if (!results[companySales.name]){
            results[companySales.name] = {
                totalSales: companySales.provSales, 
                totalTaxes: companySales.provTaxes
            }
        } else {
            results[companySales.name].totalSales += companySales.provSales;
            results[companySales.name].totalTaxes += companySales.provTaxes;
        }

    }
    console.log(results);
}

console.log(calculateSalesTax());
  


//   var results = calculateSalesTax(companySalesData, salesTaxRates);
  
  /* Expected Results:
  {
    Telus: {
      totalSales: 1300
      totalTaxes: 144
    },
    Bombardier: {
      totalSales: 800,
      totalTaxes: 40
    }
  }
  */