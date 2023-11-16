
export default class TextGenerator {
    constructor(elementID, className, text) {
        this.className = className;
        this.text = text;
        this.elementID = elementID;
    }

    generateText() {
            const element = document.getElementById(this.elementID + i);
            if (element) {
                element.innerHTML = `<span class='${this.className}'> ${this.text}</span>`;
            } else {
                console.error("Element with id 'image" + i + "' not found.");
            }
        
    }
}
