        // <div id="mainBanner">
        //     <div id="introduction">
        //         <h1>Immersive Food</h1>
        //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        //         <button>See Menu</button>
        //      </div>
        // </div>

const createMain = function () {
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = ''
    const intro = document.createElement('div');
    intro.classList.add('introduction');
    const introH1 = document.createElement('h1')
    const introP = document.createElement('p')
    const introButton = document.createElement('button')
    introButton.textContent = 'See Menu'

    intro.append(introH1, introP, introButton)
    contentContainer.appendChild(intro)
}

export { createMain };