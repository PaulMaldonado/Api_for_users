// Obteniendo el id button para crear una función displayAjax
document.getElementById('button').addEventListener('click', displayAjax);


// Creando función displayAjax
function displayAjax() {
    const api = new XMLHttpRequest();

    api.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200) {
           // Conviertiendo this.responseText a JSON
           const data = JSON.parse(this.responseText);
           const responseInfo = document.getElementById('result');
           responseInfo.innerHTML = '';

           // Creando un ciclo for para iterar a traves de cada elemento
            for(let element of data) {
                responseInfo.innerHTML += `
                <tr>
                    <td>${element.name}</td>
                    <td>${element.age}</td>
                    <td>${element.email}</td>
                </tr>
            `;

            }
        } 
    }
    // Método de respuesta
    api.open('GET', '../album.json', true);
    api.send();
}