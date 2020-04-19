Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `
    <div class="product">
    <div class="product-image">
        <img :src="image" :alt="description">
    </div>
    <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-if='inStock'>In Stock</p>
        <p v-else>Out of Stock</p>
        <p>User is premium: {{premium}}</p>

        <ul class="list-group list-group-flush w-25">
            <li class="list-group-item" v-for='item in details'>{{ item }}</li>
        </ul>
        <div class="color-box" v-for='(variant, index) in variants' @mouseover='changeImage(index)'
            :key="variant.variantId" :style='{ backgroundColor: variant.variantColor}'>
        </div>
        <button @click="addToCart" :disabled="!inStock" :class='{disabledButton: !inStock}'>Add To Cart</button>
        <div class="cart">
            <p><i class="fas fa-cart-plus"></i> Cart({{cart}})</p>
        </div>
    </div>
</div>
    `,
    data() {
        return {
        brand: 'Vue Mastery',
        product: 'Socks',
        description: 'Some pretty cool socks',
        selectedVariant: 0,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'], 
        variants: [
            {variantId: 2234, variantColor: 'green',
            variantImage: 'img/green-socks.jpg', variantQuantity: 10},
            {variantId: 2235, variantColor: 'blue',
            variantImage: 'img/blue-socks.jpg', variantQuantity: 0},
        ], 
        cart: 0
    }},
    methods: {
        addToCart() {
            return this.cart++
        },
        changeImage(index) {
            this.selectedVariant = index
        },
    },
    computed: {
        title() {
            return `${this.brand} ${this.product}`;
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },

        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        }
    },
}
)

const app = new Vue({
    el: '#app',
    data: {
        premium: true
    }
})