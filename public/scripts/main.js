const newUrlBtn = document.getElementById('btnNewShortner');
const newUrlInput = document.getElementById('new-shortner-url')

// window.onload = function(){
//     $('.shortner-url-container').fadeOut()
// }
newUrlBtn.addEventListener('click', async (e)=>{
    e.preventDefault();

    let newUrl = await newShortnerUrl()
    
    if(newUrl){
        generateShortnerUrl(newUrl)
    }
})