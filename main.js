// In JS we have arrow type functions.
// We will use fetch which is a method to consume the API.

// Step 1, arrow function to consume the API
const consumirApi = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    // We convert the response to json type
    .then((response) => response.json())
    // API data is processed
    .then((data) => {
      const contenedor = document.getElementById("contenedor");

      // List of user-personalized images
      const imagenes = [
        "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png",
        "https://www.shareicon.net/data/256x256/2016/08/05/806962_user_512x512.png",
        "https://cdn3.iconfinder.com/data/icons/avatars-business-human1/180/woman3-512.png",
        "https://cdn3.iconfinder.com/data/icons/avatars-business-human1/180/woman2-512.png",
        "https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png",
        "https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-women-cartoon-avatar-in-flat-style-png-image_6110776.png",
        "https://www.shareicon.net/data/512x512/2016/05/24/770117_people_512x512.png",
        "https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png",
        "https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/050_girl_avatar_profile_woman_suit_student_officer-512.png",
        "https://cdn-icons-png.flaticon.com/512/146/146005.png"
      ];

      // We process each user to create their information card
      data.forEach((personita, index) => {
        contenedor.innerHTML += `
          <div class="col-md-6 mb-4">
            <div class="card flex-row">
              <img src="${imagenes[index]}" 
                   class="card-img-left" 
                   style="width: 150px; height: 150px; object-fit: contain; border-radius: 8px;" 
                   alt="usuario${index + 1}">
              <div class="card-body">
                <h5 class="card-title">${personita.name}</h5>
                <p class="card-text">Información de contacto</p>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Nombre de usuario: ${personita.username}</li>
                  <li class="list-group-item">Correo electrónico: ${personita.email}</li>
                  <li class="list-group-item">Número telefónico: ${personita.phone}</li>
                  <li class="list-group-item">Sitio web: ${personita.website}</li>
                  <li class="list-group-item">Calle: ${personita.address.street}</li>
                  <li class="list-group-item">Habitación: ${personita.address.suite}</li>
                  <li class="list-group-item">Ciudad: ${personita.address.city}</li>
                  <li class="list-group-item">Código postal: ${personita.address.zipcode}</li>
                </ul>
              </div>
            </div>
          </div>
        `;
      });
    })
    // In case of error when loading the API
    .catch((error) => console.log(error));

};

// We execute the function when the page loads
consumirApi();

//Other chosen API 
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