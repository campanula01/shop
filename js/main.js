let num = 0;
window.onload = function(){
    //1초 간격으로 이미지가 변경되도록 코딩
    //이미지는 1.jpg~3.jpg 교대로
    setInterval(function(){
        num=(num%3)+1;
        document.getElementById("sale").src = "../images/" +num+".png"
    },1000);
}