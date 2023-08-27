let obj = JSON.parse($response.body);
obj.response.trial.duration = 9
$done({body: JSON.stringify(obj)});
