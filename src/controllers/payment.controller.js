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
        ],
        back_urls: {
            success: "http://localhost:4000/success",
            failure: "http://localhost:4000/failure",
            pending: "http://localhost:4000/pending",
        },
        notification_url: "https://0336-2800-810-5ce-48b-35cb-1681-4185-237f.ngrok-free.app "
    })

    console.log(result)

    res.send('creating order')
}

export const receiveWebHook = (req, res) => {
    console.log(req.query)
    res.send("webhook")
}