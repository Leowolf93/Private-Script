let obj = JSON.parse($response.body);

if (obj && obj.response && obj.response.trial) {
    obj.response.trial.duration = 9999;
}

$done({body: JSON.stringify(obj)});
