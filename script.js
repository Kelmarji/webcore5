const expander = document.getElementById('expand');
const itemsTabletHide = document.querySelectorAll('.tablet--hide')
let expanderText = document.querySelector('.content__expand--text')
const expanderPic = document.querySelector('.expander__img--rotate')
console.log(itemsTabletHide)
console.log(expander)
console.log(expander.textContent)

expander.addEventListener('click', function() {
    for (let i = 0; i < itemsTabletHide.length;i++) {
        let item = itemsTabletHide[i]
        item.classList.toggle('tablet--hide')
    }
    if (expanderText.textContent === 'Скрыть') {
        expanderText.textContent = 'Показать всё';
    } else {
        expanderText.textContent = 'Скрыть'; 
    }
    expanderPic.classList.toggle('expander__img--rotate')
});
        

