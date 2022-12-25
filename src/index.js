function component(){
    let element = document.createElement('div');


    element.innerText = 'test'

    return element
}

document.body.appendChild(component())