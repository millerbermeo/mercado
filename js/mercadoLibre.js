let inputBusqueda = document.getElementById('inputBusqueda');
let mainContent = document.getElementById("mainContent");

class Automovil {
    constructor(marca, modelo, precio, imagen, año, km, ciudad) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.imagen = imagen;
        this.año = año;
        this.km = km;
        this.ciudad = ciudad;
    }
}

let img1 = "imagenes/mt.jpg";
let img2 = "imagenes/bmw.jpg";
let img3 = "imagenes/ducati.jpg";
let img4 = "imagenes/super.jpg";

let auto1 = new Automovil("Mt09", "V2", 62000000, img1, 2020, 30000, "Pitalito - Huila");
let auto2 = new Automovil("BMW", "S1000 rr", 120000000, img2, 2024, 200000, "Cali - Valle del Cauca");
let auto3 = new Automovil("Ducati", "Paginale v4s", 145000000, img3, 2023, 10.4000, "Rivera - Huila");
let auto4 = new Automovil("Ktm", "Super Duke 1290", 1135000000, img4, 2022, 9000, "Cota - Cundinamarca");

let autos = [auto1, auto2, auto3, auto4];

inputBusqueda.addEventListener("input", function(event) {
    let userInput = event.target.value.toLowerCase();
    mainContent.innerHTML = ''; // Limpia el contenido anterior

    for (let auto of autos) {
        if (auto.marca.toLowerCase() === userInput) {
            // Crea la caja de producto para el auto correspondiente
            let boxProducto = document.createElement("div");
            mainContent.appendChild(boxProducto);
            boxProducto.setAttribute("class", "box-producto");

            // Caja imagen
            let boxImg = document.createElement("div");
            boxProducto.appendChild(boxImg);
            boxImg.setAttribute("class", "box-img");

            let imgAuto = document.createElement("img");
            boxImg.appendChild(imgAuto);
            imgAuto.setAttribute("src", auto.imagen);
            imgAuto.setAttribute("class", "img-auto");

            // Caja información
            let boxInfo = document.createElement("div");
            boxProducto.appendChild(boxInfo);
            boxInfo.setAttribute("class", "box-info");

            let marca = document.createElement("label");
            boxInfo.appendChild(marca);
            let txtNodeMarca = document.createTextNode(auto.marca + "  " + auto.modelo);
            marca.appendChild(txtNodeMarca);
            marca.setAttribute("class", "marca");

            // Precio
            let precio = document.createElement("label");
            boxInfo.appendChild(precio);
            let precioStr = Intl.NumberFormat("de-DE").format(auto.precio);
            let txtNodePrecio = document.createTextNode("$ " + precioStr);
            precio.appendChild(txtNodePrecio);
            precio.setAttribute("class", "precio");

            // Año
            let año = document.createElement("label");
            boxInfo.appendChild(año);

            let txtNodeAño = document.createTextNode(`${auto.año} ${auto.km} km ${auto.ciudad}`);
            año.appendChild(txtNodeAño);
            año.setAttribute("class", "año");

            // Icono de corazón
            let boxCorazon = document.createElement("div");
            boxImg.appendChild(boxCorazon);
            let icon = document.createElement("i");
            boxCorazon.appendChild(icon);
            boxCorazon.setAttribute("class", "box-corazon");
            icon.setAttribute("class", "icon-corazon fa-regular fa-heart");

            // Línea divisoria
            let lineaDiv = document.createElement("hr");

        }
    }
});
