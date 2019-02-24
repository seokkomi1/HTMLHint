---
layout: default
title: Spec-char-escape
---
# Rule ID: `spec-char-escape`

Special characters must be escaped.

Level: `error`

good:

    <span>aaa&gt;bbb&lt;ccc</span>
    
bad:

    <span>aaa>bbb<ccc</span>

config value:

1. true: enable rule
2. false: disable rule