
class Car {
    constructor(modelo, preco, alturacacamba, alturaveiculo, alturasolo, capacidadecarga, motor, potencia, volumecacamba, roda, imagePath) {
        this.modelo = modelo;
        this.preco = preco; 
        this.alturacacamba = alturacacamba;
        this.alturaveiculo = alturaveiculo;
        this.alturasolo = alturasolo; 
        this.capacidadecarga = capacidadecarga; 
        this.motor = motor; 
        this.potencia = potencia; 
        this.volumecacamba = volumecacamba; 
        this.roda = roda;
        this.imagePath = imagePath; 
    }
}


let carsToCompare = []; 
 
function formatCurrency(value) {
    if (typeof value !== 'number') return '';
    return 'R$ ' + value.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}


function SetCarToCompare(checkbox, car) {
    if (checkbox.checked) {

        if (carsToCompare.length < 2) {
            carsToCompare.push(car);
            console.log(`Carro adicionado: ${car.modelo}`);
        } else {
            
            checkbox.checked = false; 
            alert('Você pode selecionar no máximo 2 carros para comparação.');
            console.warn('Limite de 2 carros atingido.');
        }
    } else {
        
        carsToCompare = carsToCompare.filter(c => c.modelo !== car.modelo);
        console.log(`Carro removido: ${car.modelo}`);
    }
}

function ShowCompare() {
    const compareDiv = document.getElementById('compare');
    
    if (carsToCompare.length < 2) {
        alert('Selecione 2 carros para iniciar a comparação.');
        return;
    }

    
    for (let i = 0; i < 2; i++) {
        
        if (!carsToCompare[i]) {
            document.getElementById(`compare_image_${i}`).innerHTML = '';
            document.getElementById(`compare_modelo_${i}`).innerText = '';
            document.getElementById(`compare_preco_${i}`).innerText = '';
            document.getElementById(`compare_alturacacamba_${i}`).innerText = '';
            document.getElementById(`compare_alturaveiculo_${i}`).innerText = '';
            document.getElementById(`compare_alturasolo_${i}`).innerText = '';
            document.getElementById(`compare_capacidadecarga_${i}`).innerText = '';
            document.getElementById(`compare_motor_${i}`).innerText = '';
            document.getElementById(`compare_potencia_${i}`).innerText = '';
            document.getElementById(`compare_volumecacamba_${i}`).innerText = '';
            document.getElementById(`compare_roda_${i}`).innerText = '';
            continue; 
        }

        const car = carsToCompare[i];

        const imgElement = document.createElement('img');
        imgElement.src = car.imagePath;
        imgElement.alt = car.modelo;
        imgElement.style.width = '100%'; 
        imgElement.style.maxWidth = '250px'; 
        const imageCell = document.getElementById(`compare_image_${i}`);
        imageCell.innerHTML = ''; 
        imageCell.appendChild(imgElement);

        
        document.getElementById(`compare_modelo_${i}`).innerText = car.modelo;
        
        document.getElementById(`compare_preco_${i}`).innerText = formatCurrency(car.preco); 
        document.getElementById(`compare_alturacacamba_${i}`).innerText = `${car.alturacacamba} mm`;
        document.getElementById(`compare_alturaveiculo_${i}`).innerText = `${car.alturaveiculo} mm`;
        document.getElementById(`compare_alturasolo_${i}`).innerText = `${car.alturasolo} mm`;
        document.getElementById(`compare_capacidadecarga_${i}`).innerText = `${car.capacidadecarga} Kg`;
        document.getElementById(`compare_motor_${i}`).innerText = `${car.motor} L`;
        document.getElementById(`compare_potencia_${i}`).innerText = `${car.potencia} cv`;
        document.getElementById(`compare_volumecacamba_${i}`).innerText = `${car.volumecacamba} L`;
        document.getElementById(`compare_roda_${i}`).innerText = car.roda;
    }

        compareDiv.style.display = 'block'; 
        compareDiv.scrollIntoView({ behavior: 'smooth' }); 
}

function HideCompare() {
    document.getElementById('compare').style.display = 'none';
    
}

document.addEventListener('DOMContentLoaded', (event) => {
    const compareDiv = document.getElementById('compare');
    if (compareDiv) {
        compareDiv.style.display = 'none';
    }
});