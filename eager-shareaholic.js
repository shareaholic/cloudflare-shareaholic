(function() {
  var options = INSTALL_OPTIONS;
  var isPreview = INSTALL_ID == "preview";
  
  if (isPreview) {
    if (!options.siteId) {
      options.siteId = 'd66d1e26c0f1f07ba8e3709578a8e11a';
    }
  }
  
  if (!options.siteId) {
		return;
	}
  
  var shr = document.createElement('script');
    shr.setAttribute('data-cfasync', 'false');
    shr.src = '//dsms0mj1bbhn4.cloudfront.net/assets/pub/shareaholic.js';
    shr.type = 'text/javascript'; shr.async = 'true';
    shr.onload = shr.onreadystatechange = function() {
      var rs = this.readyState;
      if (rs && rs != 'complete' && rs != 'loaded') return;
      var site_id = options.siteId;
      try { Shareaholic.init(site_id); } catch (e) {}
    };
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(shr, s);
})();