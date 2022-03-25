const h1 = document.getElementById('counter');
const body = document.getElementsByTagName('body');

const testJs = () => {
    h1.classList.add('text-red-700');
    const h2 = document.createElement('h2');
    h2.innerHTML = 'Hello World'
    body.appendChild(h2)

}

testJs()