function calcularDatos() {
    let inputs = document.querySelectorAll('.valor-dia');
    let valores = [];

    for (let i = 0; i < inputs.length; i++) {
        let val = parseFloat(inputs[i].value);
        if (isNaN(val)) {
            alert("capturalos primero paro.");
            return;
        }
        valores.push(val);
    }

    let suma = 0;
    let max = valores[0];
    let min = valores[0];

  
    for (let i in valores) {
        let num = valores[i];
        suma += num;
        if (num > max) max = num;
        if (num < min) min = num;
    }

    let promedio = (suma / valores.length).toFixed(2);

   
    let html = `<strong class="text-white">Valores capturados:</strong> [${valores.join(', ')}]<br><br>`;
    html += ` &nbsp;<strong class="text-white">Promedio:</strong> ${promedio}<br>`;
    html += ` &nbsp;<strong class="text-white">Máximo:</strong> ${max}<br>`;
    html += ` &nbsp;<strong class="text-white">Mínimo:</strong> ${min}`;

    document.getElementById('resultado').innerHTML = html;
}