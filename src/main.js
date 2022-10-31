let menuIcon = document.querySelector(".menu");
let closeIcon = document.querySelector(".close");
let nav = document.querySelector(".mob-nav");
let overlay = document.querySelector(".overlay");
let body = document.getElementsByTagName("BODY")[0];

menuIcon.addEventListener('click', () => {
    menuIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
    nav.classList.remove('hidden');
    overlay.classList.remove('hidden');
    body.style.position = "fixed";
});

closeIcon.addEventListener('click', () => {
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
    nav.classList.add('hidden');
    overlay.classList.add('hidden');
    body.style.position = "static";
});

// Form Validation

let form = document.querySelector("#form");
let urlInput = document.querySelector("#link");
let submitInput = document.querySelector("#submit");
let result = document.querySelector(".result");


form.addEventListener('submit', (e) => {
    let msgs = []
    
    let err = document.querySelector("#error"); 

    if (urlInput.value === "" || urlInput.vale == null) {
        msgs.push('Error');
        err.classList.remove("hidden");
    }
    
    if (urlInput.value.length > 0){
        err.classList.add("hidden");
    }

    if (msgs.length > 0) {
        e.preventDefault()
    }

    e.preventDefault();
    const url = urlInput.value;

    shortenUrl(url);
});

async function shortenUrl(url) {
    try {
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
        const data = await res.json();
        const newUrl = document.createElement("div");
        newUrl.classList.add("item");
        newUrl.innerHTML = `
        <p> ${data.result.short_link}</p>
        <button class="btn newUrl-btn" >Copy</button>
        `;
        result.prepend(newUrl);
        const copyBtn = result.querySelector(".newUrl-btn");
        copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(copyBtn.previousElementSibling.textContent);
    });
        input.value = "";
    } catch (err) {
        console.log(err);
    }
}