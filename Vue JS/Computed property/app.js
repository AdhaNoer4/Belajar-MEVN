var app = new Vue({
    el : '#app',
    data: {
        slugtext: 'The Quick #(*!&@ Brown 29'
    },
    //omputed Property hanya akan dievaluasi ulang jika data yang terlibat berubah. 
    //Computed Property lebih efisien karena Vue.js secara otomatis melakukan caching untuk hasil perhitungannya, sementara methods tidak memiliki caching.
    computed : {
        slugetize: function(){
            return this.slugtext
            .toLowerCase()
            .replace(/[^\w ]+/g, ' ') // Regex: menghapus tanda baca seperti #(!!*&@)
            .replace(/ +/g, '-') + '-' + this.now() // Mengubah white space / spasi menjadi tanda strip -
        },
    },
    // Methods selalu dievaluasi setiap kali dipanggil, tanpa memedulikan apakah data yang terlibat sudah berubah atau belum
    methods : {
        now : function () {
            var date = new Date();
            return(

                String(date.getHours())+
                String(date.getMinutes())+
                String(date.getSeconds())
            )

            
        }
    }

});

//Kesimpulan: Jika kamu perlu menghitung ulang setiap kali fungsi dipanggil, gunakan methods. Jika kamu hanya ingin menghitung sesuatu ketika data yang dipakai berubah, gunakan computed property.