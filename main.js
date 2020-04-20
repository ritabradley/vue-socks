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
        <p>Shipping: {{shipping}}</p>

        <ul class="list-group list-group-flush w-25">
            <li class="list-group-item" v-for='item in details'>{{ item }}</li>
        </ul>
        <div class="color-box" v-for='(variant, index) in variants' @mouseover='changeImage(index)'
            :key="variant.variantId" :style='{ backgroundColor: variant.variantColor}'>
        </div>
        <button @click="addToCart" :disabled="!inStock" :class='{disabledButton: !inStock}'>Add To Cart</button>
        
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
        
    }},
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
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
        },
        shipping() {
            if(this.premium){
                return 'Free'
            }
            return `$2.99`
        }
    },
}
)

const app = new Vue({
    el: '#app',
    data: {
        premium: true,
        cart: []
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        }
    },
})