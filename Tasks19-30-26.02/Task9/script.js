



const usename = document.querySelector('#username');
const emeil = document.querySelector('#email');
const passwd = document.querySelector('#password');

window.addEventListener('beforeunload', (event)=> {
    window.localStorage.setItem("usename",usename.value);
    window.localStorage.setItem("emeil",emeil.value);
    window.localStorage.setItem("passwd",passwd.value);
})
    
document.addEventListener("DOMContentLoaded",(event)=>{

    usename.value = window.localStorage.getItem('usename');
    emeil.value = window.localStorage.getItem('emeil');
    passwd.value = window.localStorage.getItem('passwd');
})

document.addEventListener("submit",(event)=>{
    window.localStorage.removeItem('usename')
    window.localStorage.removeItem('emeil')
    window.localStorage.removeItem('passwd')
    usename.value = "";
    emeil.value = "";
    passwd.value = "";
})
