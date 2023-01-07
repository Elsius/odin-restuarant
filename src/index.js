import { component } from './elements_Module';
import './style.css'
import {header} from './header'
import { contentHome, contentMenu } from './content';
//psuedo
//init, imports original page, header, main content etc
//add event listener to header buttons that clear the page then imports modules that contain that button's content
//import that page's contents after clearing
const mainContent = contentMenu(),
    headerDiv = header(),
    footer = component('footer');
document.body.appendChild(headerDiv)
document.body.appendChild(mainContent)
document.body.appendChild(footer)
footer.innerText = 'footer'