---
layout: default
title: Head-script-disabled
---
# Rule ID: `head-script-disabled`

The script tag can not be used in head.

Level: `warning`

good:

    <body><script type="text/javascript" src="test.js"></script></body>
    
bad:

    <head><script type="text/javascript" src="test.js"></script></head>

config value:

1. true: enable rule
2. false: disable rule