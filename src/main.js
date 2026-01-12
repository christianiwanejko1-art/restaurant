const contentContainer = document.querySelector('.content');

const createMain = function () {
    contentContainer.innerHTML = ' '
    contentContainer.classList.remove('alternativeL')
    document.body.classList.add("no-scroll");    // disable scroll
    contentContainer.classList.add("bg-default");
    contentContainer.classList.add("content");
    contentContainer.innerHTML = ''
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
    introButton.addEventListener('click', () => {
        createMain()
    })
    intro.append(introH1, introP, introButton)
    contentContainer.appendChild(intro)
}

        // <div id="menuContainer">
        //     <h1>Our Menu</h1>
        //     <div class="item">
        //         <h2>Garden Salad</h2>
        //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
        //     </div>
        //     <div class="item">
        //         <h2>Lasagna</h2>
        //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
        //     </div>
        //     <div class="item">
        //         <h2>Bento Box</h2>
        //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
        //     </div>
        //     <div class="item">
        //         <h2>Baked Mac and Cheese</h2>
        //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
        //     </div>
        //     <div class="item">
        //         <h2>Teriyaki</h2>
        //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
        //     </div>
        // </div>



const createMenu = function () {
    class food {
        constructor(name, description){
            this.name = name
            this.description = description
        }
    }  
const content = document.querySelector('.content');
    document.body.classList.remove("no-scroll");    // disable scroll
    content.classList.add('alternativeL')
    const content2 = document.querySelector('.alternativeL');
    content2.innerHTML = ''
    content2.classList.remove('content')
    const div = document.createElement('div')
    div.id = 'menuContainer'
    const menuH1 = document.createElement('h1');
    menuH1.id = 'menuH1';
    menuH1.textContent = "Menu"
    content2.appendChild(menuH1);
    const item1 = new food('Lasagna','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore')
    const item2 = new food('Bento Box','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore')
    const item3 = new food('Baked Mac and Cheese','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore')
    const item4 = new food('Teriyaki','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore')
    const items = [item1,item2,item3,item4];

    function createItem(item) {
        const card = document.createElement('div');
        card.classList.add('item');
        const cardH1 = document.createElement('h1');
        cardH1.textContent = `${item.name}`
        const cardP = document.createElement('p');
        cardP.textContent = `${item.description}`;
        card.append(cardH1, cardP)
        div.appendChild(card)
        content2.appendChild(div)
    }

    for (let i=0; i < items.length; i++){
        createItem(items[i])
    }
    
}

const createAbout = function () {
    
}

export { createMain, createMenu, createAbout};