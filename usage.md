---
layout: default
title: Usage
---
# Usage

You can learn how to use HTMLHint here.

## Cli

1. install & hint
        npm install htmlhint -g
        htmlhint -V
        htmlhint --help
        htmlhint www
        htmlhint www/test.html
        htmlhint www/**/*.xhtml
        htmlhint www/**/*.{htm,html}
        htmlhint http://www.alibaba.com/
        cat test.html | htmlhint stdin
2. results

           test.html
              L5 |    </head>
                      ^ <title> must be present in <head> tag. (title-require)
              L8 |    </body>
                      ^ Tag must be paired, missing: [ </div> ], start tag match failed [ <div> ] on line 7. (tag-pair)

        2 errors in 1 files

3. config rules

    search `.htmlhintrc` file in current directory and all parent directories:

        htmlhint
        htmlhint test.html

    custom config file:

        htmlhint --config htmlhint.conf test.html

    custom rules:

        htmlhint --rules tag-pair,id-class-value=underline test.html

    Inline rules in `test.html`:

        <!--htmlhint tag-pair,id-class-value:underline -->
        <html>
        <head>
            ...

## JavaScript with node

1. install

        npm install htmlhint --save

2. Hint your html code:

        var HTMLHint  = require("htmlhint").HTMLHint;
        var messages = HTMLHint.verify('<ul><li></ul>', {'tag-pair': true});

## JavaScript with browser

1. Download: [https://raw.github.com/htmlhint/HTMLHint/master/lib/htmlhint.js](https://raw.github.com/htmlhint/HTMLHint/master/lib/htmlhint.js)

2. Hint your html code:

        <script src="htmlhint.js"></script>
        <script>
            var messages = HTMLHint.verify('<ul><li></ul>', {'tag-pair': true});
        </script>

## About Rules

Read more about all rules: [Rules](Rules)

If rules is undefined, it will use default ruleset:

    {
        "tagname-lowercase": true,
        "attr-lowercase": true,
        "attr-value-double-quotes": true,
        "doctype-first": true,
        "tag-pair": true,
        "spec-char-escape": true,
        "id-unique": true,
        "src-not-empty": true,
        "attr-no-duplication": true,
        "title-require": true
    }

## About `.htmlhintrc`

You can config the `.htmlhintrc' like this, and place the file in your project root folder:

`.htmlhintrc`

    {
        "tagname-lowercase": true,
        "attr-lowercase": true,
        "attr-value-double-quotes": true,
        "doctype-first": true
    }

## Load custom rules

`rules/test-rule.js`

    module.exports = function(HTMLHint) {
        HTMLHint.addRule({
            id: 'test-rule',
            description: 'test rule.',
            init: function(parser, reporter){
                var self = this;
                parser.addListener('tagstart', function(event){
                    var tagName = event.tagName.toLowerCase();
                    if(tagName === 'body'){
                        reporter.warn('Found body.', event.line, event.col, self, event.raw);
                    }
                });
            }
        });
    };

Load rules:

    htmlhint --rulesdir ./rules/ --rules test-rule

## How to report bugs

You can create a [new issue](https://github.com/htmlhint/HTMLHint/issues/new) in GitHub and describe your problem or suggestion.