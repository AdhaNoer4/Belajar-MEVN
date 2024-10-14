var app = new Vue({
    el : '#app',
    data: {
        slugtext: 'The Quick #(*!&@ Brown 29'
    },
    computed : {
        slugetize: function(){
            return this.slugtext
            .toLowerCase()
            .replace(/[^\w ]+/g, ' ') // Regex: menghapus tanda baca seperti #(!!*&@)
            .replace(/ +/g, '-') // Mengubah white space / spasi menjadi tanda strip -
        },
    }
});