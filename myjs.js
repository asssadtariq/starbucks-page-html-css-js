
function changePicture(pic_number) {
    var image = document.getElementById('main-images')
    image.innerHTML = `
       <img src="images/img${pic_number}.png" alt="" />
    `
}