function capturarYProcesarAlumnos() {
    let alumnos = [];

    for (let i = 0; i < 10; i++) {
        let nombre = prompt(`Ingresa el nombre del alumno ${i + 1} de 10:`);
        
        if (nombre === null || nombre.trim() === "") {
            alert("Captura cancelada o campo vacío. Intenta de nuevo.");
            return;
        }
        alumnos.push(nombre.trim());
    }

    let htmlInicial = "<strong class='text-white'>1. Arreglo Inicial :</strong><ul class='mt-2 mb-3'>";
    alumnos.forEach((alumno, index) => {
        htmlInicial += `<li>[${index}] <span class="text-light">${alumno}</span></li>`;
    });
    htmlInicial += "</ul><hr style='border-color: #2a2a35;'>";

    let posicionPrompt = prompt("Ingresa el índice (número del 0 al 9) del alumno que deseas eliminar:");
    let posicion = parseInt(posicionPrompt);

    if (isNaN(posicion) || posicion < 0 || posicion >= alumnos.length) {
        alert("Índice no válido. Proceso cancelado.");
        return;
    }

    let eliminado = alumnos.splice(posicion, 1);

    let htmlProceso = `<strong class='text-white'>Elemento eliminado</strong> <span class="text-danger fw-bold">${eliminado}</span> (en la posición ${posicion})<br><br>`;

    let htmlFinal = "<strong class='text-white'>2. Arreglo Final:</strong><ul class='mt-2'>";
    alumnos.forEach((alumno, index) => {
        htmlFinal += `<li>[${index}] <span class="text-light">${alumno}</span></li>`;
    });
    htmlFinal += "</ul>";

    document.getElementById('resultadoAlumnos').innerHTML = htmlInicial + htmlProceso + htmlFinal;
}