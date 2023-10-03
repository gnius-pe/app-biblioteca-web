let buscarCOdigo = document.getElementById('BuscarCodigo');
let pasword = document.getElementById('inputContrasena');
const btnCancelar = document.getElementById("btnCancelar");
const btnCrear = document.getElementById('btnCrear');


let codigo = document.getElementById('codigo');
let nombrelnput = document.getElementById('inputNombre');
let apellidoPaterno = document.getElementById('inputApellidoPaterno');
let apellidoMaterno = document.getElementById('inputApellidoMaterno');
let correo = document.getElementById('inputCorreo');

let form = {
    codigo: "",
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    password: "",
    correo: ""
}

let finderObj = {
    codigo : "",
    password : ""
  }

const finder = new URLSearchParams(finderObj).toString();

document.getElementById("btnBuscarCodigo").addEventListener("click", function() { 
        console.log("anets de la")
        const apiUrl = 'https://servicio-biblioteca-unas.rj.r.appspot.com/genius/api/usuario/valida/' + buscarCOdigo.value;
        console.log(apiUrl)
        fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`La solicitud falló con estado: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {

            console.log(data)
            codigo.value = data.codigo;
            nombrelnput.value = data.nombre;
            apellidoPaterno.value = data.apellidoPaterno;
            apellidoMaterno.value = data.apellidoMaterno;
            correo.value = data.correo;

            form.codigo = data.codigo;
            form.nombre = data.nombre;
            form.apellidoPaterno = data.apellidoPaterno;
            form.apellidoMaterno = data.apellidoMaterno;
            form.correo = data.correo;
            form.password = pasword.value
        })
        .catch((error) => {
            console.error('Error al obtener documentos:', error);
            pasword = null;
        });
      
});



btnCancelar.addEventListener("click", function() {
           
    window.location.href = '/index.html';
});

btnCrear.addEventListener("click",function(){
    const apiUrl = 'https://servicio-biblioteca-unas.rj.r.appspot.com/genius/api/usuario/registra';
    console.log("fomr" , form)
  // Configuración de la solicitud
    const opciones = {
        method: 'POST', // Método POST para enviar datos
        headers: {
        'Content-Type': 'application/json', // Tipo de contenido JSON
        },
        body: JSON.stringify(form), // Convierte los datos a formato JSON
    };

    fetch(apiUrl, opciones)
        .then(response => {
            if (!response.ok) {
                throw new Error(`La solicitud falló con estado: ${response.status}`);
            }
            return response.json();
            })
        .then(data => {
            // Aquí puedes trabajardata con la respuesta de la API
            console.log("respuesta  data " + data);
            })
        .then   (error => {
            console.error('Error al enviar la solicitud:', error);
    });
});

// Datos que deseas enviar en el cuerpo de la solicitud

  // URL de la API
  
  /* 
  // Realiza la solicitud POST utilizando fetch
  

        // Agrega un controlador de eventos al formulario
*/