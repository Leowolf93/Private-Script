let url = $request.url;

let paddleActivate = () => {
    if (url !== "https://v3.paddleapi.com/3.2/license/activate") return;
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
                    product_id: product_id,
                    "times_used": "0",
                    "expiry_date": null,
                    "user_id": "81948133",
                    "allowed_uses": "3",
                    "type": "activation_license",
                    "activation_id": "5351935",
                    "expires": false
                },
            }),
        },
    });
};

let paddleVerify = () => {
    if (url !== "https://v3.paddleapi.com/3.2/license/verify") return;
    let body = $request.body.split("&");
    let product_id = "";
    for (let k of body) {
        if (k.indexOf("product_id") != -1) {
            product_id = k.split("=")[1];
        }
    }
    let body = JSON.stringify({
        success: true,
        response: {
            product_id: product_id,
            "allowed_uses": "3",
            "times_used": "1",
            "type": "activation_license",
            "expires": false,
            "expiry_date": null
        },
    });
    $done({
        response: {
            body,
        },
    });
};

paddleActivate();
paddleVerify();
