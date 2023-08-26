var body = $response.body;
var obj = JSON.parse(body);
obj.response.trial.duration = 99;
body = JSON.stringify(obj);
$notify("Surge Notification", "This is a subtitle", "Hello from Surge!");
$done({body});
