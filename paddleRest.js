let url = $request.url;

let paddleReset = () => {
    if (url !== "https://v3.paddleapi.com/3.2/product/data") return;
    let body = $request.body.split("&");
    let product_id = "";
    for (let k of body) {
        if (k.indexOf("product_id") != -1) {
            product_id = k.split("=")[1];
        }
    }

    $done({
        response: {
            body: JSON.stringify({
                success: true,
                response: {
                       trial: {
                            duration: 99999
                        }
                },
            }),
        },
    });
};


paddleReset();
