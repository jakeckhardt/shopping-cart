let $divs = $("#divs div");
let $last = $divs.children("p:nth-of-type(2)");
let $cart = $("#cart");
let subtotalCost = 0;

 
$("<button class='addButton'>Add to cart</button>").insertAfter($last);

let $addButton = $(".addButton");

function isEmpty(el) {
	return !$.trim(el.html());
};

$addButton.on("click", function() {
	$totalsInCart = $("#cart b");
	$cartButtons = $("#cart button");

	if (isEmpty($cart) == false) {
		$totalsInCart.remove();
		$cartButtons.remove();
	}
	$productName = $(this).parent().children("p:nth-of-type(1)").clone();
	$productCost = $(this).parent().children("p:nth-of-type(2)").clone();
	$cart.append($productName, $productCost);
	subtotalCost += parseFloat($productCost.text().substr(1));
	let subtotal = "<b>Subtotal: $" + subtotalCost + "</b>";
	let tax = (.10 * subtotalCost).toFixed(2);
	let taxtotal = "<b>Tax: $" + tax + "</b>";
	let total = (subtotalCost + parseFloat(tax)).toFixed(2);
	let totaltotal = "<b>Total: $" + total + "</b>";
	let submit = "<button id='checkoutButton'>checkout</a></button>";
	$cart.append(subtotal + "</br>" + taxtotal + "</br>" + totaltotal + "</br>" + submit);

	$("#checkoutButton").on("click", function() {
		location.href = "checkout.html";
	});
});

