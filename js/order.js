window.onload=function(){
    document.getElementById("tel").addEventListener("keyup", function(){
        //결과 출력용 span
        const span = document.getElementById("telResult");

        const regExp=/^[0-9]{4}$/;

        //유효성 검사 
        if(regExp.test(this.value)){
            //#inputName에 작성된 값이 유효한 경우
            span.innerText="유효한 형식입니다.";
            span.style.color="green";
            span.style.fontSize="13px";
            span.style.fontWeight="bold";

        }else{
            span.innerText="유효한 형식이 아닙니다.";
            span.style.color="red";
            span.style.fontSize="13px";
            span.style.fontWeight="bold";
        }

        //빈칸인지 검사
        //빈칸이라면 span에 작성된 내용 초기화(삭제)
        //(->이름을 쓰고 지웠을 때 처음 화면 처럼 보여야함)
        if(this.value.length==0){
            span.innerText=" ";
        }
    });
    document.getElementById("tel1").addEventListener("keyup", function(){
        //결과 출력용 span
        const span = document.getElementById("telResult");

        const regExp=/^[0-9]{4}$/;

        //유효성 검사 
        if(regExp.test(this.value)){
            //#inputName에 작성된 값이 유효한 경우
            span.innerText="유효한 형식입니다.";
            span.style.color="green";
            span.style.fontSize="13px";
            span.style.fontWeight="bold";

        }else{
            span.innerText="유효한 형식이 아닙니다.";
            span.style.color="red";
            span.style.fontSize="13px";
            span.style.fontWeight="bold";
        }

        //빈칸인지 검사
        //빈칸이라면 span에 작성된 내용 초기화(삭제)
        //(->이름을 쓰고 지웠을 때 처음 화면 처럼 보여야함)
        if(this.value.length==0){
            span.innerText=" ";
        }
    });
}