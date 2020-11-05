
let appleprice = 0;
let appleQuantity = 0;
let mangoprice = 0;
let mangoQuantity = 0;
let bananaprice = 0;
let bananaQuantity = 0;
let total = 0;
let budget = 0;
let remaining = 0;


function user_budget() {

    budget = document.querySelector("#budget").value;
}
function total_amount() {
    total = appleprice + mangoprice + bananaprice;
    document.querySelector("#total span").innerHTML = total;
}
function user_remaining() {
    remaining = budget - total;
    document.querySelector("#r-b span").innerHTML = remaining;
}

// apple
// adding apple price
function addprice1() {
    user_budget();
    user_remaining();
    if ( total< budget && remaining >= 10) {
        appleprice += 10
        total_amount();
        appleQuantity++
        document.querySelector("#apple-price").value = appleQuantity;
        user_remaining();
    }
    else {
        alert("You don't have an enough amount")
    }
}
// subtracting apple price
function subprice1() {
    if (appleQuantity != 0) {
        appleprice -= 10
        appleQuantity--
        document.querySelector("#apple-price").value = appleQuantity;
        user_budget();
        total_amount();
        user_remaining();
    }
    else {
        alert("You have not selected any item");
    }

}
// mango
// adding mango price
function addprice2() {
    user_budget();
    user_remaining();
    if (total<budget && remaining>=5) {
        mangoprice += 5
        total_amount();
        mangoQuantity++
        document.querySelector("#mango-price").value = mangoQuantity;
        user_remaining();
    }
    else {
        alert("You don't have an enough amount")
    }


}
// subtracting mango price
function subprice2() {
    if (mangoQuantity != 0) {
        mangoprice -= 5
        mangoQuantity--
        document.querySelector("#mango-price").value = mangoQuantity;

        user_budget();
        total_amount();
        user_remaining();
    }
    else {
        alert("You have not selected any item");
    }
}
// banana
// adding banana price
function addprice3() {
    user_budget();
    user_remaining();
    if (total < budget && remaining >= 15) {
        bananaprice += 15
        total_amount();
        bananaQuantity++
        document.querySelector("#banana-price").value = bananaQuantity;
        user_remaining();
    }
    else {
        alert("You don't have an enough amount")
    }
}
// subtracting banana price
function subprice3() {
    if (bananaQuantity != 0) {
        bananaprice -= 15
        bananaQuantity--
        document.querySelector("#banana-price").value = bananaQuantity;

        user_budget();
        total_amount();
        user_remaining();

    }
    else {
        alert("You have not selected any item");
    }
}






