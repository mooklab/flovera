import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs'
import { phoneMask } from "./phone.js"
import { Quantity } from './quantity.js'


// Селекторы
const phoneInputs = document.querySelectorAll('input[type=tel]')
const quantities = document.querySelectorAll('div.quantity')
const swiperRecommendations = document.querySelector('section.recommendations div.swiper')
const paymentComment = document.querySelector('section.payment textarea')


new Swiper(swiperRecommendations, {
    slidesPerView: 2,
    spaceBetween: 20,
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        960: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1280: {
            slidesPerView: 6,
            spaceBetween: 30,
        }
    },
    on: {
        init: function () {
            this.el.classList.add('show')
        }
    }
})


// Автоувеличение textarea
paymentComment?.addEventListener('input', function () {
    this.style.height = 'auto'
    this.style.height = this.scrollHeight + 'px'
})

// Количество
quantities.forEach(quantity => {
    const input = quantity.querySelector('input')
    const minus = quantity.querySelector('div.minus')
    const plus = quantity.querySelector('div.plus')
    new Quantity(input, minus, plus)
})

// Маска телефона
phoneInputs.forEach(phoneInput => {
    ['input', 'blur', 'focus'].forEach(event => {
        phoneInput.addEventListener(event, phoneMask)
    })
})


