
function toggleMenu(){
    const menu= Document.queySelector(".menu-links");
    const icon=Document.querySelector(".hamurger-icon");
    menu.classlist.toggle("open");
    icon.classlist.toggle("open");   
   }
   