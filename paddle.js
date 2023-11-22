let url = $request.url;

let activePaddle = () => {
    if (url !== "https://v3.paddleapi.com/3.2/license/activate") return;
    let userAgent = $request.headers['user-agent'];
    let body = $request.body.split("&");
    let product_id = "";
    for (let k of body) {
        if (k.indexOf("product_id") != -1) {
            product_id = k.split("=")[1];
        }
    }
    if (userAgent.includes("Downie") || userAgent.includes("Permute")) {
        $done({
            response: {
                body: JSON.stringify({
                    success: true,
                    signature: "nxeFmGFY3Ylt3+izblc96zYTSTvFgtOhLIQ86WH9m3s=",
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
    } else {
        $done({
            response: {
                body: JSON.stringify({
                    success: true,
                    response: {
                        product_id: product_id,
                        activation_id: "99567@qq.com",
                        type: "personal",
                        expires: 1,
                        expiry_date: 1999999999999,
                    },
                }),
            },
        });
    }
};

let verifyPaddle = () => {
    if (url !== "https://v3.paddleapi.com/3.2/license/verify") return;
    let userAgent = $request.headers['user-agent'];
    let body = $request.body.split("&");
    let product_id = "";
    for (let k of body) {
        if (k.indexOf("product_id") != -1) {
            product_id = k.split("=")[1];
        }
    }
    if (userAgent.includes("Downie") || userAgent.includes("Permute")) {
        let bd = JSON.stringify({
            success: true,
            signature: "tR\/ThldszXvkuC2gIVu7mV3H1apFebP5Ne8gyrk8py0=",
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
                bd,
            },
        });
    } else {
        let bd = JSON.stringify({
            success: true,
            response: {
                type: "personal",
                expires: 1,
                expiry_date: 1999999999999,
            },
        });
        $done({
            response: {
                bd,
            },
        });
    }
};

activePaddle();
verifyPaddle();
