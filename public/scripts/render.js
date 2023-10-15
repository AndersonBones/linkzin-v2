
function generateShortnerUrl(value){
    $(".shortner-url-container").html(`
    <div class="shortner-url-container">
        <div class="original-url">
            <span>${value.url}</span>
        </div>

        <div class="new-url">
            <a href="">${value.shortnerUrl}</a>
        </div>

        <div class="qr-code">
            <button></button>
        </div>

        <div class="clipbourd-url">
            <button></button>
        </div>
    </div>
    `).fadeIn('fast',()=>{
        
    })
}