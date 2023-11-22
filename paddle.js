let url = $request.url;

let charlieActive = () => {
    if (url !== "https://v3.paddleapi.com/3.2/license/activate") return;
    let userAgent = $request.headers['User-Agent'];
    if (!userAgent.includes("Downie") || !userAgent.includes("Permute")) {
        return; // 如果不包含 "Downie" 或 "Permute"，则退出函数
    }
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
                signature : "nxeFmGFY3Ylt3+izblc96zYTSTvFgtOhLIQ86WH9m3s=",
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

let charlieVerify = () => {
    if (url !== "https://v3.paddleapi.com/3.2/license/verify") return;
    let userAgent = $request.headers['User-Agent'];
    if (!userAgent.includes("Downie") || !userAgent.includes("Permute")) {
        return; // 如果不包含 "Downie" 或 "Permute"，则退出函数
    }
    let body = $request.body.split("&");
    let product_id = "";
    for (let k of body) {
        if (k.indexOf("product_id") != -1) {
            product_id = k.split("=")[1];
        }
    }
    let bd = JSON.stringify({
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
            bd,
        },
    });
};
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
                    activation_id: "99567@qq.com",
                    type: "personal",
                    expires: 1,
                    expiry_date: 1999999999999,
                },
            }),
        },
    });
};

let paddleVerify = () => {
    if (url !== "https://v3.paddleapi.com/3.2/license/verify") return;
    let body = JSON.stringify({
        success: true,
        response: {
            type: "personal",
            expires: 1,
            expiry_date: 1999999999999,
        },
    });
    $done({
        response: {
            body,
        },
    });
};
charlieActive();
charlieVerify();
paddleActivate();
paddleVerify();
