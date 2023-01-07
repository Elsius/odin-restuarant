function component(element, id, classesArray) {
    let elementObject = document.createElement(element);

    if (id != undefined) {
        elementObject.setAttribute('id', id)
    }
    if (classesArray != undefined) {
        elementObject.classList.add(...classesArray)
    }
    return elementObject
}
function menuTemplate() {
    //creates a div with menu item, desc, price, picture
    const outerDiv = component('div', '', ['contentBox']),
        itemWithPrice = component('div'),
        itemDesc = component('item'),
        itemPic = component('img');


    outerDiv.appendChild(itemWithPrice)
    outerDiv.appendChild(itemDesc)
    outerDiv.appendChild(itemPic)
    return outerDiv
}

class menuItem {
    constructor(name,price,desc,imgsrc) {
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

    itemWithPrice.appendChild(itemName)
    itemWithPrice.appendChild(itemPrice)
    itemName.innerText = this.name
    itemPrice.innerText = `\$${this.price}`
    itemDesc.innerText = this.desc
    itemPic.src = this.imgsrc

    outerDiv.appendChild(itemWithPrice)
    outerDiv.appendChild(itemDesc)
    outerDiv.appendChild(itemPic)
    return outerDiv
}
}

export { component, menuTemplate, menuItem }
//expand this to create div sections?