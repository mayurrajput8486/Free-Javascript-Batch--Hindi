console.warn(`------ window Object-----------`);
var greet = 'Good Morning Everyone'
console.log(greet);
document.write(greet)
document.write('<br>',window.greet)

function callMyName () {
    document.write('<br>',window.greet)
}
window.callMyName()

console.log(`width - ${window.innerWidth}px`);
console.log(`height - ${window.innerHeight}px`);

function printData (){
    window.print()
}

console.warn(`------- screen Object --------`)
console.log(`width - ${screen.width}px`);
console.log(`height - ${screen.height}px`);
console.log(`availwidth - ${screen.availWidth}px`);
console.log(`availHeight - ${screen.availHeight}px`);
console.log(`orientation - ${screen.orientation.type}`);
console.log(`pixeldepth - ${screen.pixelDepth}px`);
console.log(`colordepth - ${screen.colorDepth}px`);

console.warn(`--------- location object -----`);
//href - https://www.flipkart.com
//protocol - https:
//hostname - www.flipkart.com
//pathname - /
console.log(`href - ${location.href}`);
console.log(`protocol - ${location.protocol}`);
console.log(`hostname - ${location.hostname}`);
console.log(`pathname - ${location.pathname}`);

console.warn(`--------- history object --------`);

function goBack () {
    history.back()
}

function goForward () {
    history.forward()
}

console.log(`total url visit - ${history.length}`)









