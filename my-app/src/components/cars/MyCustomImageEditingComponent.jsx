
const MyCustomImageEditingComponent = ({imageFormatter, image}) => {

    return (
        <div>
           <img src={`/images/${image}`} alt="" />
        </div>
    )
}

export default MyCustomImageEditingComponent;