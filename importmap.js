const importmap = {
  imports: {
    "@browser-modules/dictionary":
      "./node_modules/@browser-modules/dictionary/lib/dictionary.js",
    "@browser-modules/events":
      "./node_modules/@browser-modules/events/lib/events.js",
    "@browser-modules/machine":
      "./node_modules/@browser-modules/machine/lib/machine.js",
    "@browser-modules/web.component":
      "./node_modules/@browser-modules/web.component/lib/component.js",
    "@browser-modules/component.library":
      "./node_modules/@browser-modules/component.library/lib/library.js",
  },
};

const injectImportmap = (importmap) => {
  const element = document.createElement("script");
  element.type = "importmap";
  element.textContent = JSON.stringify(importmap);
  document.currentScript.after(element);
};

injectImportmap(importmap);
