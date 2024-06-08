function lamarKerja() {
  let pekerjaan = "Programmer";

  // Lexical Scope dapat menggunakan variabel di luar scope selama masih didalam cope/function parentnya
  // dan function harus dipanggil
  function orangDalam() {
    let tugas = `orang dalam dapat memasukan ${pekerjaan}`;
    console.log(tugas);
  }

  orangDalam();
}
