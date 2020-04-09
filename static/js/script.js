function updateText() {
  const text = document.getElementById('user-text').value;
  document.getElementById('meme-text').innerHTML = text;
}

function updateImage() {
  const file = document.getElementById('user-picture').files[0];
  /*
  preview.onload = function() {
    window.URL.revokeObjectURL(this.src);
  }
  */
  document.getElementById('meme-picture').src = window.URL.createObjectURL(file);
}

function generateMeme() {
  html2canvas(document.getElementById('meme'), { allowTaint: true }).then(function (canvas) {
    const data = canvas.toDataURL('image/jpeg', 1);
    const src = encodeURI(data);
    document.getElementById('screenshot').src = src;
  });
}

/* An alternative using .addEventListener, not 'onclick' on <button>
document.getElementById('save-meme').addEventListener('click', function () {
  // Same html2canvas code
  html2canvas(document.getElementById('meme'), { allowTaint: true }).then(function (canvas) {
    const data = canvas.toDataURL('image/jpeg', 1);
    const src = encodeURI(data);
    document.getElementById('screenshot').src = src;
  });
});
*/


  