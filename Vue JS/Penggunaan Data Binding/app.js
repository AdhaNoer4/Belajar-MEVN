// Reactive data pada Vuejs adalah kita dapat menghubungkan element dengan property dari objek js yang dapat kita ubah dengan mudah dan element juga akan ikut berubah secara real time
var app = new Vue({
    el: "#app",
    data: {
      imgClass: 'img-fluid',
      maximum: 50,
      products: null,
      cart: [],
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
  
    // Method dalam Vue.js
    methods: {
      addItem: function (product) {
        this.cart.push(product);
      },
    },
  });
  