import { createMain, createMenu } from "./main.js"
import "./style.css"

let homeBtn = document.getElementById('home')
let menuBtn = document.getElementById('menu')

document.addEventListener('DOMContentLoaded', () => {
    content.classList.add("bg-default");
    createMain()
})


homeBtn.addEventListener('click', () => {
    createMain()
    content.classList.add("bg-default");
    content.classList.remove('alternativeL')
})


menuBtn.addEventListener('click', () => {
    content.classList.remove("bg-default");
    content.classList.add('alternativeL')

    createMenu()
})