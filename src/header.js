import { component } from './elements_Module.js';
export function header() {
    const headerDiv = component('header'),
        home = component('button', 'home'),
        menu = component('button', 'menu', ['hidden']),
        contact = component('button', 'contact', ['hidden']),
        childElements = [home, menu, contact],
        headerButtonBox = component('div'),
        bannerLogo = component('img');

    //banner
    bannerLogo.src = "bannerLogo"
    //buttons
    childElements[0].innerText = 'Home';
    childElements[1].innerText = 'Menu';
    childElements[2].innerText = 'Contact';

    childElements.forEach(child => {
        //maybe remove the event listener and handle it after content is imported to index, or have it call a function that will change up the pages
        child.addEventListener('click', function (event) { this.classList.toggle('hidden') })
        headerButtonBox.appendChild(child);
    });
    headerDiv.appendChild(bannerLogo)
    headerDiv.appendChild(headerButtonBox)
    return headerDiv
}