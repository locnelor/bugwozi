"use client"
export const setCookie = (name: string, value: string, options?: any) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + (7 * 24 * 60 * 60 * 1000));
    options = options || {
        path: "/",
        expires
    };
    options.path = "/"
    let str = encodeURIComponent(name) + '=' + decodeURIComponent(value);

    if (null == value) options.maxage = -1;

    if (options.maxage) {
        options.expires = new Date(+new Date + options.maxage);
    }

    if (options.path) str += '; path=' + options.path;
    if (options.domain) str += '; domain=' + options.domain;
    if (options.expires) str += '; expires=' + options.expires.toUTCString();
    if (options.secure) str += '; secure';

    document.cookie = str;
}
export const getCookie = (name: string) => all()[name];
const all = () => parse(document.cookie)
const parse = (str: string) => {
    let obj: { [key in string]: string } = {};
    let pairs = str.split(/ *; */);
    let pair;
    if ('' == pairs[0]) return obj;
    for (let i = 0; i < pairs.length; ++i) {
        pair = pairs[i].split('=');
        obj[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
    return obj;
}