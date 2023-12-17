// 입력창
const $emailInput = document.querySelector("#userEmail");
const $passwordInput = document.querySelector("#userPassword");
let $inputWrapDiv = document.querySelectorAll(".sign-input-wrap");
let $signInput = document.querySelectorAll("input");

// 에러 메세지
let errorMessageEmail = document.createElement("span");
let errorMessagePassword = document.createElement("span");

// 일괄로 클래스를 지정하고 싶었으나, 함수를 만들기엔 너무 짧은 애들이라 고민... 방법이 없을까?
errorMessageEmail.classList.add("error-message");
errorMessagePassword.classList.add("error-message");

// 유효성
const emailPattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
const passwordPattern = /(?=.*[0-9])(?=.*[A-Za-z])^.{8,}$/;

// 값 비어있음
function inputValueEmpty(){
  if(this === $emailInput){
    if(this.value.trim() === ""){
      this.classList.add("input-error");
      errorMessageEmail.textContent = "이메일을 입력해주세요.";
    }
    this.parentElement.append(errorMessageEmail);
  }
  
  if(this === $passwordInput){
    console.log("패스워드 아웃");
    if(this.value.trim() === ""){
      this.classList.add("input-error");
      errorMessagePassword.textContent = "비밀번호를 입력해주세요";
    } 
    this.parentElement.append(errorMessagePassword);
  }
}

// 남겨두면 좋을것같아서... 공통으로도 지정해봤으나 이벤트 타겟 or 디스가 제대로 안찍혔음.
// let test = document.querySelector("form");
// test.addEventListener("focusout", inputValueEmpty);

for (let i = 0; i < $signInput.length; i++){
  $signInput[i].addEventListener("focusout", inputValueEmpty);
}
