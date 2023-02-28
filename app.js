var totalPrice = function (dataPrice) {
    var price = dataPrice.price, discount = dataPrice.discount, isInstallment = dataPrice.isInstallment, months = dataPrice.months;
    console.log('dataPrice: ', dataPrice);
    if (price <= 0)
        return 0;
    var sum = price;
    if (discount > 0) {
        sum = (price - (price * (discount / 100)));
    }
    if (isInstallment && months > 0) {
        sum = sum / months;
    }
    return sum;
};
console.log(totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 }));
// 6250
