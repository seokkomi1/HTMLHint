---
layout: default
title: Src-not-empty
---
# Rule ID: `src-not-empty`

Src of img(script,link) must set value.

Emtpy of src will visit current page twice.

Level: `error`

good:

	<img src="test.png" />
	<script src="test.js"></script>
	<link href="test.css" type="text/css" />
	<embed src="test.swf">
	<bgsound src="test.mid" />
	<iframe src="test.html">
	<object data="test.swf">
    
bad:

	<img src />
	<script src=""></script>
	<script src></script>
	<link href="" type="text/css" />
	<link href type="text/css" />
	<embed src="">
	<embed src>
	<bgsound src="" />
	<bgsound src />
	<iframe src="">
	<iframe src>
	<object data="">
	<object data>

config value:

1. true: enable rule
2. false: disable rule