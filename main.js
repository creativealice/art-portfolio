//Email on hover effect
var emailIcon = document.querySelector('.email')

emailIcon.addEventListener('mouseover', function() {
    emailIcon.src = './images/emailhover.png'
    })

emailIcon.addEventListener('mouseout', function() {
    emailIcon.src = './images/email.png'
    })

//Parallax
var title = document.querySelector('#title');

window.addEventListener('scroll', function() {
    var bg = document.querySelector('#background');
    var spirit = document.querySelector('#spirit');
    var fg = document.querySelector('#foreground');
    var value = window.scrollY;

    bg.style.top = value * 0.15 + 'px';
    spirit.style.left = -value * 0.15 + 'px';
    fg.style.top = value * 0.15 + 'px';
    title.style.top = value * 1 + 'px';
})

//Title on hover effect
title.addEventListener('mouseover', function() {
    title.classList.add('text-shadow-pop-right');
    })

title.addEventListener('mouseout', function() {
    title.classList.remove('text-shadow-pop-right');
    })

//Trigger thank you message on send

var button = document.querySelector('button')
button.addEventListener('click', function() {
    var connectForm = document.querySelector('form')
    var letsConnectTitle = document.querySelector('#connect')

    letsConnectTitle.style.display = 'none'
    connectForm.innerHTML = `<p id="thank-you-message">Thanks for getting in touch! I'll get back to you as soon as I can.</p><br>`    
}) 

//Function to close lightbox

//find the close button, on click, change display of lightbox.style to 'none'
var closeBtn = document.querySelector('.close')

closeBtn.addEventListener('click', function() {
    lightbox.style.display = "none"
})

//Function to show relevant lightbox slide image on thumbnail click

var lightbox = document.querySelector('.lightbox')
var lightBoxImage = document.querySelector('.lightbox-image')


function setThumbnailOnClick(thumbnail) {
    thumbnail.addEventListener('click', function() {

//Makes lightbox visible
        lightbox.style.display = "block"

//Changes image to dynamic source URL based on the clicked thumbnail's number and thus ID. All images were named the same as the ID allowing this.
        lightBoxImage.src = (`./images/${thumbnail.id}.jpg`)
    })
}

//get array of images
var thumbnailList = document.querySelectorAll('.overlay')

//for loop which goes through each array item and performs the function to get the assigned number of the item to use in the function setThumbnailOnClick
for (var i = 0; i < thumbnailList.length; i++) {
    setThumbnailOnClick(thumbnailList[i])
}