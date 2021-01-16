// функция контроля высоты блока main ---------------------------------------------------
export function setHeightMain() {
    const windowHeight = document.documentElement.clientHeight;
    const headerFooterHeight = document.querySelector('header').clientHeight + document.querySelector('footer').clientHeight + 2;
    document.querySelector('main').style.height = windowHeight - headerFooterHeight + 'px';
}
// функция контроля высоты блока main ---------------------------------------------------

// функция контроля высоты блока chat-choose ---------------------------------------------------
export function setHeightChat() {
    const colRightHeight = document.querySelector('.rightCol').clientHeight;
    const menuHeight = document.querySelector('nav').clientHeight;
    document.querySelector('.chat').style.height = colRightHeight - menuHeight + 'px';
}
// функция контроля высоты блока chat-choose ---------------------------------------------------

window.addEventListener(`resize`, ()=>{
    setHeightMain();
    setHeightChat();
});