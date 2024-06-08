function duaKali(func) {
  func();
  func();
}

function lemparDadu() {
  const hasil = Math.floor(Math.random() * 6) + 1;
  console.log(hasil);
}

duaKali(lemparDadu); // function duaKali memiliki argument function lempardadu
