let total = 0;

function applyButton() {
    console.log("you can get a discount");
}

function discountPrices(discount, total) {
    discount = total * (20 / 100);
    return discount;
}

function totalAfterDiscount(discount, total) {
    const totalPriceDis = total - discount;
    return totalPriceDis;
}

function items(target) {
    const purchaseItem = document.getElementById("purchase");
    const itemTitle = target.childNodes[3].childNodes[3].innerText;
    const li = document.createElement("li");
    li.innerText = itemTitle;
    purchaseItem.appendChild(li);

    const priceStr = target.childNodes[3].childNodes[5].innerText.split(" ")[0];
    const price = parseFloat(priceStr);
    total = total + price;

    const itemPrice = document.getElementById("total-price");
    itemPrice.innerText = total;

    if (total > 0) {
        const purchaseBtn = document.getElementById("purchase-btn");
        purchaseBtn.disabled = false;

        if (total >= 200) {
            const applyButton = document.getElementById("apply-btn");
            applyButton.disabled = false;

            const input = document.getElementById("input");
            const inputCode = input.value;

            if (inputCode == "SELL200") {

                applyButton();
                // document.getElementById("apply-btn").addEventListener("click", function () {
                //     const discountPrice = document.getElementById("discount-price");
                //     const discountStr = discountPrice.innerText;
                //     const discount = parseFloat(discountStr);

                //     const disPrice =  discountPrices(discount, total);
                //     discountPrice.innerText = disPrice;
                // })
            }

            else {
                alert("Enter the right code please");
            }
        }
    }
}