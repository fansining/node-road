模块

1  导出普通变量  函数   exports.msg = msg
2 导出构造函数 module.exports = People;
3  node_modules文件夹作用和位置
4 var bar = require("bar"); // 请求的是一个文件夹 默认也会去node_modules文件夹中找bar文件夹中的index.js

5 我们可以通过package.json文件去管理一个模块

  每一个模块文件夹中 都推荐大家写一个package.json文件，这个名字不能改，node
  将自动读取里面的配置,有一个main项 就是入口文件

    注意 package.json文件要放到模块文件夹的根目录去

=======npm============

 我们学习了，模块就是一些功能的封装，所以一些成熟的或比较常用的功能，都有人去封装了模块，并且放到了社区中，供人免费下载
    这个著名的社区叫npm,同时npm也是一个工具名字 node package management

    https://www.npmjs.com
   
    去社区搜索需求 然后点进去 看api
    若要配置一个模块 直接在cmd 输入nmp install 模块名字  
    模块名字全球唯一 安装的时候注意路径