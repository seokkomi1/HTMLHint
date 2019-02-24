---
layout: default
title: Attr-no-duplication
---
# Rule ID: `attr-no-duplication`

The same attribute can't be specified twice.

Level: `error`

good:

    <img src="a.png" />
    
bad:

    <img src="a.png" src="b.png" />

config value:

1. true: enable rule
2. false: disable rule