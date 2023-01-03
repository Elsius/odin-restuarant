export function component(element, id, classesArray) {
    let elementObject = document.createElement(element);

    if (id != undefined) {
        elementObject.setAttribute('id', id)
    }
    if (classesArray != undefined){
        elementObject.classList.add(...classesArray)
    }
    return elementObject
}