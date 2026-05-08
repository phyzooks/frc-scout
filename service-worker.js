<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2685.3">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Times; -webkit-text-stroke: #000000}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Times; -webkit-text-stroke: #000000; min-height: 14.0px}
    span.s1 {font-kerning: none}
  </style>
</head>
<body>
<p class="p1"><span class="s1">const CACHE_NAME = "frc-scout-v1";</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">const FILES_TO_CACHE = [</span></p>
<p class="p1"><span class="s1">"/",</span></p>
<p class="p1"><span class="s1">"/index.html",</span></p>
<p class="p1"><span class="s1">"/styles.css",</span></p>
<p class="p1"><span class="s1">"/app.js",</span></p>
<p class="p1"><span class="s1">"/manifest.json"</span></p>
<p class="p1"><span class="s1">];</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">self.addEventListener("install", (event) =&gt; {</span></p>
<p class="p1"><span class="s1">event.waitUntil(</span></p>
<p class="p1"><span class="s1">caches.open(CACHE_NAME)</span></p>
<p class="p1"><span class="s1">.then((cache) =&gt; cache.addAll(FILES_TO_CACHE))</span></p>
<p class="p1"><span class="s1">);</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">self.addEventListener("fetch", (event) =&gt; {</span></p>
<p class="p1"><span class="s1">event.respondWith(</span></p>
<p class="p1"><span class="s1">caches.match(event.request)</span></p>
<p class="p1"><span class="s1">.then((response) =&gt; {</span></p>
<p class="p1"><span class="s1">return response || fetch(event.request);</span></p>
<p class="p1"><span class="s1">})</span></p>
<p class="p1"><span class="s1">);</span></p>
<p class="p1"><span class="s1">});</span></p>
</body>
</html>
