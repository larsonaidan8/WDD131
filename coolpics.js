// Placeholder for future interactivity
console.log("Cool Pics JS loaded");
const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('hide');
});
function handleResize() {
    if (window.innerWidth > 1000) {
        menu.classList.remove('hide');
    } else {
        menu.classList.add('hide');
    }
}

window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);
function viewerTemplate(imagePath, altText) {
    return `
        <div class="viewer">
            <button class="close-viewer">X</button>
            <img src="${imagePath}" alt="${altText}">
        </div>
    `;
}
function viewHandler(event) {
    const clickedImage = event.target;
    const imageSrc = clickedImage.src.split('-')[0] + '-full.jpeg'; // Adjust based on your naming convention
    const htmlToInsert = viewerTemplate(imageSrc, clickedImage.alt);
    
    document.body.insertAdjacentHTML("afterbegin", htmlToInsert);
    
    // Close button functionality
    const closeButton = document.querySelector('.close-viewer');
    closeButton.addEventListener('click', closeViewer);
}
function closeViewer() {
    const viewer = document.querySelector('.viewer');
    viewer.remove();
}
const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', viewHandler);
