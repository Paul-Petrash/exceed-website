import {sperc} from './header_footer.js';

const force_domain = ''//'http://95.182.121.107:9900'

export var sendForm = function (method, url, params, onResolve, onReject, isForm = false) {
  params = params || {}
  var xhr = new XMLHttpRequest();
  if (method === 'GET') {
    if (url.indexOf("?") < 0) {
      url += '?'
    } else {
      url = url + '&'
    }
    for (var key in params) {
      url += key + '=' + params[key] + '&'
    }
  }
  if (url[url.length - 1] == '&') {
    url = url.slice(0, -1);
  }
  xhr.open(method, (params.domain || force_domain) + url, true);
  if(!isForm){
    xhr.setRequestHeader('Content-Type', 'application/json');
  }
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 0) {
      onReject && onReject()
    }
  };
  xhr.addEventListener('load', function () {
    if (xhr.readyState !== 4 || xhr.status !== 200) {
      onReject && onReject(xhr.status, xhr.responseText)
    } else {
      try {
        var text = JSON.parse(xhr.responseText)
      } catch (e) {
        text = xhr.responseText
      }
      onResolve && onResolve(text)
    }
  }, false);
  var str = isForm ? params : JSON.stringify(params)
  try {
    xhr.send(str);
  } catch (e) {
    onReject && onReject(e)
  }
};
var hCl = function (elem, className) {
  if (!elem) {
    return false
  } else {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
  }
};
var getUrl = function () {
  return window.location.pathname
}
var attr = function (el, attr) {
  if (el && el.getAttribute) {
    return el.getAttribute(attr)
  } else {
    return null
  }
}
var ins = function (sel, div) {
  let el = getElement(sel)
  if (typeof div === 'string') {
    let _div = crEl('div')
    _div.innerHTML = div;
    div = _div;
  }
  el && el.appendChild && el.appendChild(div)
}
var sa = function (el, attr, value) {
  if (el && el.setAttribute) {
    el.setAttribute(attr, value)
  }
}
export var toggleClass = function (elem, className, value) {
  if (!elem) {
    return
  }
  elem = getElement(elem)
  elem && elem.classList && elem.classList.toggle(className, value)
}
var ch = function (sel, cb) {
  let el = getElement(sel);
  el.onchange = (e) => {
    cb && cb(e.target.value)
  }
}
var r = function (el) {
  el = getElement(el);
  el && el.remove && el.remove()
}
var sv = function (sel, v) {
  let el = getElement(sel);
  el.value = v
}
function get_h() {
  return window.innerHeight;
}
function get_top(element) {
  if (!element) {
    return {}
  }
  element = getElement(element);
  if (!element || !element.getBoundingClientRect) {
    return {}
  }
  var t = 0;
  var rect = element.getBoundingClientRect();
  do {
    t += element.offsetTop || 0;
    element = element.offsetParent;
  } while (element);
  let h = rect.bottom - rect.top;
  return {
    t,
    h,
    th: t + h
  };
}
function ons(pcb, mcb, cb) {
  let {p, v1} = sperc();
  lp = v1;
  cb && cb(v1, p);
  let is_ga;
  window.onmousemove = () => {
    if (!is_ga) {
      is_ga = 1;
      loadGoogleAnalitics()
    }
  };
  window.onscroll = (e) => {
    if (!is_ga) {
      is_ga = 1;
      loadGoogleAnalitics()
    }
    let {p, v1} = sperc();
    lp = lp === -1000000 ? v1 : lp;
    let delta = v1 - lp;
    if (delta > 0) {
      pcb(delta, v1)
    } else if (delta < 0) {
      mcb(delta, v1)
    }
    lp = v1;
    cb && cb(v1, p)
    // h('#perc', v1 + ' === ' + Math.round(p) + '%' + ' ~~ ' + window.innerHeight)
  }
}
function on_init_history() {
  let Storage = {
    get(key)  {
      let value = localStorage.getItem(key);
      try {
        value = JSON.parse(value)
      } catch (e) {
      }
      return value;
    },
    set(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  };
  let history = Storage.get('history_arr') || [];
  let history_count = Storage.get('history_count') || 0;
  let history0 = history[0] || {};
  function toODB(_this) {
    function pad(number) {
      if (number < 10) {
        return '0' + number;
      }
      return number;
    }
    return pad(_this.getUTCMonth() + 1) +
      '-' + pad(_this.getUTCDate())
  }
  let item = {cd: toODB(new Date()), url: window.location.pathname, count: 1}
  if (item.url !== history0.url || item.cd !== history0.cd) {
    history.unshift(item);
    history = history.slice(0, 20);
    Storage.set('history_count', ++history_count)
  } else {
    history0.count = (history0.count || 0) + 1
  }
  Storage.set('history_arr', history);
}
on_init_history();
var aCl = function (elem, className) {
  if (!elem) {
    return
  }
  elem = getElement(elem)
  // if (!hCl(elem, className)) {
  //   elem.className += ' ' + className;
  // }
  elem && elem.classList && elem.classList.add(className)
};
var rCl = function (elem, className, cb) {
  if (!elem) {
    return cb && cb()
  }
  elem = getElement(elem);
  if (elem && elem.classList && elem.classList.contains(className)) {
    elem.classList.remove(className)
  }
  if (cb) {
    setTimeout(cb)
  }
};
rCl = function (sel, className) {
  getElement(sel, (el) => {
    rCl(el, className)
  })
}
var h = function (sel, value) {
  let el = getElement(sel)
  if (el) {
    el.innerHTML = value || value == 0 ? value : ''
  }
}
export function getElement(sel, cb, mcb, parent, opts = {}) {
  if (!sel || sel == '') {
    return
  }
  if (typeof sel !== 'string') {
    cb && cb(sel);
    return sel;
  }
  var p = parent ? parent : document
  try {
    var items = p.querySelectorAll(sel)
    if (!items) {
      return
    }
    for (var i = 0, l = items.length; i < l; i++) {
      cb && cb(items[i], i)
    }
    mcb && mcb(items, items.length);
    return opts && opts.is_arr ? items : items[0]
  } catch (e) {
    return null;
  }
}
var zz = getElement('#z')
var v22 = get_top(zz).t - get_h()

function loadGoogleAnalitics() {
  (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
      m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
  })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
  ga('create', 'UA-146841078-1', 'auto');
  ga('send', 'pageview');
  (function (m, e, t, r, i, k, a) {
    m[i] = m[i] || function () {
      (m[i].a = m[i].a || []).push(arguments)
    };
    m[i].l = 1 * new Date();
    k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
  })
  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
  ym(68853409, "init", {
    clickmap           : true,
    trackLinks         : true,
    accurateTrackBounce: true,
    webvisor           : true
  });
  (function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
      'gtm.start'                  :
        new Date().getTime(), event: 'gtm.js'
    });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src =
      'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, 'script', 'dataLayer', 'GTM-THDW9JG');
  let gtm_el = document.createElement('noscript');
  let gtm_el1 = document.createElement('iframe');
  gtm_el1.setAttribute('src', 'https://www.googletagmanager.com/ns.html?id=GTM-THDW9JG')
  gtm_el1.style.height = 0;
  gtm_el1.style.display = 'none';
  gtm_el1.style.visibility = 'hidden';
  gtm_el.prepend(gtm_el1);
  document.body.prepend(gtm_el)
}

function replaceSafariImages() {
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  if (isSafari) {
    document.querySelectorAll('img').forEach(it => {
      let src = it.getAttribute('src');
      it.setAttribute('src', src.replace('.webp', '.png'))
    })
    document.querySelectorAll('.mci > div').forEach(it => {
      it.style.background = it.style.background.replace(/\.webp/gi, '.png')
    })
  }
}

replaceSafariImages();
