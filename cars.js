const cars = [
    {
        id: 1,
        name: 'BMW',
        model: 'Serie 3',
        color: 'Azul',
        year: 2020,
        price: 350000,
    },
    {
        id: 2,
        name: 'Ford',
        model: 'Mustang',
        color: 'Rojo',
        year: 2001,
        price: 250000,
    },
    {
        id: 3,
        name: 'Nissan',
        model: 'March',
        color: 'Gris',
        year: 2015,
        price: 100000,
    },
];

function printCars() {
    const container = document.getElementById('cars-table-body');
    let html = '';
    cars.forEach((car) => {
        html += `<tr>
                    <td>${car.id}</td>
                    <td>${car.name}</td>
                    <td>${car.model}</td>
                    <td>${car.color}</td>
                    <td>${car.year}</td>
                    <td>${car.price}</td>
                    <td>
                        <button onclick="deleteCar(${car.id})" class= "btn btn-danger">
                            Eliminar 
                        </button>
                    </td>
                </tr>`;
    });
    container.innerHTML = html;
}

function deleteCar (id) {
    const index = cars.findIndex((car) => car.id == id );
    cars.splice(index, 1);
    printCars();
   alert(`Se va a eliminar el usuario con el id ${id}`);
    
}

function addCar () {
    const inputName = document.getElementById('name');
    const name = inputName.value;
    
    const inputModel = document.getElementById('model');
    const model = inputModel.value;

    const inputColor = document.getElementById('color');
    const color = inputColor.value;

    const inputYear = document.getElementById('year');
    const year = inputYear.value;

    const inputPrice = document.getElementById('price');
    const price = inputPrice.value;

    

   const newCar = { 
        id: cars.length + 1, name:name, model: model, color: color, year: year, price: price
    }
    
    cars.push(newCar); 
    printCars();
}

printCars();