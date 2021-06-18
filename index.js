const https = require('https');


function urlToBase64(url) {
    let base64Data;
    return new Promise(resolve => {
        https.get(url, res => {
            let chunks = [];
            res.on('data', d => {
                chunks.push(d);
            });
            res.on('end', () => {
                const buffer = Buffer.concat(chunks).toString('base64');
                base64Data += buffer;
                base64Data =
                    'data:image/png;base64,' + base64Data.replace('undefined', '');
                resolve(base64Data);
            });
        });
    });
}

module.exports = urlToBase64 
