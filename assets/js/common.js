const $redirectionEl = document.querySelector(".redirection");

if($redirectionEl != null){
    window.location.href = $redirectionEl.textContent;
}