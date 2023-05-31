function changeColor(e){
    let btn = document.querySelectorAll(".button");
    btn.forEach(function(btn, i){
        if(e.currentTarget==btn){
            btn.classList.add("active");
        }else{
            btn.classList.remove("active");
        }
    });
    console.log(e.currentTarget);
}
