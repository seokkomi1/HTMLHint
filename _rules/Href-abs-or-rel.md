---
layout: default
title: Href-abs-or-rel
---
# Rule ID: `href-abs-or-rel`
    
Href must be absolute or relative.

Level: `warning`

good:

    abs: <a href="http://www.alibaba.com/">test1</a> <a href="https://www.alipay.com/">test2</a>
    rel: <a href="test.html">test1</a> <a href="../test.html">test2</a>

config value:

1. abs: absolute mode
2. rel: relative mode
3. false: disable rule