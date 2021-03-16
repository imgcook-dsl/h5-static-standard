module.exports =  {
  "componentName": "Page",
  "id": "Shape_0",
  "rect": {
    "x": 0,
    "y": 0,
    "width": 342,
    "height": 588
  },
  "smart": {},
  "props": {
    "style": {
      "display": "flex",
      "alignItems": "flex-start",
      "flexDirection": "column",
      "borderRadius": "18px",
      "backgroundColor": "#ffffff",
      "width": "342px",
      "height": "588px",
      "overflow": "hidden"
    },
    "className": "box"
  },
  "children": [{
    "componentName": "Div",
    "id": "Block_366080",
    "rect": {
      "x": 0,
      "y": 0,
      "width": 342,
      "height": 342
    },
    "smart": {},
    "props": {
      "style": {
        "display": "flex",
        "position": "relative",
        "width": "342px",
        "height": "342px"
      },
      "className": "bd"
    },
    "children": [{
      "componentName": "Div",
      "id": "Shape_7",
      "rect": {
        "x": 0,
        "y": 0,
        "width": 342,
        "height": 342
      },
      "smart": {},
      "props": {
        "style": {
          "width": "342px",
          "height": "342px",
          "position": "absolute",
          "top": "0px",
          "left": "0px",
          "backgroundColor": "#d8d8d8",
          "overflow": "hidden"
        },
        "className": "color"
      },
      "condition": true
    }, {
      "componentName": "Image",
      "id": "Image_8",
      "rect": {
        "x": 0,
        "y": 0,
        "width": 342,
        "height": 342
      },
      "smart": {},
      "props": {
        "style": {
          "position": "absolute",
          "top": "0px",
          "left": "0px",
          "opacity": "1.00",
          "width": "342px",
          "height": "342px"
        },
        "className": "layer",
        "src": "{{this.state.fields.img}}"
      },
      "condition": true
    }]
  }, {
    "componentName": "Div",
    "id": "Block_713345",
    "rect": {
      "x": 0,
      "y": 357,
      "width": 341,
      "height": 76
    },
    "smart": {},
    "props": {
      "style": {
        "display": "flex",
        "flexDirection": "row",
        "justifyContent": "center",
        "marginTop": "15px",
        "width": "341px"
      },
      "className": "main"
    },
    "children": [{
      "componentName": "Div",
      "id": "Shape_10",
      "rect": {
        "x": 20,
        "y": 357,
        "width": 302,
        "height": 76
      },
      "smart": {},
      "props": {
        "style": {
          "display": "flex",
          "flexDirection": "row",
          "alignItems": "flex-start",
          "width": "302px",
          "height": "76px",
          "position": "relative",
          "overflow": "hidden"
        },
        "className": "titleWrap"
      },
      "children": [{
        "componentName": "Text",
        "id": "Text_11_0",
        "rect": {
          "x": 20,
          "y": 357,
          "width": 295,
          "height": 72
        },
        "smart": {},
        "props": {
          "style": {
            "display": "inline",
            "fontFamily": "HelveticaNeue, Helvetica Neue",
            "height": "72px",
            "fontWeight": "normal",
            "fontSize": 26,
            "color": "#333333",
            "lineHeight": 1.4,
            "textAlign": "left",
            "overflow": "hidden",
            "textIndent": "90px",
            "textOverflow": "ellipsis",
            "lines": 2,
            "whiteSpace": "nowrap"
          },
          "className": "title",
          "text": "{{this.state.fields.name}}",
          "aaa": 123
        }
      }]
    }]
  }, {
    "componentName": "Div",
    "id": "Block_848190",
    "rect": {
      "x": 0,
      "y": 441,
      "width": 341,
      "height": 30
    },
    "smart": {},
    "props": {
      "style": {
        "display": "flex",
        "flexDirection": "row",
        "justifyContent": "center",
        "marginTop": "8px",
        "width": "341px"
      },
      "className": "submain"
    },
    "children": [{
      "componentName": "Div",
      "id": "Shape_15",
      "rect": {
        "x": 20,
        "y": 441,
        "width": 302,
        "height": 30
      },
      "smart": {},
      "props": {
        "style": {
          "display": "flex",
          "flexDirection": "row",
          "alignItems": "flex-start",
          "width": "302px",
          "height": "30px",
          "overflow": "hidden"
        },
        "className": "block_2"
      },
      "children": [{
        "componentName": "Div",
        "id": "Shape_20",
        "rect": {
          "x": 20,
          "y": 441,
          "width": 36,
          "height": 30
        },
        "smart": {},
        "props": {
          "style": {
            "boxSizing": "border-box",
            "display": "flex",
            "alignItems": "center",
            "flexDirection": "row",
            "borderTopLeftRadius": "8px",
            "borderBottomLeftRadius": "8px",
            "backgroundColor": "#ff0033",
            "paddingRight": "1px",
            "paddingLeft": "3px",
            "width": "36px",
            "height": "30px"
          },
          "className": "block"
        },
        "children": [{
          "componentName": "Text",
          "id": "Text_21_0",
          "rect": {
            "x": 23,
            "y": 444,
            "width": 30,
            "height": 24
          },
          "smart": {},
          "props": {
            "style": {
              "display": "flex",
              "flexDirection": "row",
              "justifyContent": "center",
              "width": "30px",
              "height": "24px",
              "lineHeight": "24px",
              "whiteSpace": "nowrap",
              "color": "#ffffff",
              "fontSize": "20px",
              "fontWeight": 400,
              "lines": 1
            },
            "text": "券",
            "className": "voucher"
          }
        }, {
          "componentName": "Image",
          "id": "Image_22",
          "rect": {
            "x": 53,
            "y": 445,
            "width": 1,
            "height": 22
          },
          "smart": {},
          "props": {
            "style": {
              "width": "1px",
              "height": "22px"
            },
            "src": "https://img.alicdn.com/tfs/TB12hYljoD1gK0jSZFGXXbd3FXa-2-44.png",
            "className": "verticalLine"
          }
        }]
      }, {
        "componentName": "Div",
        "id": "Shape_18",
        "rect": {
          "x": 56,
          "y": 441,
          "width": 56,
          "height": 30
        },
        "smart": {},
        "props": {
          "style": {
            "boxSizing": "border-box",
            "display": "flex",
            "alignItems": "center",
            "flexDirection": "row",
            "borderTopRightRadius": "8px",
            "borderBottomRightRadius": "8px",
            "backgroundColor": "#ff0033",
            "paddingRight": "9px",
            "paddingLeft": "4px",
            "height": "30px"
          },
          "className": "tagWrap"
        },
        "children": [{
          "componentName": "Text",
          "id": "Text_19_0",
          "rect": {
            "x": 60,
            "y": 444,
            "width": 44,
            "height": 24
          },
          "smart": {},
          "props": {
            "style": {
              "height": "24px",
              "fontWeight": 400,
              "fontSize": "20px",
              "color": "#ffffff",
              "lineHeight": "24px",
              "lines": 1,
              "whiteSpace": "nowrap"
            },
            "className": "tag",
            "text": "{{this.state.fields.couponList[0].quanTitle}}"
          }
        }]
      }, {
        "componentName": "Div",
        "id": "Shape_16",
        "rect": {
          "x": 118,
          "y": 441,
          "width": 100,
          "height": 30
        },
        "smart": {},
        "props": {
          "style": {
            "boxSizing": "border-box",
            "display": "flex",
            "alignItems": "center",
            "flexDirection": "row",
            "marginLeft": "6px",
            "borderRadius": "8px",
            "backgroundColor": "#fff6e3",
            "paddingRight": "9px",
            "paddingLeft": "8px",
            "height": "30px"
          },
          "className": "tagWrap_2"
        },
        "children": [{
          "componentName": "Text",
          "id": "Text_17_0",
          "rect": {
            "x": 126,
            "y": 444,
            "width": 84,
            "height": 24
          },
          "smart": {},
          "props": {
            "style": {
              "height": "24px",
              "fontWeight": 400,
              "fontSize": "20px",
              "color": "#ff4400",
              "lineHeight": "24px",
              "lines": 1,
              "whiteSpace": "nowrap"
            },
            "className": "tag_2",
            "text": "{{this.state.fields.display_rebate + '元'}}"
          }
        }]
      }]
    }]
  }, {
    "componentName": "Div",
    "id": "Block_755534",
    "rect": {
      "x": 0,
      "y": 488,
      "width": 341,
      "height": 36
    },
    "smart": {},
    "props": {
      "style": {
        "display": "flex",
        "flexDirection": "row",
        "justifyContent": "center",
        "marginTop": "17px",
        "width": "341px"
      },
      "className": "row"
    },
    "children": [{
      "componentName": "Div",
      "id": "Shape_1",
      "rect": {
        "x": 20,
        "y": 488,
        "width": 302,
        "height": 36
      },
      "smart": {},
      "props": {
        "style": {
          "display": "flex",
          "flexDirection": "row",
          "alignItems": "flex-start",
          "width": "302px",
          "height": "36px",
          "overflow": "hidden"
        },
        "className": "group"
      },
      "children": [{
        "componentName": "Text",
        "id": "Text_3_0",
        "rect": {
          "x": 20,
          "y": 495,
          "width": 66,
          "height": 26
        },
        "smart": {},
        "props": {
          "style": {
            "marginTop": "7px",
            "width": "66px",
            "height": "26px",
            "lineHeight": "26px",
            "whiteSpace": "nowrap",
            "color": "#999999",
            "fontSize": "22px",
            "fontWeight": 400,
            "lines": 1
          },
          "text": "到手约",
          "className": "shouyue"
        }
      }, {
        "componentName": "Text",
        "id": "text2910361849",
        "rect": {},
        "smart": {},
        "props": {
          "style": {
            "fontSize": "20px",
            "color": "#ff0033",
            "lineHeight": "36px",
            "verticalAlign": "middle",
            "position": "relative",
            "top": "5px",
            "left": "1px",
            "marginLeft": "4px"
          },
          "text": "¥",
          "className": "qian_text"
        }
      }, {
        "componentName": "Text",
        "id": "Text_4_0",
        "rect": {
          "x": 105,
          "y": 488,
          "width": 64,
          "height": 36
        },
        "smart": {},
        "props": {
          "style": {
            "marginLeft": "4px",
            "height": "36px",
            "fontWeight": 600,
            "fontSize": "32px",
            "color": "#ff0033",
            "lineHeight": "36px",
            "lines": 1,
            "whiteSpace": "nowrap",
            "letterSpacing": "0px"
          },
          "className": "count",
          "text": "{{this.state.fields.rebate_price}}"
        }
      }, {
        "componentName": "Text",
        "id": "Text_5_0",
        "rect": {
          "x": 175,
          "y": 494,
          "width": 24,
          "height": 28
        },
        "smart": {},
        "props": {
          "style": {
            "marginTop": "6px",
            "marginLeft": "6px",
            "width": "24px",
            "height": "28px",
            "textDecoration": "line-through",
            "lineHeight": "28px",
            "whiteSpace": "nowrap",
            "color": "#999999",
            "fontSize": "24px",
            "fontWeight": 400,
            "lines": 1
          },
          "text": "￥",
          "className": "originPrice"
        }
      }, {
        "componentName": "Text",
        "id": "Text_6_0",
        "rect": {
          "x": 199,
          "y": 494,
          "width": 29,
          "height": 28
        },
        "smart": {},
        "props": {
          "style": {
            "marginTop": "6px",
            "height": "28px",
            "fontWeight": 400,
            "fontSize": "24px",
            "color": "#999999",
            "lineHeight": "28px",
            "lines": 1,
            "whiteSpace": "nowrap",
            "textDecoration": "line-through"
          },
          "className": "num_2",
          "text": "{{this.state.fields.source_price}}"
        }
      }]
    }]
  }, {
    "componentName": "Text",
    "id": "Text_9_0",
    "rect": {
      "x": 20,
      "y": 544,
      "width": 119,
      "height": 26
    },
    "smart": {},
    "props": {
      "style": {
        "marginTop": "20px",
        "marginLeft": "20px",
        "width": "119px",
        "maxWidth": "310px",
        "height": "26px",
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "lineHeight": "26px",
        "whiteSpace": "nowrap",
        "color": "#999999",
        "fontSize": "22px",
        "fontWeight": 400,
        "lines": 1
      },
      "className": "ft",
      "text": "{{this.state.fields.display_sales}}"
    }
  }],
  "fileName": "index",
  "state": {
    "fields": {
      "couponList": [{
        "couponType": "1",
        "couponValue": "100元",
        "quanTitle": "满105减100"
      }],
      "discount": "2.1",
      "discountText": "2.1折",
      "display_rebate": "约返12.99",
      "display_sales": "销量64",
      "estBuyPrice": "2691",
      "flag_height": "0",
      "flag_url": "",
      "flag_width": "0",
      "img": "https://img.alicdn.com/tfs/TB1OH2pjeH2gK0jSZJnXXaT1FXa-684-684.png",
      "is_sold_out": "0",
      "name": "V领条纹短袖上衣2020新款显瘦T恤打底衫百搭时尚女装小衫29",
      "newFlags": [{
        "attribute": "",
        "content": "超级返",
        "type": "17"
      }, {
        "attribute": "",
        "content": "优惠券",
        "type": "18"
      }],
      "nid": "617306572859",
      "postFree": "true",
      "rebate": "12.99",
      "rebate_price": "129.9",
      "rebate_type": "2",
      "sales": "64",
      "source_price": "229.9"
    }
  }
}