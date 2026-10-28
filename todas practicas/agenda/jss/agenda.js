function guardar() {
    let dia = prompt("Ingresa el día (Lunes, Martes, Miércoles, Jueves, Viernes, Sábado, Domingo):");
    if (dia === null) return;

    let hr = prompt("Ingresa la hora (Ej. 5:00 pm):");
    if (hr === null) return;

    let evento = prompt("Ingresa el nombre del evento:");
    if (evento === null) return;

    let desc = prompt("Ingresa la descripción del evento:");
    if (desc === null) return;

    let diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    let index = -1;

    for (let i = 0; i < diasSemana.length; i++) {
        if (diasSemana[i].toLowerCase() === dia.trim().toLowerCase()) {
            index = i;
            break;
        }
    }

    if (index !== -1) {
        document.getElementById(`hr${index}`).innerText = hr;
        document.getElementById(`evento${index}`).innerText = evento;
        document.getElementById(`desc${index}`).innerText = desc;
    } else {
        let nuevaFila = document.createElement("tr");
        nuevaFila.innerHTML = `
            <td>${dia}</td>
            <td>${hr}</td>
            <td>${evento}</td>
            <td>${desc}</td>
        `;
        document.querySelector("tbody").appendChild(nuevaFila);
    }
}