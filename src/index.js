import { component } from './elements_Module';
import {header} from './header'
import './style.css'
//psuedo
//init, imports original page, header, main content etc
//add event listener to header buttons that clear the page then imports modules that contain that button's content
//import that page's contents after clearing
const mainContent = component('div', 'content'),
    headerDiv = header(),
    footer = component('footer');
document.body.appendChild(headerDiv)
document.body.appendChild(mainContent)
document.body.appendChild(footer)
mainContent.innerText = 'content'
footer.innerText = 'footer'