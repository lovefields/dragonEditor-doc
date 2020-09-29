const $redirectionEl = document.querySelector(".js-redirection");

if ($redirectionEl != null) {
    window.location.href = $redirectionEl.textContent;
}

const $openTarget = document.querySelectorAll(".js-open-target");

$openTarget.forEach(function ($el) {
    $el.addEventListener("click", function () {
        let targetName = this.dataset["target"];
        let $targetEl = document.querySelector(targetName);

        $targetEl.classList.toggle("--act");
    });
});

const $changeLnag = document.querySelectorAll(".js-change-lang");

$changeLnag.forEach(function ($el) {
    $el.addEventListener("click", function () {
        let url = window.location.href;
        let lang = this.textContent;

        window.location.href = url.replace(/\/(en|ko)\//g, "/" + lang+ "/");
    });
});
