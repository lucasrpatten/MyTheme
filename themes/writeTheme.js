const fs = require('fs');

const Variables = {
  "name": "Variables",
  "scope": [
      "variable",
      "string constant.other.placeholder"
  ],
  "settings": {
      "foreground": "#f9ffee"
  }
}
const Comment = {
  "name": "Comment",
  "scope": [
      "comment",
      "punctuation.definition.comment"
  ],
  "settings": {
      "fontStyle": "italic",
      "foreground": "#7a8f99"
  }
}
const Invalid = {
    "name": "Invalid",
    "scope": [
        "invalid",
        "invalid.illegal"
    ],
    "settings": {
        "foreground": "#FF5370"
    }
}
const Quotes = {
  "name": "Quotes",
  "scope": [
      "punctuation.definition.string.begin",
      "punctuation.definition.string.end"
  ],
  "settings": {
      "fontStyle": "bold",
      "foreground": "#f37a5c"
  }
}
const Tag =       {
    "name": "Tag",
    "scope": [
        "entity.name.tag",
        "meta.tag.sgml",
        "markup.deleted.git_gutter"
    ],
    "settings": {
        "foreground": "#f07178"
    }
}
const jsonKey0 = {
    "name": "JSON Key - Level 0",
    "scope": [
        "source.json meta.structure.dictionary.json support.type.property-name.json"
    ],
    "settings": {
        "foreground": "#C792EA"
    }
}
const jsonKey1 = {
    "name": "JSON Key - Level 1",
    "scope": [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
    ],
    "settings": {
        "foreground": "#FFCB6B"
    }
}
const jsonKey2 = {
    "name": "JSON Key - Level 2",
    "scope": [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
    ],
    "settings": {
        "foreground": "#F78C6C"
    }
}
const jsonKey3 = {
    "name": "JSON Key - Level 3",
    "scope": [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
    ],
    "settings": {
        "foreground": "#FF5370"
    }
}
const jsonKey4 = {
    "name": "JSON Key - Level 4",
    "scope": [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
    ],
    "settings": {
        "foreground": "#C17E70"
    }
}
const jsonKey5 = {
    "name": "JSON Key - Level 5",
    "scope": [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
    ],
    "settings": {
        "foreground": "#82AAFF"
    }
}
const jsonKey6 = {
    "name": "JSON Key - Level 6",
    "scope": [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
    ],
    "settings": {
        "foreground": "#f07178"
    }
}
const jsonKey7 = {
    "name": "JSON Key - Level 7",
    "scope": [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
    ],
    "settings": {
        "foreground": "#C792EA"
    }
}
const jsonKey8 =       {
    "name": "JSON Key - Level 8",
    "scope": [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
    ],
    "settings": {
        "foreground": "#C3E88D"
    }
}
const jsonKeys = {
    jsonKey0,jsonKey1,jsonKey2,jsonKey3,jsonKey4,jsonKey5,jsonKey6,jsonKey7,jsonKey8
}
const MarkdownPlain = {
    "name": "Markdown - Plain",
    "scope": [
        "text.html.markdown",
        "punctuation.definition.list_item.markdown"
    ],
    "settings": {
        "foreground": "#EEFFFF"
    }
}
const MarkdownRawInline = {
    "name": "Markdown - Markup Raw Inline",
    "scope": [
        "text.html.markdown markup.inline.raw.markdown"
    ],
    "settings": {
        "foreground": "#C792EA"
    }
}
const MarkdownRawInlinePunctuation = {
    "name": "Markdown - Markup Raw Inline Punctuation",
    "scope": [
        "text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown"
    ],
    "settings": {
        "foreground": "#65737E"
    }
}
const MarkdownHeading = {
    "name": "Markdown - Heading",
    "scope": [
        "markdown.heading",
        "markup.heading | markup.heading entity.name",
        "markup.heading.markdown punctuation.definition.heading.markdown"
    ],
    "settings": {
        "foreground": "#C3E88D"
    }
}
const MarkdownItalic = {
    "name": "Markup - Italic",
    "scope": [
        "markup.italic"
    ],
    "settings": {
        "fontStyle": "italic",
        "foreground": "#f07178"
    }
}
const MarkdownBold = {
    "name": "Markup - Bold",
    "scope": [
        "markup.bold",
        "markup.bold string"
    ],
    "settings": {
        "fontStyle": "bold",
        "foreground": "#f07178"
    }
}
const MarkdownBoldItalic = {
    "name": "Markup - Bold-Italic",
    "scope": [
        "markup.bold markup.italic",
        "markup.italic markup.bold",
        "markup.quote markup.bold",
        "markup.bold markup.italic string",
        "markup.italic markup.bold string",
        "markup.quote markup.bold string"
    ],
    "settings": {
        "fontStyle": "bold",
        "foreground": "#f07178"
    }
}
const MarkdownUnderline = {
    "name": "Markup - Underline",
    "scope": [
        "markup.underline"
    ],
    "settings": {
        "fontStyle": "underline",
        "foreground": "#F78C6C"
    }
}
const MarkdownBlockquote = {
    "name": "Markdown - Blockquote",
    "scope": [
        "markup.quote punctuation.definition.blockquote.markdown"
    ],
    "settings": {
        "foreground": "#65737E"
    }
}
const MarkdownQuote = {
    "name": "Markup - Quote",
    "scope": [
        "markup.quote"
    ],
    "settings": {
        "fontStyle": "italic"
    }
}
const MarkdownLink = {
    "name": "Markdown - Link",
    "scope": [
        "string.other.link.title.markdown"
    ],
    "settings": {
        "foreground": "#82AAFF"
    }
}
const MarkdownLinkDescription = {
    "name": "Markdown - Link Description",
    "scope": [
        "string.other.link.description.title.markdown"
    ],
    "settings": {
        "foreground": "#C792EA"
    }
}
const MarkdownLinkAnchor = {
    "name": "Markdown - Link Anchor",
    "scope": [
        "constant.other.reference.link.markdown"
    ],
    "settings": {
        "foreground": "#FFCB6B"
    }
}
const MarkdownRawBlock = {
    "name": "Markup - Raw Block",
    "scope": [
        "markup.raw.block"
    ],
    "settings": {
        "foreground": "#C792EA"
    }
}
const MarkdownRawBlockFenced = {
    "name": "Markdown - Raw Block Fenced",
    "scope": [
        "markup.raw.block.fenced.markdown"
    ],
    "settings": {
        "foreground": "#00000050"
    }
}
const MarkdownFencedBodeBlock = {
    "name": "Markdown - Fenced Bode Block",
    "scope": [
        "punctuation.definition.fenced.markdown"
    ],
    "settings": {
        "foreground": "#00000050"
    }
}
const MarkdownFencedBodeBlockVariable = {
    "name": "Markdown - Fenced Bode Block Variable",
    "scope": [
        "markup.raw.block.fenced.markdown",
        "variable.language.fenced.markdown",
        "punctuation.section.class.end"
    ],
    "settings": {
        "foreground": "#EEFFFF"
    }
}
const MarkdownFencedLanguage = {
    "name": "Markdown - Fenced Language",
    "scope": [
        "variable.language.fenced.markdown"
    ],
    "settings": {
        "foreground": "#65737E"
    }
}
const MarkdownSeperator = {
    "name": "Markdown - Separator",
    "scope": [
        "meta.separator"
    ],
    "settings": {
        "fontStyle": "bold",
        "foreground": "#65737E"
    }
}
const MarkdownTable = {
    "name": "Markup - Table",
    "scope": [
        "markup.table"
    ],
    "settings": {
        "foreground": "#EEFFFF"
    }
}
const Markdown = {
    MarkdownPlain, MarkdownRawInline, MarkdownRawInlinePunctuation, MarkdownHeading, MarkdownItalic, MarkdownBold, MarkdownBoldItalic, MarkdownUnderline, MarkdownUnderline, MarkdownBlockquote, MarkdownQuote, MarkdownLink, MarkdownLinkDescription, MarkdownLinkAnchor, MarkdownRawBlock, MarkdownRawBlockFenced, MarkdownFencedBodeBlock, MarkdownFencedBodeBlockVariable, MarkdownFencedLanguage, MarkdownSeperator, MarkdownTable
}
const Url = {
    "name": "URL",
    "scope": [
        "*url*",
        "*link*",
        "*uri*"
    ],
    "settings": {
        "fontStyle": "underline"
    }
}
const EscapeCharacters = {
    "name": "Escape Characters",
    "scope": [
        "constant.character.escape"
    ],
    "settings": {
        "foreground": "#db8dae"
    }
}
const Regex = {
    "name": "Regular Expressions",
    "scope": [
        "string.regexp"
    ],
    "settings": {
        "foreground": "#89DDFF"
    }
}
const SubMethods = {
    "name": "Sub-methods",
    "scope": [
        "entity.name.module.js",
        "variable.import.parameter.js",
        "variable.other.class.js"
    ],
    "settings": {
        "foreground": "#FF5370"
    }
}
const settings = {
  "colors": {
      "activityBarBadge.background": "#007acc",
      "editor.background": "#1f1e24",
      "editor.foreground": "#eef0ff",
      "sideBarTitle.foreground": "#bbbbbb"
  },
  "name": "MyTheme",
  "tokenColors": [
      ,
      Variables,
      Comment,
      {
          "name": "Colors",
          "scope": [
              "constant.other.color"
          ],
          "settings": {
              "foreground": "#ffffff"
          }
      },
      Invalid,
      {
          "name": "Keyword, Storage",
          "scope": [
              "keyword",
              "storage.type",
              "storage.modifier"
          ],
          "settings": {
              "foreground": "#2dd49d"
          }
      },
      {
          "name": "Operator, Misc",
          "scope": [
              "keyword.control",
              "constant.other.color",
              "punctuation",
              "meta.tag",
              "punctuation.definition.tag",
              "punctuation.separator.inheritance.php",
              "punctuation.definition.tag.html",
              "punctuation.definition.tag.begin.html",
              "punctuation.definition.tag.end.html",
              "punctuation.section.embedded",
              "keyword.other.template",
              "keyword.other.substitution"
          ],
          "settings": {
              "foreground": "#89DDFF"
          }
      },
      Quotes,
      Tag,
      {
          "name": "Function, Special Method",
          "scope": [
              "entity.name.function",
              "meta.function-call",
              "variable.function",
              "support.function",
              "keyword.other.special-method"
          ],
          "settings": {
              "foreground": "#b691f3"
          }
      },
      {
          "name": "Block Level Variables",
          "scope": [
              "meta.block variable.other"
          ],
          "settings": {
              "foreground": "#f07178"
          }
      },
      {
          "name": "Other Variable, String Link",
          "scope": [
              "support.other.variable",
              "string.other.link"
          ],
          "settings": {
              "foreground": "#f07178"
          }
      },
      {
          "name": "Number, Constant, Function Argument, Tag Attribute, Embedded",
          "scope": [
              "constant.numeric",
              "constant.language",
              "support.constant",
              "constant.character",
              "constant.escape",
              "variable.parameter",
              "keyword.other.unit",
              "keyword.other"
          ],
          "settings": {
              "foreground": "#F78C6C"
          }
      },
      {
          "name": "Symbols, Inherited Class, Markup Heading",
          "scope": [
              "constant.other.symbol",
              "constant.other.key",
              "entity.other.inherited-class",
              "markup.heading",
              "markup.inserted.git_gutter",
              "meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js"
          ],
          "settings": {
              "foreground": "#e8c18d"
          }
      },
      {
          "name": "String",
          "scope": [
              "string"
          ],
          "settings": {
              "foreground": "#ec9d5b"
          }
      },
      {
          "name": "Class, Support",
          "scope": [
              "entity.name",
              "support.type",
              "support.class",
              "support.other.namespace.use.php",
              "meta.use.php",
              "support.other.namespace.php",
              "markup.changed.git_gutter",
              "support.type.sys-types"
          ],
          "settings": {
              "foreground": "#82d1ff"
          }
      },
      {
          "name": "Entity Types",
          "scope": [
              "support.type"
          ],
          "settings": {
              "foreground": "#B2CCD6"
          }
      },
      {
          "name": "CSS Class and Support",
          "scope": [
              "source.css support.type.property-name",
              "source.sass support.type.property-name",
              "source.scss support.type.property-name",
              "source.less support.type.property-name",
              "source.stylus support.type.property-name",
              "source.postcss support.type.property-name"
          ],
          "settings": {
              "foreground": "#B2CCD6"
          }
      },
SubMethods,
      {
          "name": "Language methods",
          "scope": [
              "variable.language"
          ],
          "settings": {
              "fontStyle": "italic",
              "foreground": "#FF5370"
          }
      },
      {
          "name": "entity.name.method.js",
          "scope": [
              "entity.name.method.js"
          ],
          "settings": {
              "fontStyle": "italic",
              "foreground": "#82AAFF"
          }
      },
      {
          "name": "meta.method.js",
          "scope": [
              "meta.class-method.js entity.name.function.js",
              "variable.function.constructor"
          ],
          "settings": {
              "foreground": "#82AAFF"
          }
      },
      {
          "name": "Attributes",
          "scope": [
              "entity.other.attribute-name"
          ],
          "settings": {
              "foreground": "#C792EA"
          }
      },
      {
          "name": "HTML Attributes",
          "scope": [
              "text.html.basic entity.other.attribute-name.html",
              "text.html.basic entity.other.attribute-name"
          ],
          "settings": {
              "fontStyle": "italic",
              "foreground": "#FFCB6B"
          }
      },
      {
          "name": "CSS Classes",
          "scope": [
              "entity.other.attribute-name.class"
          ],
          "settings": {
              "foreground": "#FFCB6B"
          }
      },
      {
          "name": "CSS ID's",
          "scope": [
              "source.sass keyword.control"
          ],
          "settings": {
              "foreground": "#82AAFF"
          }
      },
      {
          "name": "Inserted",
          "scope": [
              "markup.inserted"
          ],
          "settings": {
              "foreground": "#C3E88D"
          }
      },
      {
          "name": "Deleted",
          "scope": [
              "markup.deleted"
          ],
          "settings": {
              "foreground": "#FF5370"
          }
      },
      {
          "name": "Changed",
          "scope": [
              "markup.changed"
          ],
          "settings": {
              "foreground": "#C792EA"
          }
      },
Regex,
EscapeCharacters,
    Url,
      {
          "name": "Decorators",
          "scope": [
              "tag.decorator.js entity.name.tag.js",
              "tag.decorator.js punctuation.definition.tag.js"
          ],
          "settings": {
              "fontStyle": "italic",
              "foreground": "#82AAFF"
          }
      },
      {
          "name": "ES7 Bind Operator",
          "scope": [
              "source.js constant.other.object.key.js string.unquoted.label.js"
          ],
          "settings": {
              "fontStyle": "italic",
              "foreground": "#FF5370"
          }
      },
      jsonKeys,
      Markdown
  ]
}

fs.writeFile('./MyTheme-color-theme.json', JSON.stringify(settings), function (err) {
  if (err) return console.error();
  console.log(err);
})