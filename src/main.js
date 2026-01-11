const contentContainer = document.querySelector('#content');

const createMain = function () {
    contentContainer.innerHTML = ''
    contentContainer.classList.add("bg-default");
    document.body.classList.add("no-scroll");    // disable scroll
    
    const content = document.createElement('div')
    content.classList.add("content");
    const intro = document.createElement('div');
    intro.id = 'introduction';
    const introH1 = document.createElement('h1')
    introH1.textContent = 'Immersive Food'
    introH1.classList.add('funkyFont')
    introH1.id = 'immersiveH1'
    const introP = document.createElement('p')
    introP.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    const introButton = document.createElement('button')
    introButton.textContent = 'See Menu'
    introButton.id = 'introBtn'
    intro.append(introH1, introP, introButton)
    content.appendChild(intro)
    contentContainer.appendChild(content)
}


const createMenu = function () {
    class food {
        constructor(name, description){
            this.name = name
            this.description = description
        }
    }
    document.body.classList.remove("no-scroll");    // disable scroll
    contentContainer.innerHTML = ''
    const menuContainer = document.createElement('div')
    menuContainer.classList.add('menuContainer')
    const menuH1 = document.createElement('h1');
    menuH1.id = 'menuH1';
    menuH1.textContent = "Menu"
    menuContainer.appendChild(menuH1)
    contentContainer.appendChild(menuContainer)
    const menuContain = document.querySelector('.menuContainer')

    const item1 = new food('Lasagna','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore')
    const item2 = new food('Bento Box','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore')
    const item3 = new food('Baked Mac and Cheese','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore')
    const item4 = new food('Teriyaki','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore')
    const item5 = new food('Grilled Chicken','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore')
    const items = [item1,item2,item3,item4,item5];

    function createItem(item) {
        const card = document.createElement('div');
        card.classList.add('item');
        const cardH1 = document.createElement('h1');
        cardH1.textContent = `${item.name}`
        const cardP = document.createElement('p');
        cardP.textContent = `${item.description}`;
        card.append(cardH1, cardP)
        menuContain.appendChild(card)
    }

    for (let i=0; i < items.length; i++){
        createItem(items[i])
    }
}

const createAbout = function () {
    contentContainer.innerHTML = ''

}

        // <div id="aboutUs">
        //     <h1>About Us</h1>
        // </div>
        // <div id="aboutUsBlack">
        //     <h1>Our Story</h1>
        //     <p>Lorem ipsum</p>
        //     <div id="aboutUsBlackImg">
        //     </div>
        // </div>

export { createMain, createMenu, createAbout};