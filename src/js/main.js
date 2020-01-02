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
    //console log all anchor clicks + prevent default refresh
    e.preventdefault()
    console.log(e.target)
}

// Toggle Popup images
function togglePopup(src) {
    // toggles Modal class open
    let modal = document.getElementById('modal')
    modal.classList.toggle('open')

    // loads dynamically preloaded image src for DRYness
    if (src) {
        let img = modal.querySelector('img')
        img.setAttribute('src', src)
    }
}

//TODO: Prevent function exposure if requried
