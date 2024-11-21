

function calculation(monthMap) 
{
    let totalRevenue = 0;
    const monthWiseSales = {};
    const mostPopularItemByMonth = {};
    const highestRevenueItemByMonth = {};
    const mostPopularItemStats = {};

    monthMap.forEach((sales, month) => {
        let monthlyRevenue = 0;
        const itemCount = {};
        const itemRevenue = {};

        sales.forEach(({ item, quantity, revenue }) => {
            monthlyRevenue += revenue;
            itemCount[item] = (itemCount[item] || 0) + quantity;
            itemRevenue[item] = (itemRevenue[item] || 0) + revenue;
        });

        monthWiseSales[month] = monthlyRevenue;
        totalRevenue += monthlyRevenue;

        // Most popular item (by quantity)

        const popularItem = Object.entries(itemCount).reduce((a, b) => (b[1] > a[1] ? b : a));
        mostPopularItemByMonth[month] = popularItem[0];

        // Highest revenue item

        const highestRevenueItem = Object.entries(itemRevenue).reduce((a, b) => (b[1] > a[1] ? b : a));
        highestRevenueItemByMonth[month] = highestRevenueItem[0];

        // Stats for the most popular item

        const orders = sales.filter(s => s.item === popularItem[0]).map(s => s.quantity);
        mostPopularItemStats[month] = {
            min: Math.min(...orders),
            max: Math.max(...orders),
            average: (orders.reduce((a, b) => a + b, 0) / orders.length).toFixed(2)
        };
    });

    return {
        totalRevenue,
        monthWiseSales,
        mostPopularItemByMonth,
        highestRevenueItemByMonth,
        mostPopularItemStats
    };
}

module.exports = { calculation };
