let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark'){
        document.body.className = 'dark';
        logo.setAttribute("src", "images/byui-logo_white.png");
        logo.setAttribute("alt", "BYUI Logo White");
        // change body to dark
        // change logo to the new logo
    } 
    else {
        document.body.className = 'light';
        logo.setAttribute("src", "images/byui_logo.png");
        logo.setAttribute("alt", "BYU-Idaho Logo");
        // remove dark class from 
        //change logo back to original logo
    }
}