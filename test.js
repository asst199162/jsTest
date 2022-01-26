function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Change code below this line
let totalPrise = orderedQuantity * pricePerDroid + deliveryFee;
message = `You ordered droids worth ${totalPrise} credits. Delivery (${deliveryFee} credits) is included in total price.`


  // Change code above this line
  return message;
}
makeOrderMessage(5, 5, 10)
console.log(message)
