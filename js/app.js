$(".info-form").submit(function(event) {
  event.preventDefault();
  var $form = $( this ), url = $form.attr('action');
  var posting = $.post(url, {email: $('#email').val()}, function(data, status){
    if(data == 'Signup Success'){
      $('#message').text('Thanks for signing up! We\'ll send you more information soon!');
      $('#email').val('');
    } else {
      $('#message').text('Oops. Can you try that again?');
    }
  });
});

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'qj4DQfYx2Hg',
    playerVars: {
      'rel': 0,
    },
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerStateChange(event){
  if (event.data == YT.PlayerState.ENDED){
    $('#hackathon').modal('hide');
  }
}

var ismobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
$('#hackathon').on('shown.bs.modal', function (e) {
    if(!ismobile){
        player.playVideo();
    }
});

$('#hackathon').on('hidden.bs.modal', function (e) {
  player.pauseVideo();
});

(function() {
  "use strict";
  // classList | (c) @remy | github.com/remy/polyfills | rem.mit-license.org
  !function(){function t(t){this.el=t;for(var n=t.className.replace(/^\s+|\s+$/g,"").split(/\s+/),i=0;i<n.length;i++)e.call(this,n[i])}function n(t,n,i){Object.defineProperty?Object.defineProperty(t,n,{get:i}):t.__defineGetter__(n,i)}if(!("undefined"==typeof window.Element||"classList"in document.documentElement)){var i=Array.prototype,e=i.push,s=i.splice,o=i.join;t.prototype={add:function(t){this.contains(t)||(e.call(this,t),this.el.className=this.toString())},contains:function(t){return-1!=this.el.className.indexOf(t)},item:function(t){return this[t]||null},remove:function(t){if(this.contains(t)){for(var n=0;n<this.length&&this[n]!=t;n++);s.call(this,n,1),this.el.className=this.toString()}},toString:function(){return o.call(this," ")},toggle:function(t){return this.contains(t)?this.remove(t):this.add(t),this.contains(t)}},window.DOMTokenList=t,n(Element.prototype,"classList",function(){return new t(this)})}}();
  window.canUse=function(p){if(!window._canUse)window._canUse=document.createElement("div");var e=window._canUse.style,up=p.charAt(0).toUpperCase()+p.slice(1);return p in e||"Moz"+up in e||"Webkit"+up in e||"O"+up in e||"ms"+up in e};
  (function(){if("addEventListener"in window)return;window.addEventListener=function(type,f){window.attachEvent("on"+type,f)}})();
  var	$body = document.querySelector('body');
  $body.classList.add('is-loading');
  window.addEventListener('load', function() {
    window.setTimeout(function() {
      $body.classList.remove('is-loading');
    }, 100);
  });

  (function() {
    var settings = {
      images: {
        'img/1.jpg': 'center',
        'img/2.jpg': 'center',
        'img/3.jpg': 'center',
        'img/4.jpg': 'center',
        'img/5.jpg': 'center',
        'img/6.jpg': 'center',
        'img/8.jpg': 'center',
        'img/9.jpg': 'center',
        'img/10.jpg': 'center',
        'img/11.jpg': 'center',
        'img/12.jpg': 'center',
      },
      delay: 6000
    };
    var	pos = 0, lastPos = 0,
    $wrapper, $bgs = [], $bg,
    k, v;
    $wrapper = document.createElement('div');
    $wrapper.id = 'bg';
    $body.appendChild($wrapper);
    for (k in settings.images) {
      $bg = document.createElement('div');
      $bg.style.backgroundImage = 'url("' + k + '")';
      $bg.style.backgroundPosition = settings.images[k];
      $wrapper.appendChild($bg);
      $bgs.push($bg);
    }
    $bgs[pos].classList.add('visible');
    $bgs[pos].classList.add('top');
    if ($bgs.length == 1 || !canUse('transition'))
    return;
    window.setInterval(function() {
      lastPos = pos;
      pos++;
      if (pos >= $bgs.length)
      pos = 0;
      $bgs[lastPos].classList.remove('top');
      $bgs[pos].classList.add('visible');
      $bgs[pos].classList.add('top');
      window.setTimeout(function() {
        $bgs[lastPos].classList.remove('visible');
      }, settings.delay / 2);
    }, settings.delay);
  })();
})();
