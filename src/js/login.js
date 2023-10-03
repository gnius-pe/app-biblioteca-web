document.getElementById("btnIngresar").addEventListener("click", function() {
    // Obtener los valores de los campos de correo y contraseña
    let correo = document.getElementById("correo").value;
    let contrasena = document.getElementById("contrasena").value;

    validaPasword(correo,contrasena);
});


function validaPasword(correo, passwordUsuario) {
    // Reemplaza la URL con la URL real de tu API
    const apiUrl = 'http://servicio-biblioteca-unas.rj.r.appspot.com/genius/api/usuario/login/' + correo;
    console.log(apiUrl)
    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`La solicitud falló con estado: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {

            if(passwordUsuario === data.passwordUsuario){
                
                if(data.rolUsuario === "administrador"){
                    window.location.href = '/public/register.html';
                    
                }
                

                if(data.rolUsuario === "estudiante"){
                    window.location.href = '/public/home.html';
                }
            }else{
                alert("COntraseña incorrecta")
            }
        })
        .catch((error) => {
            console.error('Error al obtener documentos:', error);
            pasword = null;
        });
        
}


document.getElementById("correo").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        // Evita el comportamiento predeterminado del Enter en el campo de correo
        event.preventDefault();
        // Enfoca el campo de contraseña
        document.getElementById("contrasena").focus();
    }
});

document.getElementById("contrasena").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        // Activa el botón de "Iniciar Sesión" al presionar Enter en el campo de contraseña
        document.getElementById("btnIngresar").click();
    }
});
