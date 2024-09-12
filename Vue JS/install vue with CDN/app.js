var product = {
    "name": "Bangboo Jacket",
    "description":"ini adalah jaket untuk bangboo",
    "price": "Rp 10.000"
}

// Reactive data pada Vuejs adalah kita dapat menghubungkan element dengan property dari objek js yang dapat kita ubah dengan mudah dan element juga akan ikut berubah secara real time
var app = new Vue({
    el: '#app',
    data: product
  });