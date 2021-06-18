"# url-to-base64" 
convert image url to base64 
```
const urlToBase64 = require('@aistiak/url-to-base64');
const url = 'https://client-creatives.s3.ap-southeast-1.amazonaws.com/41286359263590860000.png';
urlToBase64(url).then(res => console.log(res));
```
