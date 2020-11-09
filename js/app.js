// importing baguetteBox when the website load
window.addEventListener('load', function() {
    baguetteBox.run('.gallery');
});

// // Adding filter search when the website load
// window.addEventListener('load', function() {
//     const search = new Filter('search', 'data-caption');
// });

// creating sort filter (my version)

function searchResults() {
    // collecting all images from picture from the picture class
    const images = document.querySelectorAll('.picture');
    
    // getting the input from the text box and convert it to lowercase
    let input = document.getElementById('search');
    let filter = input.value.toLowerCase();

    // Loop through all the images and hide the picture that has no match.
    for( let i = 0; i < images.length; i++) {
        let dataCaption = images[i].getAttribute('data-caption');
        if(dataCaption.includes(filter)) {
            images[i].style.display = "";
        } else {
            images[i].style.display = 'none';
        }
    }
}