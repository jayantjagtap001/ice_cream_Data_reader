const { fileReader } = require("./data_printing/fileReader");
const { groupByMonths } = require("./data_printing/groupByMonths");
const { calculation } = require("./data_printing/calculation");


const filePath = './data.csv';

try {
    const data = fileReader(filePath);
    const monthMap = groupByMonths(data);
    const results = calculation(monthMap);

    console.log("Total Sales Revenue:", results.totalRevenue);
    console.log("Month-wise Total Revenue:", results.monthWiseSales);
    console.log("Most Popular Item by Month:", results.mostPopularItemByMonth);
    console.log("Items Generating Most Revenue by Month:", results.highestRevenueItemByMonth);
    console.log("Most Popular Item Stats by Month:", results.mostPopularItemStats);
} 
catch (error) 
{
    console.error("Error:", error.message);
}
