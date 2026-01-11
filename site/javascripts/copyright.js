// Dynamic copyright year updater for DEEPS Documentation
// Updates copyright from "2025" to "2025-{current year}" when year changes

document.addEventListener('DOMContentLoaded', function() {
  const currentYear = new Date().getFullYear();
  const copyrightElement = document.querySelector('.md-copyright__highlight');

  if (copyrightElement) {
    const copyrightText = copyrightElement.innerHTML;
    // Replace "2025" with "2025–{current year}" if current year is later than 2025
    if (currentYear > 2025) {
      copyrightElement.innerHTML = copyrightText.replace('2025', '2025–' + currentYear);
    }
  }
});
