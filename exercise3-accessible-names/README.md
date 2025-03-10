# Accessible Names

Naming things is hard. Here you'll learn the about crafting accessible names and descriptions for assistive technology, as well as the best approach to working with labels and placeholders for forms.

An accessible name exposes a unique name for an interactive element or landmark to describe its purpose. Things that can contribute to an accessible name include `textContent` (including children), `aria-label`, `aria-labelledby`, a `label` paired with a form control, and even `title` or 
`placeholder`. How text is exposed as an accessible name is determined by the Accessible Name
and Description Calculation specification, found in https://www.w3.org/TR/accname-1.2/.

A note about `placeholder`: these aren't good to rely on for labeling as they aren't
visually persistent. Even though placeholder is technically exposed as a last resort and passes
automated testing tool checks, it will clear out when typing in a form field and users will forget
what they're trying to fill in. A visual label is better.

Similarly, `title` attributes are technically exposed to assistive technology but they only show
on mouse hover. That shouldn't be all that sighted users have to go on when trying to understand the
purpose of your graphical elements. Use text labels with your icons, or at least make them configurable.

## Exercise: Write accessible names for icons and buttons

Play with different approaches for exposing accessible names on the Icon component and date picker
controls. The goal is to add labels to the components that reflect the purpose of the elements.

For the icon, you can compare the "before" `icon.js` component with the completed one in this directory.

For the date picker buttons, compare the "before" `date-picker.js` component with the completed one.

There numerous few approaches for exposing an accessible name:

- If wrapped in a button:
  - Put an `aria-label` on the button itself (`<button aria-label>`)
  - Put an `aria-label` on a child element, like `<button><span role="img" aria-label></span></button>`
  - Use [`.visually-hidden`](https://github.com/marcysutton/testing-accessibility-demos/blob/main/workshop3-semantics-aria/styles.scss#L4) on a child element with `textContent` inside, like
  `<button><span class="visually-hidden">Text</span></button>`

- There are even more options with SVG:
  - Use the same graphical image approach as above with `<svg role="img" aria-label></svg>`
  - Use an SVG title: `<svg><title>Text</title></svg>`
  - SVG text can also be exposed: `<svg><text /></svg>`
  - Or you can mark the SVG with `role=presentation` and let a wrapping button provide a name.

Be sure to test your changes in the browser with VoiceOver and/or NVDA, using
the arrow keys to navigate both interactive and static content as well as Tab for
interactive controls.

You can visit the before and after pages containing icon components by URL:

- http://localhost:1234/listings
- http://localhost:1234/listing/listing-cranberry-lake
- http://localhost:1234/exercise3/listing-cranberry-lake
- http://localhost:1234/exercise3/listings

URL to view deployed versions for this exercise:

- https://workshop-manual-a11y-testing.testingaccessibility.com/exercise3/listings
- https://workshop-manual-a11y-testing.testingaccessibility.com/exercise3/listing-cranberry-lake
