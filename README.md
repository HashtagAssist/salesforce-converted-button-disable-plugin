# Button Disabler Chrome Extension

This Chrome extension disables the "Mark Complete" button (class `slds-path__mark-complete`) on Salesforce Lightning pages when the "Converted" tab is selected. The extension is specifically designed for use on `*.lightning.force.com` domains.

## How It Works

The extension:

1. Monitors the Salesforce Lightning page for DOM changes
2. Checks if the element with `[data-tab-name="converted"]` exists and has `aria-selected="true"` set
3. Disables the button with the class `slds-path__mark-complete` in this case
4. Re-enables the button as soon as another tab is selected

## Installation

1. Clone or download this repository
2. Open Google Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" using the toggle in the top right
4. Click on "Load unpacked" and select the folder containing the extension
5. The extension will be automatically activated and works immediately on all matching domains

## Troubleshooting

If the extension doesn't work as expected:

1. Check if the extension is enabled in Chrome
2. Make sure you are on a Salesforce Lightning domain (lightning.force.com)
3. Refresh the page (F5)
4. Check the console for error messages (F12 > Console)
5. Verify if the selector names in the Salesforce interface have changed

## Customization

To customize the extension:

1. Open the `content.js` file in a text editor
2. Change the selectors or logic as needed
3. Save the file and reload the extension in Chrome

## Privacy and Security

This extension:
- Only requests minimal permissions (`activeTab`)
- Does not collect or transmit any user data
- Works completely locally in the browser 