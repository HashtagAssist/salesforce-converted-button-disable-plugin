// Funktion, die prüft ob die Bedingungen erfüllt sind und den Button entsprechend deaktiviert
function checkAndDisableButton() {
  // Suche nach dem Element mit title="Converted" und prüfe, ob aria-selected="true" ist
  const convertedElement = document.querySelector('[data-tab-name="converted"]');
  
  if (convertedElement && convertedElement.getAttribute('aria-selected') === 'true') {
    // Suche nach dem Button mit der Klasse "slds-path__mark-complete"
    const completeButton = document.querySelector('.slds-path__mark-complete');
    
    // Wenn der Button gefunden wurde, deaktiviere ihn
    if (completeButton) {
      completeButton.disabled = true;
    }
  } else {
    // Falls die Bedingung nicht mehr erfüllt ist, den Button wieder aktivieren
    const completeButton = document.querySelector('.slds-path__mark-complete');
    if (completeButton && completeButton.disabled) {
      completeButton.disabled = false;
      console.log('Button wurde wieder aktiviert');
    }
  }
}

// Führe die Prüfung sofort nach dem Laden der Seite durch
checkAndDisableButton();

// Beobachte Änderungen im DOM mit MutationObserver
const observer = new MutationObserver((mutations) => {
  checkAndDisableButton();
});

// Starte die Beobachtung des gesamten Dokuments mit allen Unterknoten
observer.observe(document.body, {
  childList: true,
  subtree: true,
  attributes: true,
  attributeFilter: ['aria-selected']
});

// Führe die Prüfung auch nach dem vollständigen Laden der Seite durch
window.addEventListener('load', checkAndDisableButton); 