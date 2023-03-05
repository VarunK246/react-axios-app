import ImageShow from './ImageShow'

function ImageList({images}) {
    
    const renderImages = images.map((item) => {
        return <ImageShow key={item.id} image={item}/>
    })

    return renderImages;
}

export default ImageList;