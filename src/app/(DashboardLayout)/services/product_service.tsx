import axios from 'axios'
const server = process.env.NEXT_PUBLIC_URL_API
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODA4MFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTcwMTAyNjc5MiwiZXhwIjoxNzAzNjE4NzkyLCJuYmYiOjE3MDEwMjY3OTIsImp0aSI6IjJHak93NWNrTjl2cXJ5VzEiLCJzdWIiOiIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.HDAenpQUgkJL5VG-bdtk9tBVVP6EXaYEMR3WpGNSJ94'
const urlProducts = `${server}/api/products`

export const getProducts = async() => {

    console.log(`URL Server => ${server}`)

    const result = await axios.get(urlProducts, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })

    console.log(result.data.data.data)

    return {
        props: {
            products: result
        }
    }
}

export const getProductsById = async(idProduct: number) => {

    console.log(`urlProducts Server => ${server}`)

    const result = await axios.get(`${urlProducts}/${idProduct}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })

    console.log(result.data.data.data)

    return {
        props: {

        }
    }
}