(function () {
  var links = document.querySelectorAll('.email-link');
  for (var i=0; i<links.length; i++) {
    var el = links[i];
    var u = el.getAttribute('data-user');
    var d = el.getAttribute('data-domain');
    var s = encodeURIComponent(el.getAttribute('data-subject') || '');
    var b = el.getAttribute('data-body') || '';
    var href = 'mailto:' + u + '@' + d;
    if (s) href += '?subject=' + s;
    if (b) href += (s ? '&' : '?') + 'body=' + b;
    el.setAttribute('href', href);
    el.setAttribute('rel', 'nofollow');
  }
})();
