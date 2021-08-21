//Memory
function memory(storage) {
  const memoryCost = document.getElementById("memory-cost");
  if (storage == "8GB") {
    memoryCost.innerText = "0";
    updateTotal();
  } else {
    memoryCost.innerText = "180";
    updateTotal();
  }
}
//storage
function storageQuantity(ssd) {
  const storageCost = document.getElementById("storage-cost");
  if (ssd == "256GB") {
    storageCost.innerText = "0";
    updateTotal();
  } else if (ssd == "512GB") {
    storageCost.innerText = "100";
    updateTotal();
  } else {
    storageCost.innerText = "180";
    updateTotal();
  }
}
//shipping cost
function shipping(charge) {
  const shippingField = document.getElementById("shipping");
  if (charge == "free") {
    shippingField.innerText = "0";
    updateTotal();
  } else {
    shippingField.innerText = "20";
    updateTotal();
  }
}
//update total
function updateTotal() {
  //const total=document.getElementById('total');
  const price = parseInt(document.getElementById("best-price").innerText);
  const memoryCharge = parseInt(
    document.getElementById("memory-cost").innerText
  );
  const storagePrice = parseInt(
    document.getElementById("storage-cost").innerText
  );
  const shippingCharge = parseInt(
    document.getElementById("shipping").innerText
  );
  const totalPrice = document.getElementById("total");
  totalPrice.innerText = price + memoryCharge + storagePrice + shippingCharge;
  const grandTotal = (document.getElementById("total-price").innerText =
    totalPrice.innerText);
}
//coupon code
document.getElementById("codeButton").addEventListener("click", function () {
  const proCode = document.getElementById("pro");
  const proInputText = proCode.value.toLowerCase();
  proCode.value = "";
  if (proInputText === "stevekaku") {
    const totalPrice = +document.getElementById("total").innerText;
    const grandTotal = document.getElementById("total-price");
    grandTotal.innerText = totalPrice * 0.8;
  } else {
    alert("Enter correct promo code");
  }
});
