/************************************
*@描述：全局变量
************************************/
var kx = {
  base: "http://www.kxbrand.kx",
  static:"http://f.kxbrand.kx"
};
/************************************
*@描述：seajs配置文件
*@说明：http://www.seajs.org
************************************/
seajs.config({
  base: "/jslib",
  paths: {
    'p-c':'/csslib',
    'p-u':'/untils',
    'p-kx':'b2b/kx'
  },
  alias: {
    "base": "base/base.js",
    "superslide": "plugins/superslide/2.1.1/superslide.js",
    "css-chosen": "plugins/chosen/1.1.0/chosen.css",
    "css-syntaxhighlighter": "plugins/syntaxhighlighter/3.0.83/syntaxhighlighter.css",
    "css-syntaxhighlighter": "plugins/chosen/1.1.0/chosen.css",
    "css-ztree": "plugins/ztree/3.5.15/ztree.css",
    "jquery": "mod/jquery/1.10.2/jquery.js"
  },
  'map': [
    [/^(.*\.(?:css))(.*)$/i, '$1?20131212'],
    [/^(.*\.(?:js))(.*)$/i, '$1?20131212']
  ],
  'maponline': [
    [/^(.*g-base\.(?:js))(.*)$/i,function(url){
      if(location.search.indexOf("debug") > -1){
        return "http://localhost/g-base.js?20131212";
      }else{
        return url+"?20131212";
      }
    }]
  ]
});