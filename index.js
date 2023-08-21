let total = 0;

function applyDiscount(total) {
    document.getElementById("code").addEventListener("keyup", function (event) {
        const textCode = event.target.value;
        if (textCode == "SELL200") {
            const applyBtn = document.getElementById("apply-btn");
            applyBtn.addEventListener("click", function () {
                const discountPrice = document.getElementById("discount-price");
                const discount = (total * (20 / 100));
                const discountTk = discount.toFixed(2);
                discountPrice.innerText = discountTk;

                const totalAfterDiscount = total - discountTk;
                const totalAfterDis = document.getElementById("total-dis-price");
                totalAfterDis.innerText = totalAfterDiscount;
            })
        }
    })
}

document.getElementById("home-btn").addEventListener("click", function () {
    const itemPrice = document.getElementById("total-price");
    itemPrice.innerText = "0";

    const discountPrice = document.getElementById("discount-price");
    discountPrice.innerText = "0";

    const totalAfterDis = document.getElementById("total-dis-price");
    totalAfterDis.innerText = "0";

    const couponCode = document.getElementById("code");
    couponCode.value = "";

    const purchaseItem = document.getElementById("purchase");
    purchaseItem.innerText = "";
})

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

    const totalAfterDis = document.getElementById("total-dis-price");
    totalAfterDis.innerText = total;

    if (total > 0) {
        const purchaseBtn = document.getElementById("purchase-btn");
        purchaseBtn.disabled = false;

        if (total >= 200) {
            const applyBtn = document.getElementById("apply-btn");
            applyBtn.disabled = false;
            applyDiscount(total);
        }
    }
}