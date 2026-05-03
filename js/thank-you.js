var copyBtn = document.getElementById('copy-link');
if (copyBtn && navigator.clipboard) {
  var resetTimer = null;
  copyBtn.addEventListener('click', function() {
    navigator.clipboard.writeText('https://www.milehighquickhomes.com/').then(function() {
      copyBtn.textContent = '✓ Link copied!';
      clearTimeout(resetTimer);
      resetTimer = setTimeout(function() { copyBtn.textContent = '📋 Copy our link to share'; }, 2500);
    }).catch(function() {
      copyBtn.textContent = 'Could not copy — please copy the URL manually';
      clearTimeout(resetTimer);
      resetTimer = setTimeout(function() { copyBtn.textContent = '📋 Copy our link to share'; }, 2500);
    });
  });
} else if (copyBtn) {
  copyBtn.style.display = 'none';
}
