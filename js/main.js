'use strict';

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');
} else {
    document.body.classList.add('_pc');
}

/*=============== Burger Menu ===============*/
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

let getInTouchRow = document.querySelector('.getintouch__row');
let getInTouchBlock = document.querySelectorAll('.block-getintouch');

if (document.documentElement.clientWidth > 991.98) {
    let currentElem = getInTouchBlock[1];
    currentElem.classList.toggle('active');

    getInTouchRow.onmouseover = function (event) {
        if (currentElem) return;

        let target = event.target.closest('.block-getintouch');

        if (!getInTouchRow.contains(target)) return;

        currentElem = target;
        target.classList.toggle('active');
    };


    getInTouchRow.onmouseout = function (event) {
        if (!currentElem) return;

        let relatedTarget = event.relatedTarget;

        while (relatedTarget) {
            if (relatedTarget == currentElem) return;

            relatedTarget = relatedTarget.parentNode;
        }

        currentElem.classList.remove('active');
        currentElem = null;
    };
} else {
    let currentElem = null;

    getInTouchRow.onmouseover = function (event) {
        if (currentElem) return;

        let target = event.target.closest('.block-getintouch');

        if (!getInTouchRow.contains(target)) return;

        currentElem = target;
        target.classList.toggle('active');
    };


    getInTouchRow.onmouseout = function (event) {
        if (!currentElem) return;

        let relatedTarget = event.relatedTarget;

        while (relatedTarget) {
            if (relatedTarget == currentElem) return;

            relatedTarget = relatedTarget.parentNode;
        }

        currentElem.classList.remove('active');
        currentElem = null;
    };
};

/*=============== ACCORDION ===============*/
const Column = document.querySelectorAll('.column')

Column.forEach((item) => {
    const footerHeader = item.querySelector('.column__header')

    footerHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.column-open')

        toggleItem(item)

        if (openItem && openItem !== item) {
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) => {
    const columnList = item.querySelector('.column__list')

    if (item.classList.contains('column-open')) {
        columnList.removeAttribute('style')
        item.classList.remove('column-open')
    } else {
        columnList.style.height = columnList.scrollHeight + 'px'
        item.classList.add('column-open')
    }
}