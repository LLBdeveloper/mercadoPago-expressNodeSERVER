import mercadopago from 'mercadopago'

export const createOrder = async (req, res) => {
    mercadopago.configure({
        access_token: "TEST-2581695956466567-030319-3d628279b91a80f6e85aab56c8899fb9-1711602904",
    })
    

    const result = await mercadopago.preferences.create({
        items: [
            {
                title: "Laptop Lenovo",
                unit_price: 500,
                currency_id: "ARS",
                quantity: 1,
            }
        ]
    })

    // console.log(result)

    res.send('creating order')
}