interface totalPriceType {
  price: number,
  discount: number,
  isInstallment: boolean,
  months: number
}

const totalPrice = (dataPrice: totalPriceType): number => {
  const { price, discount, isInstallment, months } = dataPrice
  console.log('dataPrice: ', dataPrice);
  if (price <= 0) return 0;
  let sum: number = price;

  if (discount > 0) {
    sum = (price - (price * (discount / 100)));
  }

  if (isInstallment && months > 0) {
    sum = sum / months
  }

  return sum;
};

console.log(totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 }))
// 6250