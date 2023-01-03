import { component } from './elements_Module.js';
export function header() {
    const headerDiv = component('header'),
        home = component('div', 'home'),
        menu = component('div', 'menu', ['hidden']),
        contact = component('div', 'contact', ['hidden']),
        childElements = [home, menu, contact];

    childElements[0].innerText = 'Home';
    childElements[1].innerText = 'Menu';
    childElements[2].innerText = 'Contact';

    childElements.forEach(child => {
        headerDiv.appendChild(child);
    });
    return headerDiv
}