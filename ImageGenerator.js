

// import { numSpans } from './index.html';

export default class ImageGenerator {
    constructor(className, image, ImageType) {
        this.className = className;
        this.image = image;
        this.ImageType = ImageType;
    }

    generateImage() {
        for (let i = 0; i <= numSpans; i++) {
            const element = document.getElementById("image" + i);
            if (element) {
                element.innerHTML = `<img class='${this.className}' src='${this.image}${i}.${this.ImageType}' alt='Description of the image'>`;
            } else {
                console.error("Element with id 'image" + i + "' not found.");
            }
        }
    }
}
