import PropTypes from 'prop-types'
import { Button, Editbutton } from '../StyledComponents.jsx'
import { useContext } from 'react'
import { AppData } from '../../App.jsx';
import { Link } from 'react-router-dom';

const ProductList = ({ isLoaded, productList }) => {
    const { removeProductItem, onCreateNewProduct } = useContext(AppData);

    if (isLoaded === false) {
        return <div>loading</div>
    }

    // if (productList.length === 0) {
    //     return <div> There is no data.</div>
    // }

    return (
        <>
            <div key={Math.random(0,1500)}>{
                productList.map(product => (
                    <>
                        <pre key={product._id}>
                            {
                                JSON.stringify(product, null, 2)
                            }
                        </pre>
                        <Button onClick={() => removeProductItem(product._id)}>Remove This Product</Button>


                        <Link to={`/Edit-product/${product._id}`}>
                            <Editbutton onClick={() => onCreateNewProduct(product._id)}>
                                Edit This Product
                            </Editbutton>
                        </Link>

                    </>
                ))
            }</div>
        </>
    )
}

const ProductListShape = PropTypes.shape({
    "productName": PropTypes.string.isRequired,
    "productSKU": PropTypes.string.isRequired,
    "productCount": PropTypes.string.isRequired,
    "productBrand": PropTypes.string.isRequired,
    "productPrice": PropTypes.string.isRequired,
    "productCategory": PropTypes.string.isRequired,
    "productDescription": PropTypes.string.isRequired,
    "_id": PropTypes.number.isRequired
})

ProductList.propTypes = {
    productList: PropTypes.arrayOf(ProductListShape).isRequired,
    isLoaded: PropTypes.bool.isRequired
}

export default ProductList