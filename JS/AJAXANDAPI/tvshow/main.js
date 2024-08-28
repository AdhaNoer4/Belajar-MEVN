const form = document.querySelector("#search-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  document.querySelectorAll('img').forEach((img) => img.remove()); // untuk menghapus seluruh gambar ketika menginputkan judul baru
  const keyword = form.elements.query.value; // mengambil value dari input dengan name='query'
  const config = {
    params: { q: keyword },
  };
  const res = await axios.get("https://api.tvmaze.com/search/shows", config);
  getImg(res.data);
  form.elements.query.value = ''; // untuk mengosongkan input text
});


// function untuk menampilkan gambar
const getImg = (shows) =>{
    for (let result of shows){
        if (result.show.image) {
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}