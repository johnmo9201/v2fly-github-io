(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{398:function(a,t,r){"use strict";r.r(t);var e=r(18),v=Object(e.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"开发指引"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#开发指引"}},[a._v("#")]),a._v(" 开发指引")]),a._v(" "),r("h2",{attrs:{id:"基本"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基本"}},[a._v("#")]),a._v(" 基本")]),a._v(" "),r("h3",{attrs:{id:"版本控制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#版本控制"}},[a._v("#")]),a._v(" 版本控制")]),a._v(" "),r("p",[a._v("Git")]),a._v(" "),r("h3",{attrs:{id:"分支（branch）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#分支（branch）"}},[a._v("#")]),a._v(" 分支（Branch）")]),a._v(" "),r("p",[a._v("本项目只使用一个分支，即 master。所有更改全部提交进 master，并确保 master 在任一时刻都是可编译可使用的。")]),a._v(" "),r("h3",{attrs:{id:"发布（release）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#发布（release）"}},[a._v("#")]),a._v(" 发布（Release）")]),a._v(" "),r("p",[a._v("尽量使用自动化工具发布，比如 v2ray-core 使用 Travis-ci 作为自动编译和发布工具。")]),a._v(" "),r("h3",{attrs:{id:"引用其它项目"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#引用其它项目"}},[a._v("#")]),a._v(" 引用其它项目")]),a._v(" "),r("ul",[r("li",[a._v("Golang\n"),r("ul",[r("li",[a._v("产品代码只能使用 golang 的标准库，即名称不包含任何网址的包；")]),a._v(" "),r("li",[a._v("测试代码可以使用 golang.org/x/... ；")]),a._v(" "),r("li",[a._v("如需引用其它项目请事先创建 Issue 讨论；")])])]),a._v(" "),r("li",[a._v("其它\n"),r("ul",[r("li",[a._v("只要不违反双方的协议（本项目为 MIT），且对项目有帮助的工具，都可以使用。")])])])]),a._v(" "),r("h2",{attrs:{id:"开发流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#开发流程"}},[a._v("#")]),a._v(" 开发流程")]),a._v(" "),r("h3",{attrs:{id:"写代码之前"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#写代码之前"}},[a._v("#")]),a._v(" 写代码之前")]),a._v(" "),r("p",[a._v("发现任何问题，或对项目有任何想法，请立即创建 Issue 讨论之，以减少重复劳动和消耗在代码上的时间。")]),a._v(" "),r("h3",{attrs:{id:"修改代码"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#修改代码"}},[a._v("#")]),a._v(" 修改代码")]),a._v(" "),r("ul",[r("li",[a._v("Golang\n"),r("ul",[r("li",[a._v("请参考 "),r("a",{attrs:{href:"https://golang.org/doc/effective_go.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Effective Go"),r("OutboundLink")],1),a._v("；")]),a._v(" "),r("li",[a._v("每一次 commit 之前请运行： gofmt -w v2ray.com/core/")]),a._v(" "),r("li",[a._v("每一次 commit 之前请确保测试通过： go test v2ray.com/core/...")]),a._v(" "),r("li",[a._v("提交 PR 之前请确保新增代码有超过 70% 的代码覆盖率（code coverage）。")])])]),a._v(" "),r("li",[a._v("其它\n"),r("ul",[r("li",[a._v("请注意代码的可读性")])])])]),a._v(" "),r("h3",{attrs:{id:"pull-request"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pull-request"}},[a._v("#")]),a._v(" Pull Request")]),a._v(" "),r("ul",[r("li",[a._v("提交 PR 之前请先运行 git pull 以确保 merge 可顺利进行；")]),a._v(" "),r("li",[a._v("一个 PR 只做一件事，如有对多个 bug 的修复，请对每一个 bug 提交一个 PR；")]),a._v(" "),r("li",[a._v("由于 Golang 的特殊需求（Package path），Go 项目的 PR 流程和其它项目有所不同：\n"),r("ol",[r("li",[a._v("先 Fork 本项目，创建你自己的 github.com/your/v2ray-core；")]),a._v(" "),r("li",[a._v("在你的 Go workspace 中运行："),r("code",[a._v("go get -u v2ray.com/core/...")]),a._v("；")]),a._v(" "),r("li",[a._v("在 go get 创建的 v2ray-core 目录中运行："),r("code",[a._v("git remote add fork https://github.com/you/cooltool.git")]),a._v("；")]),a._v(" "),r("li",[a._v("然后你可以在 v2ray-core 中修改代码，由于这是一个 v2ray 的 clone，import path 不受影响；")]),a._v(" "),r("li",[a._v("修改完成之后，运行："),r("code",[a._v("git push fork")]),a._v("；")]),a._v(" "),r("li",[a._v("然后去你的 fork（就是 v2ray.com/core）中发一个 PR 即可；")]),a._v(" "),r("li",[a._v("以上内容修改自"),r("a",{attrs:{href:"http://blog.campoy.cat/2014/03/github-and-go-forking-pull-requests-and.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("这篇文章"),r("OutboundLink")],1),a._v("。")])])])]),a._v(" "),r("h3",{attrs:{id:"对代码的修改"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#对代码的修改"}},[a._v("#")]),a._v(" 对代码的修改")]),a._v(" "),r("h4",{attrs:{id:"功能性问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#功能性问题"}},[a._v("#")]),a._v(" 功能性问题")]),a._v(" "),r("p",[a._v("请提交至少一个测试用例（test case）来验证对现有功能的改动。")]),a._v(" "),r("h4",{attrs:{id:"性能相关"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#性能相关"}},[a._v("#")]),a._v(" 性能相关")]),a._v(" "),r("p",[a._v("请提交必要的测试数据来证明现有代码的性能缺陷，或是新增代码的性能提升。")]),a._v(" "),r("h4",{attrs:{id:"新功能"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#新功能"}},[a._v("#")]),a._v(" 新功能")]),a._v(" "),r("ul",[r("li",[a._v("如果新增功能对已有功能不影响，请提供可以开启/关闭的开关（如 flag），并使新功能保持默认关闭的状态；")]),a._v(" "),r("li",[a._v("大型新功能（比如增加一个新的协议）开发之前，请先提交一个 issue，讨论完毕之后再进行开发。")])]),a._v(" "),r("h4",{attrs:{id:"其它"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[a._v("#")]),a._v(" 其它")]),a._v(" "),r("p",[a._v("视具体情况而定。")]),a._v(" "),r("h2",{attrs:{id:"v2ray-编码规范"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#v2ray-编码规范"}},[a._v("#")]),a._v(" V2Ray 编码规范")]),a._v(" "),r("p",[a._v("以下内容适用于 V2Ray 中的 Golang 代码。")]),a._v(" "),r("h3",{attrs:{id:"代码结构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#代码结构"}},[a._v("#")]),a._v(" 代码结构")]),a._v(" "),r("div",{staticClass:"language-text extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("v2ray-core\n├── app        // 应用模块\n│   ├── router // 路由\n├── common     // 公用代码\n├── proxy      // 通讯协议，参见[协议列表](../chapter_02/02_protocols.md)\n│   ├── blackhole\n│   ├── dokodemo-door\n│   ├── freedom\n│   ├── socks\n│   ├── vmess\n├── transport  // 传输模块\n")])])]),r("h3",{attrs:{id:"编码规范"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#编码规范"}},[a._v("#")]),a._v(" 编码规范")]),a._v(" "),r("p",[a._v("基本和 Golang 的官方推荐做法基本一致，有一些例外。写在这里以方便大家熟悉 Golang。")]),a._v(" "),r("h4",{attrs:{id:"命名"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#命名"}},[a._v("#")]),a._v(" 命名")]),a._v(" "),r("ul",[r("li",[a._v("文件和目录名尽量使用单个英文单词，比如 hello.go；\n"),r("ul",[r("li",[a._v("如果实在没办法，则目录使用连接线／文件名使用下划线连接两个（或多个单词），比如 hello-world/hello_again.go；")]),a._v(" "),r("li",[a._v("测试代码使用 _test.go 结尾；")])])]),a._v(" "),r("li",[a._v("类型使用 Pascal 命名法，比如 ConnectionHandler；\n"),r("ul",[r("li",[a._v("对缩写不强制小写，即 HTML 不必写成 Html；")])])]),a._v(" "),r("li",[a._v("公开成员变量也使用 Pascal 命名法；")]),a._v(" "),r("li",[a._v("私有成员变量使用"),r("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E9%A7%9D%E5%B3%B0%E5%BC%8F%E5%A4%A7%E5%B0%8F%E5%AF%AB",target:"_blank",rel:"noopener noreferrer"}},[a._v("小驼峰式命名法"),r("OutboundLink")],1),a._v("，如 privateAttribute；")]),a._v(" "),r("li",[a._v("为了方便重构，方法建议全部使用 Pascal 命名法；\n"),r("ul",[r("li",[a._v("尽管 Golang 中的以大小写区分公开和私有方法，但在实际操作中并不方便。")]),a._v(" "),r("li",[a._v("完全私有的类型放入 internal。")])])])]),a._v(" "),r("h4",{attrs:{id:"内容组织"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#内容组织"}},[a._v("#")]),a._v(" 内容组织")]),a._v(" "),r("ul",[r("li",[a._v("一个文件包含一个主要类型，及其相关的私有函数等；")]),a._v(" "),r("li",[a._v("测试相关的文件，如 Mock 等工具类，放入 testing 子目录；")])])])}),[],!1,null,null,null);t.default=v.exports}}]);