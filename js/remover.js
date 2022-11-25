const atletas = document.querySelectorAll(".atleta");

atletas.forEach(function(atleta){
    atleta.addEventListener("dblclick", function(){
        this.remove();
    })
})