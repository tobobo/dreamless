Array.prototype.slice.call(document.querySelectorAll('.author')).forEach(function(el){
  if (el.innerHTML.indexOf('FuturDreamz') > 0) {
    while (!!el.parentNode) {
      el = el.parentNode;
      if (el.nodeName === 'TR') {
        el.parentNode.removeChild(el);
        break;
      }
    }
  }
});
