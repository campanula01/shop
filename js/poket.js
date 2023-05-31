function count(type)  {
    // 결과를 표시할 element
    const resultElement = document.getElementById('result');
    
    // 현재 화면에 표시된 값
    let number = resultElement.innerText;
    
    // 더하기/빼기
    if(type === 'plus') {
      number = parseInt(number) + 1;
    }else if(type === 'minus')  {
      number = parseInt(number) - 1;
    }
    resultElement.innerText = number;
}
   
    function checkSelectAll()  {
        // 전체 체크박스
        const checkboxes 
          = document.querySelectorAll('input[name="box"]');
        // 선택된 체크박스
        const checked 
          = document.querySelectorAll('input[name="box"]:checked');
        // select all 체크박스
        const selectAll 
          = document.querySelector('input[name="main-box"]');
        
        if(checkboxes.length === checked.length)  {
          selectAll.checked = true;
        }else {
          selectAll.checked = false;
        }
      
      }
      
      function selectAll(selectAll)  {
        const checkboxes 
           = document.getElementsByName('box');
        
        checkboxes.forEach((checkbox) => {
          checkbox.checked = selectAll.checked
        })
    }
