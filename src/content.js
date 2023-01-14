import { component , menuItem } from "./elements_Module";

function contentHome() {
    const homePage = component('div', '', ['page']),
        headingBanner = component('img'),
        pageDesc = component('div', '', ['contentBox']),
        storeHours = component('div', '', ['contentBox']),
        storeLocations = component('div', '', ['contentBox']);

    headingBanner.src = 'homeBanner'

    pageDesc.innerText = 'description of the store'
    storeHours.innerText = 'Mon - Fri: Yes \n Sat - Sun: No'
    storeLocations.innerText = 'Place \n Area \n Yes'

    homePage.appendChild(headingBanner)
    homePage.appendChild(pageDesc)
    homePage.appendChild(storeHours)
    homePage.appendChild(storeLocations)

    return homePage
}

function contentMenu() {
    const menuPage = component('div', '', ['page']),
        headingBanner = component('img'),
        item1 = new menuItem('froot','$9','tasty froot','./froot.jpg'),
        item2 = new menuItem('bread', '$5', 'its buhred!','./bread.jpg');
        


        menuPage.appendChild(headingBanner)
        menuPage.appendChild(item1.exportHtml())
        menuPage.appendChild(item2.exportHtml())

return menuPage
}
function contentContacts(){
    const contactsPage = component('div','',['page']),
    headingBanner = component('img'),
    contact1 = new menuItem('Prinny','','super brave hero \n (123) 456-7890');



    contactsPage.appendChild(headingBanner)
    contactsPage.appendChild(contact1.exportHtml())
    return contactsPage
}


export { contentHome, contentMenu, contentContacts }