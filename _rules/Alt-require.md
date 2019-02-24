---
layout: default
title: Alt-require
---
# Rule ID: `alt-require`

Alt of img must be present and alt of area[href] and input[type=image] must be set value.

Level: `warning`

good:

    <img src="test.png" alt="test">
    <input type="image" alt="test">
    <area shape="circle" coords="180,139,14" href="test.html" alt="test" />
    
bad:

    <img src="test.png">
    <input type="image">
    <area shape="circle" coords="180,139,14" href="test.html" />

config value:

1. true: enable rule
2. false: disable rule