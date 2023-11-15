
export default class ImageGenerator {
    constructor(imageNumber, className, image, ImageType) {
        this.className = className;
        this.image = image;
        this.ImageType = ImageType;
        this.imageNumber = imageNumber;
    }

    generateImage() {
        for (let i = 0; i <= this.imageNumber; i++) {
            const element = document.getElementById("image" + i);
            if (element) {
                element.innerHTML = `<img class='${this.className}' src='${this.image}${i}.${this.ImageType}' alt='Description of the image'>`;
            } else {
                console.error("Element with id 'image" + i + "' not found.");
            }
        }
    }
}
