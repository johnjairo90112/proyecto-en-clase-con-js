//Acciones que se aplican  con evento onclick en boton menu hamburguesa
function openMenu(){
    document.getElementById("mainMenu").style.width="470px";
    document.getElementById("mainMenu").style.diplay="flex";
    document.getElementById("mainMenu").style.height="1000px";
    document.getElementById("mainMenu").style.display="none";
}
function closeNav(){
    document.getElementById("mainMenu").style.width="0";
    document.getElementById("mainMenu").style.transition="0.9s all";
    window.location.reload();// es lo mismo de pulsar tecla F5
    }
    