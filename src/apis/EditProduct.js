
export default function EditProductItem(data){
    const res = fetch(`http://localhost:3000/products/${data._id}/`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
    }).then((res) => res.json())


    return res;
}