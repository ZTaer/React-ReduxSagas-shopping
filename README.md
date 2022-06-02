## 如果不能正常安装请尝试此方式:

# 权限问题安装方式: 
<pre>
    0. yarn --unsafe-perm

    1. 如果还是报错，这时候你需要删除node_module和 .lock文件，重新安装
</pre>

# 极端环境安装方式:
<pre>
    0. npm i -g yarn ( 安装yarn )

    1. yarn config set "strict-ssl" false -g ( 放宽yarn安装源的限制 )

    2. yarn install --registry https://registry.npm.taobao.org/  ( 临时修改安装源 --> 永久: https://baijiahao.baidu.com/s?id=1716928054770882295&wfr=spider&for=pc )
</pre>


