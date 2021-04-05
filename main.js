//Email on hover effect
var emailIcon = document.querySelector('.email')

emailIcon.addEventListener('mouseover', function() {
    emailIcon.src = './images/emailhover.png'
    })

emailIcon.addEventListener('mouseout', function() {
    emailIcon.src = './images/email.png'
    })

//Parallax
var bg = document.querySelector('#background');
var spirit = document.querySelector('#spirit');
var fg = document.querySelector('#foreground');
var text = document.querySelector('#text');

window.addEventListener('scroll', function() {
    var value = window.scrollY;

    bg.style.top = value * 0.15 + 'px';
    spirit.style.left = -value * 0.15 + 'px';
    fg.style.top = value * 0.15 + 'px';
    text.style.top = value * 1 + 'px';
})

//Trigger thank you message on send
var button = document.querySelector('button')
var connectForm = document.querySelector('form')
var letsConnectTitle = document.querySelector('#connect')

button.addEventListener('click', function() {
    letsConnectTitle.style.display = 'none'
    connectForm.innerHTML = `<p id="thank-you-message">Thanks for getting in touch! I'll get back to you as soon as I can.</p><br>`    
}) 

//Function to show lightbox on thumbnail click

var lightbox = document.querySelector('.lightbox')
// var clickWhalesOverlay = document.querySelector('#dusk-whales')
// var clickForestSpiritOverlay = document.querySelector('#overlay-forest-spirit')
var lightBoxImage = document.querySelector('.lightbox-image')
var closeBtn = document.querySelector('.close')
var nextBtn = document.querySelector('.next')
var prevBtn = document.querySelector('.prev')


// clickWhalesOverlay.addEventListener('click', function () {
//     lightbox.style.display = "block"
//     lightBoxImage.src = (`./images/${clickWhalesOverlay.id}.jpg`)
// })

// clickForestSpiritOverlay.addEventListener('click', function () {
//     lightbox.style.display = "block"
//     lightBoxImage.src = ('./images/Forest-Spirit_Alice-Cao.jpg')
// })


//function to close lightbox
//find the close button, on click, change display of lightbox.style to 'none'
closeBtn.addEventListener('click', function() {
    lightbox.style.display = "none"
})

nextBtn.addEventListener('click', function() {

})

//write eventlistener for prev slide if it works

// function setThumbnailOnClick(thumbnail) {
//     thumbnail.addEventListener('click', function() {
//         lightbox.style.display = "block"
//         lightBoxImage.src = (`./images/${thumbnail.id}.jpg`)
//     })
// }

// var thumbnailList = document.querySelectorAll('.overlay')

// for (var i = 0; i < thumbnailList.length; i++) {
//     setThumbnailOnClick(thumbnailList[i])
// }



// allOverlay.forEach(overlay => {
//     overlay.addEventListener('click', function() {
//         lightbox.style.display = "block"
//         lightBoxImage.src = (`./images/${overlay.id}.jpg`)
//     })
// })


// 1) We grab all images with class 'overlay' and add the same onclick event listener to them in a for loop
// 2) Each onclick event listener uses the id as the filename suffix like lightBoxImage.src = ('./images/' + overlayImage.id + '.jpg')
// 3) Each event listener sets a variable currentLightBoxImageIndex which is the index of the overlay array list of images
// 4) Add event listener to next and prev buttons to add 1 or minus 1 to that index (obviously if it goes below 0 it loops back to the last image and vice versa)

var thumbnailList = document.querySelectorAll('.overlay') //get array of images
var currentLightboxImageNumber; 

function setThumbnailOnClick(thumbnailNumber) {
    thumbnailList[thumbnailNumber].addEventListener('click', function() {
        currentLightboxImageNumber = thumbnailNumber
        showLightboxImage(currentLightboxImageNumber) 
        lightbox.style.display = "block" //show the image by changing default display of none to block
        lightBoxImage.src = (`./images/${thumbnailList[currentLightboxImageNumber].id}.jpg`)
    })
}

//function that grabs the currentImage
function showLightboxImage() {
    lightbox.style.display = "block" //show the image by changing default display of none to block
    lightBoxImage.src = (`./images/${thumbnailList[currentLightboxImageNumber].id}.jpg`)
}

for (var i = 0; i < thumbnailList.length; i++) {
    setThumbnailOnClick(i)
}








// nextBtn.addEventListener('click', function() {
//     currentLightboxImage = (currentLightboxImage + 1) % thumbnailList.length
//     showLightboxImage(currentLightboxImage)
// })

// prevBtn.addEventListener('click', function() {
//     currentLightboxImage = (currentLightboxImage - 1) % thumbnailList.length
//     showLightboxImage(currentLightboxImage)
// })