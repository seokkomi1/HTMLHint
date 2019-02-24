---
layout: default
title: Id-unique
---
# Rule ID: `id-unique`

ID attributes must be unique in the document.

Level: `error`

good:

    <div id="id1"></div><div id="id2"></div>
    
bad:

    <div id="id1"></div><div id="id1"></div>

config value:

1. true: enable rule
2. false: disable rule