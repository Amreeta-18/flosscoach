/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

$.components.register("appear",{defaults:{},api:function(context){$.fn.appear&&($(document).on("appear",'[data-plugin="appear"]',function(){var $item=$(this),animate=$item.data("animate");$item.hasClass("appear-no-repeat")||($item.removeClass("invisible").addClass("animation-"+animate),$item.data("repeat")===!1&&$item.addClass("appear-no-repeat"))}),$(document).on("disappear",'[data-plugin="appear"]',function(){var $item=$(this),animate=$item.data("animate");$item.hasClass("appear-no-repeat")||$item.addClass("invisible").removeClass("animation-"+animate)}))},init:function(context){if($.fn.appear){var defaults=$.components.getDefaults("appear");$('[data-plugin="appear"]',context).appear(defaults),$('[data-plugin="appear"]',context).not(":appeared").addClass("invisible")}}});