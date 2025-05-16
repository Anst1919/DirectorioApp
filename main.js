// En JS tenemos las funciones de tipo flecha
// Utilizaremos fetch que es un método para consumir una API

//Paso 1: Función flecha
const consumirApi = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
//Convertimos la respuesta a tipo JSON
    .then((response) => response.json ())
//Los datos los vamos a mandar a la consola
.then((data) => console.log("USERS:", data))
//Descubrir qué hacer en caso de que no me corresponda
.catch((error) => console.log(error))
};

consumirApi();

// Function to consume the "posts" API
const fetchPosts = () => {
  // Get data from the API
  fetch("https://jsonplaceholder.typicode.com/posts")
    // Convert the response to JSON format
    .then((response) => response.json())
    // Display the data in the console
    .then((data) => console.log("POSTS:", data))
    // Handle possible errors
    .catch((error) => console.log("ERROR:", error));
};

// Call the function
fetchPosts();