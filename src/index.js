console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded',() => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
    .then(response => response.json())

})

function createImgElement(imgUrl){
    forEach(imgUrl){    
    let img = document.createElement('img');
    img.src = imgUrl;
    document.bod
    }
}