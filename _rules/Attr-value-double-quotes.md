---
layout: default
title: Attr-value-double-quotes
---
# Rule ID: `attr-value-double-quotes`

Attribute value must closed by double quotes.

Level: `error`

good:

    <a href="" title="abc">
    
bad:

    <a href='' title=abc>

config value:

1. true: enable rule
2. false: disable rule