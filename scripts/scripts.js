document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 20) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  }); 


  $(window).scroll(function() {

    var position =$(this).scrollTop();
   
    
    if (position > 100) {
       $(".boton-subir").fadeIn('slow');
     } else {
     $(".boton-subir").fadeOut('slow');
    }
   });


  
    function filterProjects(category) {
        const projects = document.querySelectorAll('.col-lg-6'); // Selecciona todos los proyectos
        projects.forEach(project => {
            const projectCategory = project.getAttribute('data-category');
            if (category === 'todos' || projectCategory === category) {
                project.style.display = 'block'; // Muestra el proyecto si coincide con la categoría o si se selecciona "Todos"
            } else {
                project.style.display = 'none'; // Oculta el proyecto si no coincide con la categoría
            }
        });
    }




  
   
