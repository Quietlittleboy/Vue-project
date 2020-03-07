// rem适配
function Rem (){
  let width = document.documentElement.clientWidth;//获取屏幕宽度
  let fontSize = width/10;
  document.documentElement.style=`font-size:${fontSize}px`
}
Rem()