---
layout: default
title: Attr-value-not-empty
---
# Rule ID: `attr-value-not-empty`

Attribute must set value.

Level: `warning`

good:

    <input type="button" disabled="disabled">
    
bad:

    <input type="button" disabled>

config value:

1. true: enable rule
2. false: disable rule