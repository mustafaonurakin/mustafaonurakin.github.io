$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 0, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

const wordContainer = document.querySelector('.clip');
const words = document.querySelectorAll('.word');
const aboutArea = document.querySelector('#about-area');
const sidebarAvatar = document.querySelector('.sidebar-avatar');
const sidebarAvatarSrc = sidebarAvatar.getAttribute('src');
/* */
let profileAbout = document.querySelector('.profile-about');
let profileAboutSrc = profileAbout.getAttribute('src');
let profileAboutClassList = profileAbout.getAttribute('class');

let i = 0;
/* */
wordContainer.style.transitionProperty = 'all';
wordContainer.style.transitionDuration = '1.0s';
wordContainer.style.transitionTimingFunction = 'cubic-bezier(0.3,-0.04, 0.32, 1.02)';


function toggleFlex() {

    if (this.style.flex == '0 1 0%') {

        this.style.flex = 1;
        i++;
        if (i >= words.length) {
            i = 0;
        }
        for (let x = 0; x < words.length; x++) {
            if (i == x) {
                words[x].classList.remove('word-invisible');
            }
            else {
                words[x].classList.add('word-invisible');
            }
        }
    } else {
        setTimeout(() => {
            this.style.flex = 0;
        }, 2000);

    }
}

setTimeout(() => {
    wordContainer.style.flex = 0;
}, 5000)

// function resizeEvents(e) {

//     // console.log(this.innerWidth);



// }

// function loadEvents() {

//     resizeEvents();

// }

// function resizeProfileAbout() {
//     /* window is between small and medium size right now */
//     /* add w-25 , rounded-circle and change img src */
//     if (this.innerWidth > 991){
//         profileAbout.classList.
//     }
//     if (this.innerWidth <= 991) {
//         profileAbout.classList.remove('max-vw-100');
//         profileAbout.classList.add('w-25');
//         profileAbout.classList.add('rounded-circle');
//         profileAbout.setAttribute('src', sidebarAvatarSrc);
//     }

// }

wordContainer.addEventListener('transitionend', toggleFlex);
window.addEventListener('resize', resizeEvents);
window.addEventListener('onload', loadEvents);
