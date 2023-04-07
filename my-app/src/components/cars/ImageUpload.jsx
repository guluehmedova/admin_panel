import { useState } from "react"

const ImageUpload = () => {
    const [image, setImage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" value={image} onChange={(e) => setImage(e.target.value)} />
            </form>
        </div>
    )
}

export default ImageUpload