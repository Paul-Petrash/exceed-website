import {toggleClass} from './dom.js';

var e = document.documentElement,
  b = document.body;
var pf_t;
var lp;
var mh = 0;
var hh// = getElement('header')
var hn// = getElement('header .hn')
var hn_class_list = ''
var st
function on_init_header() {
  gc('.st', (el) => {
    window.scrollTo(0, 0)
  });
  gc('.hum', () => {
    toggleClass(b, 'mob_o', !hCl(b, 'mob_o'))
  })
  getElement('[hrh]', (el) => {
    el.onclick = () => {
      window.location = attr(el, 'hrh')
    }
  })
  getElement('[hr]', (el) => {
    el.onclick = () => {
      window.open(attr(el, 'hr'))
    }
  })
  st = getElement('.st');
  hh = getElement('header');
  hn = getElement('header .hn');
  // hn_class_list = ''
  // hn.classList.forEach(it => {
  //   hn_class_list += ' ' + it;
  // });
  // ons((delta) => {
  //   if (!window.prev_head) {
  //     mh -= delta;
  //     mh = Math.max(-max_hh, mh);
  //     hh.style.marginTop = mh + 'px';
  //   }
  //   // if (mh === -max_hh) {
  //   //   getElement('.op[open]', el => {
  //   //     el.removeAttribute('open')
  //   //     hn.setAttribute('is_open', 0)
  //   //   })
  //   // }
  //   getElement('.op[open]', el => {
  //     el.removeAttribute('open')
  //     hn.setAttribute('is_open', 0)
  //   })
  // }, (delta) => {
  //   if (!window.prev_head) {
  //     mh -= delta;
  //     mh = Math.min(0, mh);
  //     // mh = 0
  //     hh.style.marginTop = mh + 'px'
  //   }
  // }, go_rr)
}
var max_hh = 150;
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
var tCl = function (elem, className, value) {
  if (value) {
    aCl(elem, className)
  } else {
    rCl(elem, className)
  }
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
  window.onscroll = (e) => {
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
  }
}
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
var h = function (sel, value) {
  let el = getElement(sel)
  if (el) {
    el.innerHTML = value || value == 0 ? value : ''
  }
}
function getElement(sel, cb, mcb, parent, opts = {}) {
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
function ce(tagName, attrs, parent) {
  var el = document.createElement(tagName)
  for (var key in attrs) {
    if (key == 'innerHTML') {
      el.innerHTML = attrs[key]
    } else {
      sa(el, key, attrs[key])
    }
  }
  if (parent) {
    parent.appendChild(el)
  }
  return el;
}
export function gc(sel, cb, find_cb, total_cb, parent) {
  getElement(sel, function (el) {
    find_cb && find_cb(el)
    el.onclick = function (e) {
      cb && cb(el, e)
    }
  }, total_cb, parent)
}
function tot_h() {
  var sh = 'scrollHeight';
  return ((e[sh] || b[sh]) - e.clientHeight);
}
export function sperc() {
  var st = 'scrollTop',
    sh = 'scrollHeight';
  let v1 = (e[st] || b[st]);
  let v2 = ((e[sh] || b[sh]) - e.clientHeight);
  v1 = Math.min(v2, Math.max(v1, 0));
  return {p: v1 / (window.zz ? v22 : v2) * 100, v1, v2}
}
function isSafari() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function loadAsyncStyleSheets() {
  if (isSafari()) {
    var link = document.createElement('style');
    link.innerHTML = `
.faq h3::after,.faq h2::after, .cost h3::after, .gp1::before, .gp2::before, .gp3::before,
.wf .it1, .wf .it2, .wf .it3,
.g1::before, .g2::before, .g3::before {
    background-image: url('/images/hire-developers.png');
}
.h3s-aw {
    background-image: url('/images/awwards.png');
}
`
    document.head.appendChild(link);
  }
}
function go_rr(v, perc) {
  pf_t = pf_t || tot_h();
  if (st && st.className) {
    st.className = 'st ' + ((lp > 400) && (lp < pf_t - 280) ? 'in' : 'dn')
  }
  hn && hn.setAttribute('ss', lp > 65 ? 1 : 0)
}
function size_init(ind, timeout = 1000) {
  pf_t = tot_h()
  max_hh = get_top(hn).h;
}
setTimeout(() => {
  on_init_header()
  size_init();
})
setTimeout(() => {
  size_init();
}, 1000)
gc('.op', (el, e) => {
  let target = e.target;
  if (!hCl(target, 'op') && !hCl(target.parentNode, 'op')) {
    return null;
  }
  let is_open = el.getAttribute('open');
  getElement('.op[open]', el => {
    el.removeAttribute('open')
  });
  if (is_open) {
    el.removeAttribute('open')
  } else {
    el.setAttribute('open', 1)
  }
  hn.setAttribute('is_open', is_open ? 0 : 1)
  e.preventDefault();
  return null;
})
loadAsyncStyleSheets();
document.body.onclick = (e) => {
  window.ym && window.ym(145208056, "reachGoal", "page_click_goal");
}
