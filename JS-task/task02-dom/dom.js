function changeOuterLinks() {
    const aElems = document.querySelectorAll('nav a');
    aElems.forEach( a => {
        if((''+a.innerText).includes('outer-link')){
            a.target = '_blank';
            a.innerHTML = `<strong>${a.innerHTML}</strong>`;
        }
    });

    const nav = document.querySelector('nav');
    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.margin = '0px auto';
    nav.style.width = '30%';
    nav.style.border = '1px solid blue';
    nav.style.padding = '16px';

}
changeOuterLinks();

export { changeOuterLinks };