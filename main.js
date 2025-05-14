// EN JS tenemos las funciones de tipo flecha
// Utilizaremos fetch que es un método para consumir una API

//Paso 1: Función flecha
const consumirApi = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
//Convertimos la respuesta a tipo JSON
    .then((response) => response.json ())
//Los datos los vamos a mandar a la consola
.then((data) => console.log(data))
//Descubrir qué hacer en caso de que no me corresponda
.catch((error) => console.log(error))
};

consumirApi();
