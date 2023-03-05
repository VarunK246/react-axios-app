import axios from 'axios'

async function ImageApi (term) {

const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
        Authorization: `Client-ID CoiRp7wlRImHyesBhR22AHtte0AYadSEAi5Jvq2081s`
    },
    params: {
        query : term
    }
})

console.log(response.data.results)
return response.data.results;

}

export default ImageApi;