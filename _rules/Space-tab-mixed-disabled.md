---
layout: default
title: Space-tab-mixed-disabled
---
# Rule ID: `space-tab-mixed-disabled`

Spaces and tabs can not mixed in front of line.

Level: `warning`

good:
```
   →   →<img src="tab.png" />
········<img src="space.png" />
```
bad:
```
   →····<img src="tab_before_space.png" />
····   →<img src="space_before_tab.png" />
```
Note: in the examples above, spaces and tabs are represented by `·` and `→`, respectively, to make the difference visible.

config value:

1. space: space mode (only space for indentation)
2. space4: space mode and require length
3. tab: tab mode (only tab for indentation)
4. false: disable rule