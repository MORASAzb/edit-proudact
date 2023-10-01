export default function getProducts(){
    const res = fetch('http://localhost:3000/products', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
    }).then((res) => res.json())

    console.log({res})

    return res;
}