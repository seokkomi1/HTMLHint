---
layout: default
title: Doctype-first
---
# Rule ID: `doctype-first`

Doctype must be first.

Level: `error`

good:

   ```html
   <!DOCTYPE HTML><html>
   ```
    
bad:

    ```html
    <!--comment--><!DOCTYPE HTML><html>
    ```

config value:

1. true: enable rule
2. false: disable rule