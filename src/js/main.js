// Main.js
let anchor = document.querySelectorAll('a')
let popup = document.querySelectorAll('.modal-toggle')

// Bind events
for (let i = 0; i < anchor.length; i++) {
    anchor[i].addEventListener('click', function(event) {
        handleClick(event)
    })
}

for (let i = 0; i < popup.length; i++) {
    popup[i].addEventListener('click', function(event) {
        togglePopup(event.target.getAttribute('src'))
    })
}

// handle Click
function handleClick(e) {
    e.preventdefault()
    console.log(e.target)
}

// Toggle Popup images
function togglePopup(src) {
    let modal = document.getElementById('modal')
    modal.classList.toggle('open')

    if (src) {
        let img = modal.querySelector('img')
        img.setAttribute('src', src)
    }
}
