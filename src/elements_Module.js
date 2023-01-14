//psuedo
//we will initialize the page on index, then when clicking a button there, it clears the <content> element
//after clearing, create new object filled with page details
//export object info to html and append it to <content>



//this is currently poorly written. It could be redone by passing an object instead so
//we can properly skip arguments in the component function
function component(element, id, classesArray) { 
let elementObject = document.createElement(element);

    if (id != undefined && id != '') {
        elementObject.setAttribute('id', id)
    }
    if (classesArray != undefined) {
        elementObject.classList.add(...classesArray)
    }
    return elementObject
}

class menuItem {
    constructor(name, price = '', desc, imgsrc) {
        this.name = name
        this.price = price
        this.desc = desc
        this.img = imgsrc
    }
    //compile the data into an html element
    exportHtml() {
        const outerDiv = component('div', '', ['contentBox']),
            itemWithPrice = component('div', '', ['itemhead']),
            itemName = component('div'),
            itemPrice = component('div'),
            itemDesc = component('item'),
            itemPic = component('img');

        itemName.innerText = this.name
        itemPrice.innerText = this.price
        itemDesc.innerText = this.desc
        itemPic.src = this.imgsrc
        itemWithPrice.appendChild(itemName)
        if (itemPrice.innerText != '') {
            itemWithPrice.appendChild(itemPrice)
        }
        outerDiv.appendChild(itemWithPrice)
        outerDiv.appendChild(itemDesc)
        outerDiv.appendChild(itemPic)
        return outerDiv
    }
}

export { component, menuItem }
//expand this to create div sections?