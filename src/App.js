import { useState } from 'react';
import ImageApi from './api'
import ImageList from './components/ImageList';
import SearchBar from './components/SearchBar'
function App() {

    const [images, setImages] = useState([]);

    const handleSubmission = async (term) => {
        const result = await ImageApi(term);
        setImages(result);
    }
       
    return (
        <div>
            <SearchBar onSubmit = {handleSubmission}/>
            <ImageList images={images}/>
        </div>
    )
}

export default App;