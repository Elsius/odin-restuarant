import { component } from './elements_Module';
import './style.css'
import { header } from './header'
import { contentHome, contentMenu, contentContacts } from './content';
//psuedo
//init, imports original page, header, main content etc
//add event listener to header buttons that clear the page then imports modules that contain that button's content
//import that page's contents after clearing

//build initial page
document.body.appendChild(header())
document.body.appendChild(document.createElement('content'))
document.body.appendChild(component('footer'))

const content = document.getElementsByTagName('content')[0],
    navHome = document.getElementById('home'),
    navMenu = document.getElementById('menu'),
    navContact = document.getElementById('contact'),
    footer = document.getElementsByTagName('footer')[0];
content.appendChild(contentHome())
footer.innerText = 'footer'

//header functionality
function changePage(page) {
    content.innerText = ''
    content.appendChild(page())
}
navHome.addEventListener('click', () => changePage(contentHome))
navMenu.addEventListener('click', () => changePage(contentMenu))
navContact.addEventListener('click', () => changePage(contentContacts))


