async function searchTopic () {
    const query = document.getElementById('searchInput').value.trim()
    const displayResult = document.getElementById('result')

    if(query === ''){
        displayResult.innerHTML = '⚠ Please Enter a topic'
        return
    }

    try{
        const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`)

        //console.log(response)

        if(!response.ok){
            displayResult.innerHTML = '❌ No Result Found'
            return
        }

        const data = await response.json()
        console.log(data);

        displayResult.innerHTML = `
            <h3>${data.title}</h3>
            <p>${data.extract}</p>
            <a href='${data.content_urls.desktop.page}' target='_blank'>Click here for more information</a>
        `
        

    }catch(error){
        displayResult.innerHTML = '❌ Error fetching data'
    }

}