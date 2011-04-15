String.prototype.reverse = function() {
  var splitext  = this.split("");
  var revertext = splitext.reverse();
  var reversed  = revertext.join("");

  return reversed;
};

(function() {
  var services = [
    /http:\/\/www\.megaupload\.com\/\?d=[a-z0-9]+/i,
    /http:\/\/www\.fileserve\.com\/file\/[a-z0-9]+/i
  ];

  var getLink = function(url) {
    var match;
    var reversed = url.reverse();

    for (var i = 0; i < services.length; i++) {
      if (match = url.match(services[i]))      return match[0];
      if (match = reversed.match(services[i])) return match[0];
    }

    return null;
  };

  var links = document.getElementsByTagName("a");
  var normalized;

  for (var i = 0; i < links.length; i++) {
    var link = links[i];

    if (normalized = getLink(link.href)) link.href = normalized;
  }
})()
