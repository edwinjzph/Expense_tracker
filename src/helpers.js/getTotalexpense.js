const getTotalexpense = (expense) => {
    console.log(expense)
    let sum = 0;
    expense.forEach((value) => {
        sum += parseInt(value.amount);
    });
    return sum;
};

export default getTotalexpense;