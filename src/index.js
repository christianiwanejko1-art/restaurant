import { createMain, createMenu } from "./main.js"
import "./style.css"

let homeBtn = document.getElementById('home')
let menuBtn = document.getElementById('menu')
const content = document.querySelector('.content');
const content2 = document.querySelector('.alternativeL');


document.addEventListener('DOMContentLoaded', () => {
    createMain()
    // content.classList.add("bg-default");
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