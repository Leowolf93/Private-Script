let url = $request.url;

let activePaddle = () => {
    let userAgent = $request.headers['user-agent'];
    let body = $request.body.split("&");
    let product_id = "";
    for (let k of body) {
        if (k.indexOf("product_id") != -1) {
            product_id = k.split("=")[1];
        }
    }
    if (userAgent.includes("Downie") || userAgent.includes("Permute")) {
        console.log("Downie/Permute 激活函数");
        $done({
            response: {
                body: JSON.stringify({
                    success: true,
                    signature: "nxeFmGFY3Ylt3+izblc96zYTSTvFgtOhLIQ86WH9m3s=",
                    response: {
                        product_id: product_id,
                        times_used: "0",
                        expiry_date: null,
                        user_id: "81948133",
                        allowed_uses: "3",
                        type: "activation_license",
                        activation_id: "5351935",
                        expires: false
                    },
                }),
            },
        });
    } else {
        console.log("普通软件 激活函数");
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
                        success_code: 0
                    },
                }),
            },
        });
    }
};

activePaddle();
