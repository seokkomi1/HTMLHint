---
layout: default
title: Id-class-value
---
# Rule ID: `id-class-value`
    
Id and class value must meet some rules: underline, dash, hump.

Level: `warning`

good:

    underline: <div id="aaa_bbb">
    dash: <div id="aaa-bbb">
    hump: <div id="aaaBbb">

config value:

1. underline: underline mode ( aaa_bb )
2. dash: enable rule ( aaa-bbb )
3. hump: enable rule ( aaaBbb )
4. false: disable rule