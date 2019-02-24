---
layout: default
title: Tag-pair
---
# Rule ID: `tag-pair`

Tag must be paired.

Level: `error`

good:

    <ul><li></li></ul>
    
bad:

    <ul><li></ul>
    <ul></li></ul>

config value:

1. true: enable rule
2. false: disable rule