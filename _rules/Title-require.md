---
layout: default
title: Title-require
---
# Rule ID: `title-require`

`<title>` must be present in `<head>` tag.

Level: `error`

good:

    <html><head><title>test</title></head></html>

bad:

    <html><head></head></html>
    <html><head><title></title></head></html>
    <html><title></title><head></head></html>

config value:

1. true: enable rule
2. false: disable rule