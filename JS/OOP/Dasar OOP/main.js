class Peliharaan {
  // Parent class
  constructor(name, age) {
    //property
    this.name = name;
    this.age = age;
  }

  makan() {
    // method makan
    return `${this.name} lagi makan`;
  }
}

class Kucing extends Peliharaan {
  //child class
  constructor(name, age, life) {
    super(name, age); // super() digunakan untuk menambahkan parameter baru di constructor tanpa mmpengaruhi constructor parntnya
    this.life = life;
  }
  meong() {
    return "Meongg!!";
  }
}

class Anjing extends Peliharaan {
  // child class
  gonggong() {
    return "gukgguk!";
  }
}
