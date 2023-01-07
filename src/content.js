import { component , menuItem } from "./elements_Module";

function contentHome() {
    const homePage = component('content', 'homepage', ['page']),
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
    const menuPage = component('content', '', ['page']),
        headingBanner = component('img'),
        item1 = new menuItem('froot','9','tasty','./froot.jpg').exportHtml();
        

menuPage.appendChild(item1)
    menuPage.appendChild(headingBanner)

return menuPage
}

export { contentHome, contentMenu}