const getExpensiveday = (expense) => {
    const result = Object.groupBy(expense, ({ date }) => date);
    const newresult = {};
    Object.entries(result).forEach((element) => {
        let sum = 0;
        element[1].forEach((value) => {
            sum += parseInt(value.amount);
        });
        newresult[element[0]] = sum;
    });
    let maxAmount = 0;
    let dateWithMaxAmount = "";
    Object.entries(newresult).forEach((value) => {
        if (maxAmount < value[1]) {
            maxAmount = value[1];
            dateWithMaxAmount = value[0];
        }
    });
    return { dateWithMaxAmount, maxAmount };
};

export default getExpensiveday