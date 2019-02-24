---
layout: default
title: Id-class-ad-disabled
---
# Rule ID: `id-class-ad-disabled`

Id and class can not use ad keyword, it will blocked by adblock software.

Level: `warning`

good:

    <div id="adcontainer"></div>
    
bad:

    <div id="ad-container"></div>
    <div id="ad_container"></div>

config value:

1. true: enable rule
2. false: disable rule