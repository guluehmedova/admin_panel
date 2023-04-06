import { useState } from "react"

const ImageUpload = (props) => {

    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    console.log(image)
    console.log(image.slice(12))

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" value={image} onChange={(e) => setImage(e.target.value)} />
            </form>
            <img src={`/images/${image.slice(12)}`} alt="" />
        </div>
    )
}

export default ImageUpload