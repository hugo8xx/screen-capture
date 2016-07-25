var sys = require("system");
var page = require('webpage').create();
var url = require('phantom-url');
page.viewportSize = { width: 1024, height: 768 };
page.clipRect = { top: 0, left: 0, width: 1024, height: 768 };
page.settings.userAgent = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.120 Safari/537.36';

var parser = url(sys.args[1]);

page.open(parser.href, function() {
    page.render( parser.host + '.png');
    phantom.exit();
});