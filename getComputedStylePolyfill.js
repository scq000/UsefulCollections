// 处理火狐兼容性问题,参考 https://github.com/marcj/css-element-queries/issues/148
function getComputedStyle(element, prop) {
   if (element.currentStyle) {
        return element.currentStyle[prop];
    } else if (window.getComputedStyle && window.getComputedStyle(element, null)) {
        return window.getComputedStyle(element, null).getPropertyValue(prop);
    } else {
        return element.style[prop];
    }
}
