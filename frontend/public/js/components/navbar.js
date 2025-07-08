document.addEventListener("DOMContentLoaded", function(){
    const navbarElement = document.querySelector(".navbar-container");

    if(navbarElement){
        fetch("/frontend/public/views/components/navbar.html")
        .then(response => response.text())
        .then(data => {navbarElement.innerHTML = data;

            //=== Logica para reLIZAR EL ENLACE ACTIVO EN NAVBAR

            //=== Obtener la ruta actual
            //=== si no ay un archivo especifico se asume que es el index
            const currentPage = window.location.pathname.split("/").pop() || "index.html";

            //Selecciona todos los enlaces del navbar que usaran en la clase personalizada
            const navLinks = navbarElement.querySelectorAll(".navbar__link");

            //recorre cada enlace del navbar
            navLinks.forEach(link => {

                //Verifica si el href del enlace incluye el nombre de la pagina actual
                if(link.getAttribute("href").includes(currentPage)){
                    //si es la pagina actual se le asigna la clase 'active' para descartarla visulamente
                    link.classList.add ("active");
                }
            });
    })
    .catch(error => console.error("Error cargando el navbar", error));

    }
});