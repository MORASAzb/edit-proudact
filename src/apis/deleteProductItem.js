
export default function deleteProductItem(productITEM){
    const res = fetch(`http://localhost:3000/products/${productITEM}/`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
    }).then((res) => res.json())


    return res;
}