let obj = JSON.parse($response.body);
obj.response.product_id = "781505";
obj.response.activation_id = "admin";
obj.response.type = "personal";
obj.response.expires = 1;
obj.response.expiry_date = 1999999999999;
//obj.response.trial.duration = 9999
$done({body: JSON.stringify(obj)});
