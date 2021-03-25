// @ts-ignore
// prettier-ignore
const PUBLIC_KEY = eval(function(p,a,c,k,e,r){e=String;if(!''.replace(/^/,String)){while(c--)r[c]=k[c]||c;k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('"0";',2,1,'676ea3c7'.split('|'),0,{}));

export function decode(text: string, time: number) {
  const number = parseInt(PUBLIC_KEY, 16) ^ time;
  return text
    .split("")
    .map((v) => String.fromCharCode(v.charCodeAt(0) ^ number))
    .join("");
}
