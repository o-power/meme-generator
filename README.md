# Meme Generator

The user uploads an image and enters the text.

The image is displayed using an object URL.

The div element containing the image and the superimposed text is converted to a single image using the html2canvas library, which can be downloaded from [here](http://html2canvas.hertzen.com/). The downloaded file is included in the HTLML using:
```html
<script src="static/js/html2canvas.js"></script>
```

## Local Development Environment

Clone the GitHub repository:
```
git clone https://github.com/o-power/meme-generator.git
```

Move into the cloned directory:
```
cd meme-generator
```

Open with Visual Studio Code and add the Live Server extension to run locally.

## Acknowledgements

- The bulk of the code is taken from the [Wild Code School meme generator](https://codepen.io/eveningkid/pen/qBdeQJo?editors=1010).
- The download functionality is adapted from this [pen](https://codepen.io/nathansouza/pen/OXdJbo).