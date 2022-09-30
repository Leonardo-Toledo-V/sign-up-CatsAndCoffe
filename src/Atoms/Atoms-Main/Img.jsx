import img from "../../../public/img/img-cat.jpeg"

function Img() {
    return ( 

        <div className="div-cat">
        <img src={img} alt="imagen" className='image-cat' />
    </div>

     );
}

export default Img;