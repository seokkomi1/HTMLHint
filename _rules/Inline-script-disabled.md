---
layout: default
title: Inline-script-disabled
---
# Rule ID: `inline-script-disabled`

Inline script cannot be use.

Level: `warning`

bad:

    <img src="test.gif" onclick="alert(1);">
    <img src="javascript:alert(1)">
    <a href="javascript:alert(1)">test1</a>

config value:

1. true: enable rule
2. false: disable rule