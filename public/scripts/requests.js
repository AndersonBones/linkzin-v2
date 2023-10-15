
async function newShortnerUrl(){
    let url = newUrlInput.value

    const response = await fetch('http://localhost:3000/New',{
        method: 'post',
        body:JSON.stringify({originalUrl:url}),
        
        headers:{"Content-type": "application/json"}
    })

    const resData = await response.json();
    newUrlInput.value = ''
    return resData;
}