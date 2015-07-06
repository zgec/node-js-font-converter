# Font Converter

**FontForge wrapper that allows conversion from and to different font formats (TTF, WOFF, OTF)**

## Setup

Install FontForge (debian-based distro)

```
sh sudo add-apt-repository ppa:fontforge/fontforge; sudo apt-get update; sudo apt-get install fontforge
```

Install font-converter

```
npm install font-converter
```

## Example Usage

``` js
var fontConverter = require('font-converter');
fontConverter("path/to/sourceFontFile.ttf", "path/to/destinationFontFile.woff", function (err) {
	if(err) {
		// There was an error
	} else {
		// All good, path/to/destinationFontFile.woff contains the transformed font file
	}
})
```

## License

http://www.gnu.org/licenses/gpl-2.0.html