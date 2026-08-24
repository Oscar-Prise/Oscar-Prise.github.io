(function(){
  // ---- generate gear polygons ----
  function gearPoints(teeth, outerR, innerR, cx, cy){
    var n = teeth * 2, pts = [];
    for (var i = 0; i < n; i++){
      var r = (i % 2 === 0) ? outerR : innerR;
      var a = (i / n) * Math.PI * 2 - Math.PI / 2;
      pts.push((cx + r * Math.cos(a)).toFixed(1) + ',' + (cy + r * Math.sin(a)).toFixed(1));
    }
    return pts.join(' ');
  }
  document.querySelectorAll('.gear-poly').forEach(function(poly){
    var teeth = parseInt(poly.dataset.teeth || '14', 10);
    var outer = parseFloat(poly.dataset.outer || '90');
    var inner = parseFloat(poly.dataset.inner || '70');
    poly.setAttribute('points', gearPoints(teeth, outer, inner, 100, 100));
  });

  // ---- scrollspy nav (only matters on pages with in-page section anchors) ----
  var navlinks = Array.prototype.slice.call(document.querySelectorAll('[data-nav]'));
  var sections = navlinks.map(function(link){
    var href = link.getAttribute('href') || '';
    if (href.charAt(0) !== '#') return null; // only spy same-page anchors
    return document.getElementById(href.slice(1));
  }).filter(Boolean);
  if ('IntersectionObserver' in window && sections.length){
    var spy = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        var id = entry.target.id;
        var link = navlinks.find(function(l){ return l.getAttribute('href') === '#' + id; });
        if (!link) return;
        if (entry.isIntersecting){
          navlinks.forEach(function(l){ l.classList.remove('active'); });
          link.classList.add('active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    sections.forEach(function(s){ spy.observe(s); });
  }
})();
