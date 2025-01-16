let Bicicleta = function (id, color, modelo, ubicacion) {
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}

Bicicleta.allBicis = [];

Bicicleta.add = function (bici) {
    this.allBicis.push(bici);
}

Bicicleta.removeById = function (id) {
    this.allBicis = this.allBicis.filter(bici => bici.id != id);
}

Bicicleta.update = function (bici) {
    Bicicleta.removeById(bici.id);
    Bicicleta.add(bici);
}

let a = new Bicicleta(1, "Rojo", "Trek", [28.503789, -13.853296]);
let b = new Bicicleta(2, "Azul", "Orbea", [28.501367, -13.853476]);
Bicicleta.add(a);
Bicicleta.add(b);

module.exports = Bicicleta;