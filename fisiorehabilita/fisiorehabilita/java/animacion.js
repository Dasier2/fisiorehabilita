const numPelotas = 4; // Número de pelotas
const pelotas = []; //Creamos un arreglo vacío para almacenar las propiedades de cada pelota.

// Crear pelotas con propiedades aleatorias
for (let i = 0; i < numPelotas; i++) {
    let pelota = document.createElement("div"); //Crea un nuevo div que representará una pelota.
    pelota.classList.add("pelota"); //Asigna la clase CSS .pelota al div para darle el estilo de una pelota
    document.body.appendChild(pelota); //Añade la pelota al body del documento para que se muestre en la pantalla.

    pelotas.push({ //Agrega cada pelota al arreglo pelotas con un conjunto de propiedades:
        elemento: pelota, //El div que representa la pelota en el DOM.
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        velX: (Math.random() - 0.5) * 8, // Velocidad aleatoria entre -4 y 4
        velY: (Math.random() - 0.5) * 8,
        size: 130 + Math.random() * 250 // Tamaño entre 30px y 50px
    });
    pelota.style.width = pelotas[i].size + "px";
    pelota.style.height = pelotas[i].size + "px";
}

function move() {
    pelotas.forEach(pelota => {
        let maxX = window.innerWidth - pelota.size;
        let maxY = window.innerHeight - pelota.size;

        pelota.x += pelota.velX;
        pelota.y += pelota.velY;

        // Rebote en los bordes
        if (pelota.x <= 0 || pelota.x >= maxX) pelota.velX *= -1;
        if (pelota.y <= 0 || pelota.y >= maxY) pelota.velY *= -1;

        // Aplicar movimiento
        pelota.elemento.style.transform = `translate(${pelota.x}px, ${pelota.y}px)`;
    });

    requestAnimationFrame(move);
}


window.onload = move; // Iniciar animación al cargar la página