parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"K4Xi":[function(require,module,exports) {
const e=require("lodash");function s(s={}){const o=[{loader:"css-loader",options:e.omit(s,["styleLoader"])}];return!1!==s.styleLoader&&o.unshift({loader:"style-loader",options:s.styleLoader||{}}),(e,s)=>s.addLoader(Object.assign({test:/\.css$/,use:o},e.match))}function o(s={}){const o={modules:!0,importLoaders:1,localIdentName:"production"===String(process.env.NODE_ENV)?"[hash:base64:10]":"[name]--[local]--[hash:base64:5]"},t=[{loader:"css-loader",options:Object.assign(o,e.omit(s,["exclude","include","styleLoader"]))}];return!1!==s.styleLoader&&t.unshift({loader:"style-loader",options:s.styleLoader||{}}),(e,s)=>s.addLoader(Object.assign({test:/\.css$/,use:t},e.match))}module.exports=s,module.exports.modules=o;
},{}],"bMs+":[function(require,module,exports) {
function e(e={}){return(o,t)=>{if(!o.match)throw new Error("The file() block can only be used in combination with match(). Use match() to state on which files to apply the file loader.");return t.addLoader(Object.assign({use:[{loader:"file-loader",options:e}]},o.match))}}module.exports=e;
},{}],"B/qa":[function(require,module,exports) {
function e(e={}){return(o,t)=>{if(!o.match)throw new Error("The url() block can only be used in combination with match(). Use match() to state on which files to apply the url loader.");return t.addLoader(Object.assign({use:[{loader:"url-loader",options:e}]},o.match))}}module.exports=e;
},{}],"Focm":[function(require,module,exports) {
const e=require("./css.js"),r=require("./file.js"),s=require("./url.js");module.exports={css:e,file:r,url:s};
},{"./css.js":"K4Xi","./file.js":"bMs+","./url.js":"B/qa"}]},{},["Focm"], null)
//# sourceMappingURL=/index.js.map