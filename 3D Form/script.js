const signUpBtn = document.querySelector(".signup-btn");
const signInBtn = document.querySelector(".signin-btn");

const formsWrapper = document.querySelector('.forms-wrapper')

signUpBtn.addEventListener("click", (e) => {
  e.preventDefault(  );
    formsWrapper.classList.add('change')
    console.log('first')

});

signInBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log('second')
  formsWrapper.classList.add('change')

});
