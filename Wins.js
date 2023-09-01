let obj = JSON.parse($response.body);
let decodedRequestBody = decodeURIComponent($request.body);
let pairs = decodedRequestBody.split("&");
let params = {};
for (let pair of pairs) {
    let [key, value] = pair.split("=");
    params[key] = value;
}
let productId = params["product_id"];
obj.response.product_id = productId;
obj.response.activation_id = "admin";
obj.response.type = "personal";
obj.response.expires = 1;
obj.response.expiry_date = 1999999999999;
//obj.response.trial.duration = 9999
$done({body: JSON.stringify(obj)});
