arrowTop.onclick = function() {
    window.scrollTo(500, 0);
  
  };

  window.addEventListener('scroll', function() {
    arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
  });



arrowDown.onclick = function() {
    window.scrollTo(0, 4000);
    
  };

  window.addEventListener('scroll', function() {
      arrowDown.hidden = (pageYOffset > document.documentElement.clientHeight);
  });