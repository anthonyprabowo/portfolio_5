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
    let input = document.getElementById('search');
    let filter = input.value;

    for(let i = 1; i <= 12; i++) {
        let dataCaption = document.querySelector(".picture").data-caption;
        if(!dataCaption.include(filter)) {
            document.getElementById(`picture-${i}`).style.display = "none";
        }
    }
}