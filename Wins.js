var body = $response.body;
var obj = JSON.parse(body);
obj.response.trial.duration = 99;
body = JSON.stringify(obj);
$done({body});
