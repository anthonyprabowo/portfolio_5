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
    const images = document.querySelectorAll('.picture');
    let input = document.getElementById('search');
    let filter = input.value.toLowerCase();
    for( let i = 0; i < images.length; i++) {
        let dataCaption = images[i].getAttribute('data-caption');
        if(dataCaption.includes(filter)) {
            images[i].style.display = "";
        } else {
            images[i].style.display = 'none';
        }
    }
}