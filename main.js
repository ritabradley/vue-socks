const app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: 'img/green-socks.jpg',
        description: 'Some pretty cool socks',
        inStock: true,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'], 
        variants: [
            {variantId: 2234, variantColor: 'green'},
            {variantId: 2235, variantColor: 'blue'},
        ]
    }
})