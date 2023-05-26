document.getElementById("size").style.backgroundColor ="white";
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

function disClick(e){
    e=changeColor.apply
    if(e==null){
        alert("색을 선택해주세요.");
    }
    if(e!=null){
        location.href="../html/order.html"
    }
}