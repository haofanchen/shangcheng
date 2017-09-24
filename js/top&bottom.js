window.onload=function(){
	var body=document.body;
	var top=document.getElementById('header');
	var bottom=document.getElementById('footer');
	
	var header='<div><img src="images/logo1.png"/><span><a href="register.html">注册</a></span><span><a href="qwytqw.html">登陆</a></span><br><br><form><input type="text" placeholder="请输入你要搜索的内容"/><input type="submit" value=""/></form><ul><li><a href="index.html">首页</a></li><li><a href="aboutus.html">品牌介绍</a></li><li><a href="news.html">新闻中心</a></li><li><a href="product.html">产品中心</a></li><li><a href="contact.html">联系我们</a></li></ul></div>';
	
	var footer='<p>浙江建华网络科技有限公司 版权所有&nbsp;   &copy;2013-2023 技术支持：机电在线</p>';
	
	top.innerHTML=header;
	bottom.innerHTML=footer;

}