async function main(){
  await loadScript('https://unpkg.com/vue/dist/vue.js');
  await loadScript('https://unpkg.com/element-ui/lib/index.js');
  // await loadScript('./final.js');

  creatComponent();
}
// 创建组件
function creatComponent() {
  const t = document.body;
  const el = document.createElement('div');
  el.id = 'app';
  el.innerHTML = '<div><div>{{data}}</div><el-button type="primary" icon="el-icon-edit"></el-button></div>'
  t.append(el);
  createVue({ visible: false, message: 'wsn',data: 233 })
}
// 创建vue
function createVue(data){
  new Vue({
    el: '#app',
    data(){
      return data
    }
  })
}
// 加载第三方模块
function loadScript(url) {
  return new Promise((reslove,reject) => {
    var script = document.createElement('script');
    script.type = "text/javaScript";
    if (script.readyState) {//IE
        script.onreadystatechange = function() {
            if (script.readyState == "loaded"
                    || script.readyState == "complete") {
                script.onreadystatechange = null;
                reslove()
            }
        };
    } else {//其他浏览器
        script.onload = function() {
            reslove();
        };
    }
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
  })

}
// 通过()来调用此函数
main();