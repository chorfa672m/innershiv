// http://jdbartlett.github.com/innershiv | WTFPL License
window.a=function(){function i(c,e,b){return/^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i.test(b)?c:e+"></"+b+">"}function g(d,g){if(!c&&(c=e.createElement("div"),c.innerHTML="<nav></nav>",j=c.childNodes.length!==1)){for(var b=e.createDocumentFragment(),f=h.length;f--;)b.createElement(h[f]);b.appendChild(c)}d=d.replace(/^\s\s*/,"").replace(/\s\s*$/,"").replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,"").replace(/(<([\w:]+)[^>]*?)\/>/g,i);c.innerHTML=(b=d.match(/^<(tbody|tr|td|col|colgroup|thead|tfoot)/i))?"<table>"+d+"</table>":d;b=b?c.getElementsByTagName(b[1])[0].parentNode:c;if(g===!1)return b.childNodes;for(var f=e.createDocumentFragment(),k=b.childNodes.length;k--;)f.appendChild(b.firstChild);return f}var c,e=document,j,h="abbr article aside audio canvas command datalist details figure figcaption footer header hgroup keygen mark meter nav output progress section source summary time video".split(" ");g.b=1;return g}();