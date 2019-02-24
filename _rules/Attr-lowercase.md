---
layout: default
title: Attr-lowercase
---
# Rule ID: `attr-lowercase`

Attribute name must be lowercase.

Level: `error`

good:

    <img src="test.png" alt="test">
    
bad:

    <img SRC="test.png" ALT="test">

config value:

1. true: enable rule
2. false: disable rule
3. ['viewBox', 'test']: Ignore some attr name