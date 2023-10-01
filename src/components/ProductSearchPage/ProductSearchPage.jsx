import ProductSearch from '../ProductSearch/ProductSearch'
import ProductList from '../ProductList/ProductList'
import { Container } from '../StyledComponents.jsx'
import { useContext } from 'react'
import { AppData } from '../../App'

const ProductSearchPage = () => {
    const {isLoaded, filterredProductList} = useContext(AppData)

    return (
        <Container>
            <ProductSearch />
            <ProductList isLoaded={isLoaded} productList={filterredProductList} />
        </Container>
    )
}

export default ProductSearchPage