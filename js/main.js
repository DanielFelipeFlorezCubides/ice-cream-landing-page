const products = [
    {
        image: "storage/img/product_1.png",
        "name-title": "Mix Ice Cream",
        "type-order": [
            "On table",
            "Delivery"
        ],
        price: [
            199, 0
        ]
    },

    {
        image: "storage/img/chocolate.png",
        "name-title": "Chocolate Cup",
        "type-order": "On table",
        price: [
            129, 2
        ]
    },

    {
        image: "storage/img/barry.png",
        "name-title": "Barry Ice Cream",
        "type-order": [
            "On table",
            "Delivery"
        ],
        price: 109
    },

    {
        image: "storage/img/strawberry.png",
        "name-title": "Strawbarry Ice Cream",
        "type-order": "Delivery",
        price: 149
    }
]

const article_products = document.querySelectorAll(".article__products")
let plantilla = ""
for (let i = 0; i < products.length; i++) {
    plantilla += `
    <form action="?" method="GET" class="form__container-product">
        <img src="${products[i].image}" >
        <div class="div__product">
                <h3>${products[i].name}</h3>
                <span>Order Type:</span>
            <div class="div__type-order">
                <input type="submit" name="type-order" value="On Table">
                <input type="submit" name="type-order" value="Delivery">
            </div>
            <div  class="div__product-amount">
                <label>Rs. 199/-</label>
                <input type="number" name="amount" value="0">
            </div>
        </div>
    </form>
    `
}