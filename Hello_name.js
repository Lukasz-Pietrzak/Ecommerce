
//Display text ,,Create new product" when user click on ,,Product'' section
let addCreateNewProductText = document.getElementById("Products");
addCreateNewProductText.addEventListener("click", function(){
    let newDiv = document.createElement('div');
    newDiv.id = "Products_div";

    let newSpan = document.createElement('span');
    newSpan.id = "Products_id";
    newSpan.innerHTML = "Create new product";
    newSpan.style.border = "2.5px solid #c4c3c3";
    newSpan.style.cursor = "pointer";
    newDiv.appendChild(newSpan);
    document.body.appendChild(newDiv);

function createInputBar(inputName, type) {

    inputName.type = type;
    // inputName.id = inputName;
    inputName.style.width = "600px";
    inputName.style.height = "55px";
    inputName.style.fontSize = "20px";
    inputName.style.textAlign = "center";
}


let addShowAllProductsText = document.getElementById("Products_id");
addShowAllProductsText.addEventListener("click", function(){
    addShowAllProductsText.innerHTML = "Show all products";
    addShowAllProductsText.style.pointerEvents = "none";
    let addProductDiv = document.createElement('div');
    addProductDiv.id = "addProductDiv";

    let Product_name = document.createElement('span');
    Product_name.id = "addProductSpan";
    Product_name.innerHTML = "Product name";
    Product_name.classList.add("addProductSpan");
    let form = document.createElement('form');
    let input = document.createElement('input');
    createInputBar(input, "text");


    let Description = document.createElement('span');
    Description.id = "Description";
    Description.innerHTML = "Description";
    Description.classList.add("addProductSpan");
    let form2 = document.createElement('form');
    let textarea = document.createElement('textarea');
textarea.name = 'message'; // Określanie nazwy pola

// Ustawianie liczby widocznych wierszy i kolumn
textarea.rows = 20;
textarea.cols = 80;
textarea.style.fontSize = "20px";
    // let input2 = document.createElement('input');
    // createInputBar(input2, "text2");


    let Base_price = document.createElement('span');
    Base_price.id = "Base_price";
    Base_price.innerHTML = "Base price";
    Base_price.classList.add("addProductSpan");
    let form3 = document.createElement('form');
    let input3 = document.createElement('input');
    createInputBar(input3, "text");


    let Sizes = document.createElement('span');
    Sizes.id = "Sizes";
    Sizes.innerHTML = "Sizes";
    Sizes.classList.add("addProductSpan");


    function createAddItemSize(name, id){
        name.id = id;
        name.innerHTML = "+ Add item size";
        name.classList.add("addProductSpan");
        name.style.border = "1px solid black";
        name.style.width = "300px";
        name.style.cursor = "pointer";
        name.style.position = "relative";
        name.style.left = "50%";
        name.style.transform = "translateX(-50%)";
    }

    let AddItemSize = document.createElement('span');
    createAddItemSize(AddItemSize, "Add_item_size");``

    let Extra_ingredients = document.createElement('span');
    Extra_ingredients.id = "Extra_ingredients";
    Extra_ingredients.innerHTML = "Extra ingredients";
    Extra_ingredients.classList.add("addProductSpan");


    function SaveDesign(saveName, width, fontSize){
        saveName.style.border = "1px solid black";
        saveName.style.cursor = "pointer";
        saveName.style.textAlign = "center";
        saveName.style.position = "relative";
        saveName.classList.add("addProductSpan");
        saveName.style.width = width;
        saveName.style.fontSize = fontSize;
        saveName.style.left = "50%";
        saveName.style.transform = "translateX(-50%)";
    }


    function CreateItemSize(formName, input1Name, input2Name, imageName, saveName, counterName, insertBeforeName){


        // input2Name.style.visibility = "hidden";

        saveName.style.visibility = "hidden";
        formName.style.height = "50px";
        input1Name.type = "text";
        input1Name.name = "input" + counterName;
        input1Name.placeholder = "Size name";
        input1Name.style.width = "250px";
        input1Name.style.height = "55px";
        formName.style.padding = "20px";
        input1Name.style.margin = "20px";
        // input1Name.style.visibility = "visible";
        input1Name.style.textAlign = "center";


        input2Name.type = "text";
        input2Name.placeholder = "Price";
        input2Name.style.width = "250px";
        input2Name.style.height = "55px";
        input2Name.name = "input2Name" + (counterName + 1);
        // input2Name.style.visibility = "visible";
        input2Name.style.textAlign = "center";


        imageName.src = "images/kosz.png";
        imageName.style.width = "50px";
        imageName.style.cursor = "pointer";



        saveName.style.visibility = "visible";
        saveName.innerHTML = "Save";
        


        SaveDesign(saveName, '55px', '18px');


        // imageName.style.display = "flex";
        
formName.style.display = "flex";
formName.style.justifyContent = "center";
formName.style.alignItems = "center"; // Align items vertically in the center


    addProductDiv.appendChild(formName);
    formName.appendChild(input1Name);

    formName.appendChild(input2Name);

    formName.appendChild(imageName);

    addProductDiv.appendChild(saveName);


        addProductDiv.insertBefore(formName, insertBeforeName);
        addProductDiv.insertBefore(saveName, insertBeforeName);
    


    }



    let counter = 4;
    let Save = document.createElement("span");
    AddItemSize.addEventListener("click", function(){
        let form4 = document.createElement('form');
        let input4 = document.createElement('input');
        let image = document.createElement('img');
    
        let input5 = document.createElement('input');
        CreateItemSize(form4, input4, input5, image, Save, counter, Extra_ingredients);
        console.log(counter);
        counter++;

        image.addEventListener("click", function() {
            console.log("dziala");
            counter--;
            form4.remove();
            if (counter < 5){
                Save.remove();
            }
            
        });

    });

    let counter2 = 6;
    let AddItemSize2 = document.createElement("span");
    createAddItemSize(AddItemSize2, "Add_Item_Size2");


    let Save2 = document.createElement("span");
    AddItemSize2.addEventListener("click", function() {
        let form6 = document.createElement('form');
        let input6 = document.createElement('input');
    
        let image2 = document.createElement('img');
        let input7 = document.createElement('input');

        CreateItemSize(form6, input6, input7, image2, Save2, counter2, SaveProduct);
        counter2++;

        image2.addEventListener("click", function() {
            console.log("dziala");
            counter2--;
            form6.remove();
            if (counter2 < 7){
                Save2.remove();
            }
            
        });

    });

    let SaveProduct = document.createElement('span');
    SaveProduct.innerHTML = "Save your product";
    // SaveDesign(SaveProduct, "30px", "18px");
    SaveProduct.style.height = "45px";
    SaveProduct.style.marginTop = "35px";
    // SaveProduct.style.whiteSpace = "nowrap";
    SaveProduct.style.border = "1px solid black";
    SaveProduct.style.width = "400px";
    SaveProduct.style.fontSize = "18px";
    SaveProduct.style.position = "relative";
    SaveProduct.style.left = "50%";
    SaveProduct.style.transform = "translateX(-50%)";
    SaveProduct.style.textAlign = "center";
    SaveProduct.style.cursor = "pointer";
    SaveProduct.style.padding = "10px";
    SaveProduct.style.borderRadius = "30px";
    SaveProduct.style.fontWeight = "bold";
    SaveProduct.style.display = "flex";
    SaveProduct.style.justifyContent = "center";
    SaveProduct.style.alignItems = "center";
    
    addProductDiv.appendChild(Product_name);
    addProductDiv.appendChild(form);
    form.appendChild(input);

    addProductDiv.appendChild(Description);
    addProductDiv.appendChild(form2);
    form2.appendChild(textarea);

    addProductDiv.appendChild(Base_price);
    addProductDiv.appendChild(form3);
    form3.appendChild(input3);

    addProductDiv.appendChild(Sizes);
    addProductDiv.appendChild(AddItemSize);



    addProductDiv.appendChild(Save);

    addProductDiv.appendChild(Extra_ingredients);
    addProductDiv.appendChild(AddItemSize2);
    addProductDiv.appendChild(Save2);

    addProductDiv.appendChild(SaveProduct);
    document.body.appendChild(addProductDiv);
});
});
