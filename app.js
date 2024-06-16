
const url="https://api.spacexdata.com/v3/launches";
const contenido = document.querySelector('#contenido');
const cardBody= document.querySelector('.modal-body');


document.addEventListener('DOMContentLoaded',takeoff);

async function takeoff() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        data.forEach(element => {
            const card= document.createElement('section');
            card.innerHTML = `
                <div class="card" style="width: 30rem;">
                    <img src="${element.links.mission_patch}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${element.mission_name}</h5>
                        <p class="card-text">${element.launch_year}</p>
                        <a href="#" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" id="${element.flight_number}" >Detalles Mision</a>
                    </div>
                </div>
            `;
            contenido.appendChild(card);
        });
        const boton =document.querySelectorAll('a');
        boton.forEach(btn=>{
            btn.addEventListener('click',e=>{
                console.log(e.target.getAttribute('id'));
                
            });
        })
    } catch (error) {
        console.log("Error de ejecucion, vuelva a mirar el codigo");
    }
}



/*
async function theCards(){
    fetch(`https://api.spacexdata.com/v3/launches/${element.flight_number}`)
            .then(rta=>{return rta.json()})
            .then(data=>{
                console.log(data);
                console.log(data.links.video_link)
    })
    
    /*
    try {
        const response2 = await fetch(`https://api.spacexdata.com/v3/launches/${card.flight_number}`)
        const data2 = await response2.json();
        console.log(data2.links.video_link);
            //     const card = document.createElement('section');
            //     card.innerHTML=`
            //         <iframe src="${response2.links.video_link}"></iframe>
            //     `;
            //     cardBody.appendChild(card);
    } catch (error) {
        
    }
}*/


/* ejecucion de codigo saltando errores */
/*
console.log(3);
try {
    imprimir(); //no se ha declarado
} catch (error) {
    
}
console.log(5);
*/


/*fetch con then then */
/*
const otroUrl= "https://www.themealdb.com/api/json/v1/1/categories.php";
document.addEventListener('DOMContentLoaded',getData);
function getData() {
    fetch(otroUrl)
    .then(result=>result.json())
    .then(data=>console.log(data.categories));
}


/* fetch con async await 

const otroUrl= "https://www.themealdb.com/api/json/v1/1/categories.php";
document.addEventListener('DOMContentLoaded',getData);
async function getData() {

    try {
        const response = await fetch(otroUrl);
        const datas= await response.json();
        console.log(datas.categories);
    } catch (error) {
        console.log("Error de ejecucion, vuelva a mirar el codigo");
    }

    
}*/

