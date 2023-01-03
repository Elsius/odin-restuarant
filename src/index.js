function component(element, id) {
    let elementObject = document.createElement(element);

    if (id != undefined) {
        elementObject.setAttribute('id', id)
    }
    return elementObject
}
import './style.css';
//psuedo
//init, imports original page, header, main content etc
//add event listener to header buttons that clear the page then imports modules that contain that button's content
//import that page's contents after clearing
const mainContent = component('div', 'content'),
    header = component('header'),
    footer = component('footer');
document.body.appendChild(header)
document.body.appendChild(mainContent)
document.body.appendChild(footer)
header.innerText = 'header'
mainContent.innerText = 'content'
footer.innerText = 'footer'