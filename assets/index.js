const h1 = document.getElementById('wordCount');
const body = document.getElementsByTagName('body');
const button = document.querySelector('.button');
let counterWorker = new Worker(URL.createObjectURL(new Blob(["("+workerFunction.toString()+")()"], {type: 'text/javascript'})));


const testJs = () => {
    h1.setAttribute('class','text-red-700');
    // const h2 = document.createElement('h2');
    // h2.innerHTML = 'Hello World'
    // body.appendChild(h2)


}
let num = 10
button.addEventListener('click', () => {
    counterWorker.postMessage(num);
    console.log('clicked')
})
counterWorker.onmessage = ({data}) => {
    const response = data;
    console.log('received data')
}

testJs()