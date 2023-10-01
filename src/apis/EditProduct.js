
export default function EditProductItem(data){
    const res = fetch(`http://localhost:3000/products/${data._id}/`, {
        method: 'PATCH',
      
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },

          body: JSON.stringify(data)
    }).then((res) => res.json())


    return res;
}
