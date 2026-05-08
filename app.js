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
<p class="p1"><span class="s1">const API_URL = https://script.google.com/a/macros/hbuhsd.edu/s/AKfycbyweEH-3a8okIOQLbKRnqEK6kY-bRXfbi0c6z58RVFV9AtWDd43PArALYQONMbXjhjt/exec;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">const form = document.getElementById("scoutForm");</span></p>
<p class="p1"><span class="s1">const statusDiv = document.getElementById("status");</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">form.addEventListener("submit", async (e) =&gt; {</span></p>
<p class="p1"><span class="s1">e.preventDefault();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">const data = {</span></p>
<p class="p1"><span class="s1">match: document.getElementById("match").value,</span></p>
<p class="p1"><span class="s1">team: document.getElementById("team").value,</span></p>
<p class="p1"><span class="s1">scout: document.getElementById("scout").value,</span></p>
<p class="p1"><span class="s1">autoScore: document.getElementById("autoScore").value,</span></p>
<p class="p1"><span class="s1">teleopScore: document.getElementById("teleopScore").value,</span></p>
<p class="p1"><span class="s1">endgame: document.getElementById("endgame").value,</span></p>
<p class="p1"><span class="s1">defense: document.getElementById("defense").value,</span></p>
<p class="p1"><span class="s1">fouls: document.getElementById("fouls").value,</span></p>
<p class="p1"><span class="s1">notes: document.getElementById("notes").value</span></p>
<p class="p1"><span class="s1">};</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">try {</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">const response = await fetch(API_URL, {</span></p>
<p class="p1"><span class="s1">method: "POST",</span></p>
<p class="p1"><span class="s1">body: JSON.stringify(data)</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">const result = await response.json();</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">if (result.success) {</span></p>
<p class="p1"><span class="s1">statusDiv.textContent = "Data submitted successfully.";</span></p>
<p class="p1"><span class="s1">form.reset();</span></p>
<p class="p1"><span class="s1">} else {</span></p>
<p class="p1"><span class="s1">statusDiv.textContent = "Error submitting data.";</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">} catch (err) {</span></p>
<p class="p1"><span class="s1">statusDiv.textContent = "Offline or server error.";</span></p>
<p class="p1"><span class="s1">}</span></p>
<p class="p1"><span class="s1">});</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">if ("serviceWorker" in navigator) {</span></p>
<p class="p1"><span class="s1">navigator.serviceWorker.register("service-worker.js");</span></p>
<p class="p1"><span class="s1">}</span></p>
</body>
</html>
