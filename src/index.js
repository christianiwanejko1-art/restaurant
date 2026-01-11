import { createMain, createMenu, createAbout } from "./main.js"
import "./style.css"

let homeBtn = document.getElementById('home')
let menuBtn = document.getElementById('menu')
let aboutBtn = document.getElementById('about')
let content = document.getElementById('content')


document.addEventListener('DOMContentLoaded', () => {
    createMain()
    content.classList.add("bg-default");
})


homeBtn.addEventListener('click', () => {
    createMain()
    content.classList.add("bg-default");
    // content2.classList.add("content");
    
})


menuBtn.addEventListener('click', () => {        
    createMenu()
    content.classList.remove("bg-default");
    // content.classList.remove("bg-default");
})

aboutBtn.addEventListener('click', () => {        
    createAbout()
    content.classList.remove("bg-default");
})
