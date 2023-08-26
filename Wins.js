var body = $response.body;
var obj = JSON.parse(body);
console.log("This is a log message.");
console.log(obj.response.trial.duration);
obj.response.trial.duration = 99;
console.log(obj.response.trial.duration);
body = JSON.stringify(obj);
$done({body});
