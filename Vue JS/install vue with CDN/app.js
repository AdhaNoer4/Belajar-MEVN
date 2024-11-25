// Reactive data pada Vuejs adalah kita dapat menghubungkan element dengan property dari objek js yang dapat kita ubah dengan mudah dan element juga akan ikut berubah secara real time
// component merupakan template yang dapat kita gunakan berulang ulang di Vue.js
Vue.component("price", {
  data: function () {
    return {
    
    };
  },
  props: ['value','prefix','precision'],
  template: `<span>{{ this.prefix + Number.parseFloat(this.value).toFixed(this.precision) }} </span>`,
});

var app = new Vue({
  el: "#app",
  data: {
    imgClass: "img-fluid",
    maximum: 50,
    products: null,
    cart: [],
    style: {
      label: ["font-weight-bold", "ms-2", "me-2"],
      inputWidth: 60,
      sliderStatus: false,
    },
  },
  // life cycle hooks vue.js
  mounted: function () {
    fetch("https://hplussport.com/api/products/order/price") //API
      .then((response) => response.json()) // ubah response dari api menjadi format json
      .then((data) => {
        // masukan data kedalam property product
        this.products = data;
      });
  },

  filters: {
    currencyFormat: (value) => {
      return "Rp" + Number.parseFloat(value).toFixed(2);
    },
  },

  computed: {
    sliderState: function () {
      return this.style.sliderStatus ? "d-flex" : "d-none";
    },
    cartTotal: function () {
      let sum = 0;
      for (key in this.cart) {
        sum = sum + this.cart[key].product.price * this.cart[key].qty;
      }
      return sum;
    },
    cartQty: function () {
      let qty = 0;
      for (key in this.cart) {
        qty = qty + this.cart[key].qty;
      }
      return qty;
    },
  },

  // Method dalam Vue.js
  methods: {
    beforeEnter: function (el) {
      el.className = "d-none";
    },
    enter: function (el) {
      var delay = el.dataset.index * 100;
      setTimeout(() => {
        el.className = "row d-flex mb-3 align-items-center animate__animated animate__fadeInRight";
      }, delay);
    },
    leave: function (el) {
      var delay = el.dataset.index * 100;
      setTimeout(() => {
        el.className = "row d-flex mb-3 align-items-center animate__animated animate__fadeOutRight";
      }, delay);
    },
    addItem: function (product) {
      var productIndex;
      var productExist = this.cart.filter(function (item, index) {
        if (item.product.id == Number(product.id)) {
          productIndex = index;
          return true;
        } else {
          return false;
        }
      });

      if (productExist.length) {
        this.cart[productIndex].qty++;
      } else {
        this.cart.push({ product: product, qty: 1 });
      }
    },

    deleteItem: function (key) {
      if (this.cart[key].qty > 1) {
        this.cart[key].qty--;
      } else {
        this.cart.splice(key, 1);
      }
    },
  },
});
