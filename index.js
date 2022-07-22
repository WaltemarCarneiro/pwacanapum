window.addEventListener('load', ()=>{
    registerSW()
})

async function registerSW(){
    if('serviceWorker' in navigator){
        try{
            await navigator.serviceWorker.register('https://raw.githubusercontent.com/WaltemarCarneiro/pwacanapum/main/pwabuilder-sw.js')
        } catch(e){
            console.log(`SW registration failed`);
        }
    }
}
