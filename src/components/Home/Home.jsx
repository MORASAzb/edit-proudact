import { Container } from '../StyledComponents.jsx'
import ProductList from '../ProductList/ProductList'
import { useContext } from 'react'
import { AppData } from '../../App.jsx'

const Home = () => {
    const {isLoaded, productList,onCreateNewProduct} = useContext(AppData)

    return (
        <Container>
            <ProductList isLoaded={isLoaded} onCreateNewProduct={onCreateNewProduct} productList={productList}/>
        </Container>
    )
}

export default Home