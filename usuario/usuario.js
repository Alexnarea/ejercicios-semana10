`use strict`

let urlFacebook = 'facebook.com/leomessi';
let post = urlFacebook.indexOf('/');
let nameFacebook = urlFacebook.substring (post+1);

alert (nameFacebook);