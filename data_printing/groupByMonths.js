

function groupByMonths(data) 
{
    const monthMap = new Map();

    data.forEach(row => 
        {
        const [date, item, quantity, price] = row.split(',');
        const month = date.slice(0, 7); 

        if (!monthMap.has(month)) {
            monthMap.set(month, []);
        }

        monthMap.get(month).push({
            item,
            quantity: +quantity,
            revenue: +quantity * +price
        });
    });

    return monthMap;
}

module.exports = { groupByMonths };
