# vue-study

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 环境搭建

> 1. 开发工具：[WebStorm][1] / [Sublime Text][2] / [atom][3] 等。笔者由于习惯了JetBrains公司软件的风格，因此使用的是 WebStorm；
> 2. 开发环境：[GIT][4]、[node.js][5]、[vue-cli][6]；
> 3. 协助工具：[webpack][7]、[gulp][26]、[vuex][12]、[vue-router 2][11]、[axios][13]、[eslint][8]；
> 4. 语法环境：[ECMAScript 6][9]、[Babel 转码器][10]。

## 开发环境准备
一、 安装 `GIT`
二、 安装 `node.js`
三、 安装 `vue-cli`

### 一、安装GIT
1.GIT 官网（https://git-scm.com/downloads）上下载 GIT 的安装包，默认安装完成即可。

2.安装完成后，右键桌面打开 `git bash here` 命令窗口，输入 `cd ~/.ssh` 检查计算机是否有 `ssh ` 密钥，如果有则进入 `~/.ssh` 路径下（用 `ls` 命令查看当前路径文件，用 `rm *` 删除所有文件），如果没有则提示：No such file or directory。

3.输入 `ssh-keygen -t rsa -C "xxxxxx@xxxx.com"`（填写自己真实有效的email地址，然后一直回车），完成后，打开本地 `~/.ssh/id_rsa.pub` 文件，此文件中的内容为刚刚生成的密钥。

4.在 github 个人账号上添加一个 ssh key，然后在本地 bash 中输入 `ssh -T git@github.com` 测试连接，若没有问题则进行第五步，若有问题则返回第二步，清除 ssh 密钥。

5.设置用户信息。

``` bash
	#给自己起个用户名
    git config --global user.name "xxxxxx"

    #填写自己的真实邮箱
    git config --global user.email "xxxxxx@xxxx.com"
```

6.设置 token。token 可在 github 中创建。

``` bash
	#github上的用户名
	git config --global github.user xxxxxxx

	#github上创建的token
	git config --global github.token xxxxxxxxxxxxxxxx
```

7.示例-在本地创建一个新项目。

``` bash
	#新建一个文件夹 hello-world
	#进入 hello-world，右键打开 git bash here
	echo "# hello-world" >> README.md
	git init
	git add README.md
	git commit -m "first commit"

	#push到一个已经存在的远程git地址
	git remote add origin https://github.com/xiaoxinfly/hello-world.git
	git push -u origin master
```

备注：如果以上还是不行，可通过消除代理的方式，使得github的账号登录界面重新出现。如果成功了别忘了在环境变量中添加git的环境变量，如：`C:\Program Files\Git\cmd`。

``` bash
	git config --global http.proxy 
	#查询到当前设置了代理，所以我取消这个设置：
	#
	git config --global --unset http.proxy
	#再查询，已经没有了代理，然后再push,成功了！
```
**GIT笔记：**

1. 创建和切换到新分支 git branch -b [分支名] 相当于 git branch develop(创建新分支)后，git checkout develop(切换到develop分支)
2. git add . 将当前目录下所有已经更改和添加的文件添加到分支中
3. git commit执行后，进入VIM模式，按insert或s键可进行编辑状态，当编辑结束后按ESC键，再按大写状态下的Z键保存编辑信息并提交
4. git status 可查看git当前文件是否已修改，并列出来
5. git commit时message的格式化

> <类型>(可选):<主题>
> //空一行
> <内容>

其中标题是必需的，内容若无需过多描述可以省略。标题部分只有一行，包括字段类型和主题，类型是用于说明commit的类别，只允许使用下面7个标识：

* init：项目初始化（用于项目初始化或其他某种行为的开始描述，不影响代码）
* feat：新功能（feature）
* fix：修补bug
* docs：文档（documentation)
* opt：优化和改善，比如弹窗进行确认提示等相关，不会更改逻辑和具体功能等
* style：格式（不影响代码运行的变动）
* refactor：重构（即不是新增功能，也不是修改bug的代码变动）
* test：增加测试
* other：用于难以分类的类别（不建议使用，但一些如删除不必要的谁的，更新,ignore之类的可以使用

（可选）类型后面可以加括号，括号内填写主要动力的范围，比如按功能模块分

* \# :表示模块
	- \#studet --> 表示学生模块
	- \#all --> 表示所有模块

