(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{397:function(t,a,s){"use strict";s.r(a);var r=s(19),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"通过历史data文件目录恢复数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过历史data文件目录恢复数据库"}},[t._v("#")]),t._v(" 通过历史data文件目录恢复数据库")]),t._v(" "),s("p",[t._v("通过历史文件目录中的数据库文件和InnoDB的共有表空间文件恢复误删数据库。\n")]),t._v(" "),s("p",[t._v("今天突然看到phpEnv这个简介界面的php集成环境，想起我那upupw集成环境就是一把泪，所以就想尝鲜一把，于是我就按照其开发文档进行下载安装，但是万万没想到我为了避免产生其文档所说的的mysql文档无法启动的情况，于是一时大意失荆州未备份数据库就将mysql卸载，于是可想而知，当我安装号phpenv工具时，打开数据库时懵逼的表情，数据库都没了orz，但是我发现mysql下载之后在原文件夹中还存在data文件，于是通过百度终于找到了恢复方法。")]),t._v(" "),s("h2",{attrs:{id:"数据恢复"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据恢复"}},[t._v("#")]),t._v(" 数据恢复")]),t._v(" "),s("p",[s("strong",[t._v("首先找到卸载mysql目录下的data文件夹：")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/recoveryMonster/HexoImages/master/img/20190526003715.png",alt:""}})]),t._v(" "),s("p",[t._v("里面有很多的历史文件，其他都不要管，1 是ibdata1  该文件是InnoDB的共有表空间，必须要拷贝过去的，2 是我要恢复的数据库名称。")]),t._v(" "),s("p",[t._v("关闭mysql服务，将这两个文件拷贝到新安装的mysql 的data文件目录（D:\\phpEnv\\server\\mysql\\mysql-57\\data）下，重新启动服务，你会发现OJBK了。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://raw.githubusercontent.com/recoveryMonster/HexoImages/master/img/20190526004051.png",alt:""}})]),t._v(" "),s("p",[t._v("此时打开navicat你会发现数据库又恢复了。")])])}),[],!1,null,null,null);a.default=e.exports}}]);