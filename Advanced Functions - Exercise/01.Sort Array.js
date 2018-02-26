function solve(arrOfNumbers, sortMethod) {
    arrOfNumbers.sort((a, b) => a - b);

    let ascendingOrder = function (a, b) {
        return a - b;
    };
    let descendingOrder = function (a, b) {
        return b - a;
    };

    let sortingOrders = {
        'asc': ascendingOrder,
        'desc': descendingOrder
    };
    return arrOfNumbers.sort(sortingOrders[sortMethod])
}