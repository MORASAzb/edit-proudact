export default function createProduct(data) {
    const res = fetch('http://localhost:3000/products', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(data)
    }).then((res) => res.json())

    console.log({res})

    return res
}