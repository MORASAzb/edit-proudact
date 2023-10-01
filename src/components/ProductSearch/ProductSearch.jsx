import React, { useContext, useState } from 'react'
import { FormControl, Input, InputLabel } from '../StyledComponents.jsx'
import { AppData } from '../../App.jsx'

const ProductSearch = () => {
    const {handleSearch: onSearch} = useContext(AppData)
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearchTerm = (evt) => {
        setSearchTerm(evt.target.value);
        onSearch(evt.target.value)
    }

    return (
      <FormControl>
        <InputLabel>Search by name or description</InputLabel>
        <Input value={searchTerm} onChange={handleSearchTerm} />
      </FormControl>
    )
}

export default ProductSearch