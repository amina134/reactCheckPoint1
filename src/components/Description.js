import Product from '../Product';

const Description = (props) => {
    return (
        <div style={props.styleinherit}>
            <p>{Product.description} </p>
        </div>
    )
  

}

export default Description;