内容包含两个部分，分别是what和why。

**参考资料：**
1. [window下配置SSH连接GitHub、GitHub配置ssh key][14]
2. [git - 简明指南][15]
3. [Git常用命令总结][16]
4. [如何写好git commit message][17]
5. [Git管理分支][18]

### 二、安装node.js
1.在 `node.js` 官网（https://nodejs.org/en/download/）下载 `lts` 版本的进行安装。

2.然后配置环境变量：`D:\Program Files\nodejs\`。我这里并没有对npm安装的全局模块的路径进行设置，如有需要可参考后面资料进行设置。

3.安装完成后，可在桌面新建一个 `test.js`，文件内容如下：

```
	var http = require("http"); 
	http.createServer(function(request, response) { 
	response.writeHead(200, {"Content-Type": "text/plain"}); 
	response.write("test nodjs"); 
	response.end(); 
	}).listen(8899); 
	console.log("nodejs start listen 8899 port!");
```

保存后打开 `cmd` 窗口，输入 `node C:\Users\yufeng.liu\Desktop\test.js` ，然后在浏览器输入地址 `http://127.0.0.1:8899/` 就可以看到输出的 `test nodejs`。

4.设置 `npm` 的镜像，笔者采用的是淘宝的npm镜像，且设为持久使用。

> 1. 临时使用 `npm --registry https://registry.npm.taobao.org install express` ；
> 2. 持久使用 `npm config set registry https://registry.npm.taobao.org`，配置后可通过 `npm config get registry` 或 `npm info express` ；
> 3. 通过cnpm使用 `npm install -g cnpm --registry=https://registry.npm.taobao.org` 。

**参考资料：**
1.[淘宝 NPM 镜像][19]
2.[npm太慢， 淘宝npm镜像使用方法][20]
3.[Node.js安装及环境配置之Windows篇][21] (`npm config set prefix"D:\Develop\nodejs\node_global"` `prefix` 与 `"` 应有一个空格，其他可借鉴，虽然笔者没试过，但是会难倒聪明的你们吗？不可能的嘛，哈哈)

### 三、安装 `vue-cli`
1.通过 `npm install -g vue-cli` 安装全局的 `vue-cli` 命令。
2.进入任意目录下，输入 `vue init <template-name> <project-name>` 如：`vue init webpack vue-demo` 。

**参考资料：**
1.[基于vue-cli快速构建][22]
2.[Vue 爬坑之路（一）—— 使用 vue-cli 搭建项目][23]
3.[vue-cli#2.0项目结构分析][24]
4.[vue-cli的webpack模板项目配置文件分析][25]

## 协助工具简单介绍
一、前端构建工具 `webpack`
二、自动化构建工具 `gulp`
三、状态管理 `vuex`
四、前端路由 `vue-router 2`
五、服务端通信 `axios`
六、代码检查 `eslint`

[1]: https://www.jetbrains.com/webstorm/
[2]: http://www.sublimetext.com/
[3]: https://atom.io/
[4]: https://git-scm.com/downloads
[5]: https://nodejs.org/en/download/
[6]: https://www.npmjs.com/package/vue-cli
[7]: https://webpack.js.org/configuration/
[8]: https://eslint.org/
[9]: http://es6.ruanyifeng.com/
[10]: http://babeljs.io/docs/usage/api/
[11]: https://router.vuejs.org/zh-cn/index.html
[12]: https://vuex.vuejs.org/
[13]: https://www.npmjs.com/package/axios
[14]: http://jingyan.baidu.com/article/a65957f4e91ccf24e77f9b11.html
[15]: http://rogerdudler.github.io/git-guide/index.zh.html
[16]: http://www.cnblogs.com/mengdd/p/4153773.html
[17]: http://www.cnblogs.com/deng-cc/p/6322122.html
[18]: http://www.yiibai.com/git/git_managing_branches.html
[19]: https://npm.taobao.org/
[20]: http://blog.csdn.net/quuqu/article/details/64121812
[21]: http://www.cnblogs.com/zhouyu2017/p/6485265.html
[22]: http://www.jianshu.com/p/2769efeaa10a
[23]: http://www.cnblogs.com/wisewrong/p/6255817.html
[24]: https://segmentfault.com/a/1190000007880723
[25]: http://blog.csdn.net/hongchh/article/details/55113751
[26]: https://gulpjs.com/