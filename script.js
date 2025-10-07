let element5Clicked = false;
let element6Clicked = false;

const element5 = document.getElementById('element5');
element5.classList.add('clickable');
element5.addEventListener('click', function() {
    if (!element5Clicked) {
        this.style.backgroundColor = '#FFD700';
        this.style.color = '#8B0000';
        element5Clicked = true;
    } else {
        this.style.backgroundColor = '#87CEEB';
        this.style.color = '#000080';
        element5Clicked = false;
    }
});

const element6 = document.querySelector('.element6');
element6.classList.add('clickable');
element6.addEventListener('click', function() {
    if (!element6Clicked) {
        this.style.backgroundColor = '#FF69B4';
        this.style.color = '#FFFFFF';
        element6Clicked = true;
    } else {
        this.style.backgroundColor = '#98FB98';
        this.style.color = '#006400';
        element6Clicked = false;
    }
});

let imageWidth = 600;
const imageContainer = document.getElementById('imageContainer');

function addImage() {
    const mainImg = document.getElementById('cityImage');
    const newLink = document.createElement('a');
    newLink.href = 'https://kyivcity.gov.ua/';
    const newImg = document.createElement('img');
    newImg.src = mainImg.src;
    newImg.alt = mainImg.alt;
    newImg.style.maxWidth = imageWidth + 'px';
    newLink.appendChild(newImg);
    imageContainer.appendChild(newLink);
}

function increaseImage() {
    imageWidth += 50;
    const allImages = imageContainer.querySelectorAll('img');
    if (allImages.length > 0) {
        allImages[allImages.length - 1].style.maxWidth = imageWidth + 'px';
    }
}

function decreaseImage() {
    if (imageWidth > 100) {
        imageWidth -= 50;
        const allImages = imageContainer.querySelectorAll('img');
        if (allImages.length > 0) {
            allImages[allImages.length - 1].style.maxWidth = imageWidth + 'px';
        }
    }
}

function deleteImage() {
    const allImages = imageContainer.querySelectorAll('img');
    if (allImages.length > 1) {
        allImages[allImages.length - 1].remove();
    } else if (allImages.length === 1) {
        allImages[0].style.display = 'none';
    }
}