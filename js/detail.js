document.getElementById("size").style.backgroundColor ="gray";
document.getElementById("size").onclick = function(){
            this.style.backgroundColor ="black";
        };

function changeColor(e){
    var btn = document.querySelectorAll(".button");
    btn.forEach(function(btn, i){
        if(e.currentTarget==btn){
            btn.classList.add("active");
        }else{
            btn.classList.remove("active");
        }
    });
    console.log(e.currentTarget);
}