import { Utils } from "../src/utilities/utilities.js";

import { Tag } from "../node_modules/@browser-modules/component.library/lib/library.js";

import {
  Attribute,
  Visible,
  State,
  Operation,
} from "../src/button.metadata.js";
import { Contents } from "../src/Button.Contents.js";

import { template } from "../src/templates/Button.Contents.template.js";

describe("Given Contents imported", () => {
  it("Then Contents should be defined", () => {
    expect(Contents).toBeDefined();
  });
  it("Then Contents.tag should be Tag.Contents", () => {
    expect(Contents.tag).toBe(Tag.CONTENTS);
  });
  it("Then Contents.attributes should equal Attribute", () => {
    expect(Contents.attributes).toEqual(Attribute);
  });
  describe("Given Contents defined", () => {
    beforeEach(() => {
      Utils.defineComponent(Contents.tag, Contents);
    });
    it("Then custom element registry should contain Contents", () => {
      expect(customElements.get(Contents.tag)).toBe(Contents);
    });
    describe("Given HTML Template added to DOM", () => {
      let HTMLTemplate: HTMLTemplateElement;
      beforeEach(() => {
        HTMLTemplate = Utils.appendTemplate(Contents.tag, template);
      });
      afterEach(() => {
        Utils.removeTemplate(Contents.tag);
      });
      it("Then a HTML Template should be available in DOM", () => {
        expect(document.getElementsByTagName("template")).toHaveSize(1);
      });
      describe("When Contents component added to DOM", () => {
        let contents: Contents;
        beforeEach(() => {
          contents = Utils.appendComponent<Contents>(Contents.tag);
        });
        afterEach(() => {
          contents.remove();
        });
        it("Then contents.templateId should be Contents.tag", () => {
          expect(contents.templateId).toBe(Contents.tag);
        });
        describe("Given state defaults have been applied", () => {
          it("Then contents.visible should be Visible.YES", () => {
            expect(contents.visible).toEqual(Visible.YES);
          });
          it("Then contents.state should be State.OFF", () => {
            expect(contents.state).toEqual(State.OFF);
          });
          describe("Given Imperative API used", () => {
            describe("When contents.hide()", () => {
              let onhide: jasmine.Spy;
              let event: CustomEvent;
              beforeEach(() => {
                onhide = jasmine.createSpy("onhide");
                contents.onhide = onhide;
                contents.hide();
                event = onhide.calls.mostRecent().args[0];
              });
              it("Then contents.visible should be Visible.NO", () => {
                expect(contents.visible).toEqual(Visible.NO);
              });
              it("Then html attribute visible should be Visible.NO", () => {
                let visible = contents.getAttribute(Attribute.VISIBLE);
                expect(visible).toEqual(Visible.NO);
              });
              it("Then onhide should have been called", () => {
                expect(onhide).toHaveBeenCalled();
              });
              it("Then onhide custom event should have been called with ...args", () => {
                expect(event.detail).toEqual({ visible: Visible.NO });
              });
              describe("When contents.show()", () => {
                let onshow: jasmine.Spy;
                let event: CustomEvent;
                beforeEach(() => {
                  onshow = jasmine.createSpy("onshow");
                  contents.onshow = onshow;
                  contents.show();
                  event = onshow.calls.mostRecent().args[0];
                });
                it("Then contents.visible should be Visible.YES", () => {
                  expect(contents.visible).toEqual(Visible.YES);
                });
                it("Then html attribute visible should be null", () => {
                  let visible = contents.getAttribute(Attribute.VISIBLE);
                  expect(visible).toEqual(null);
                });
                it("Then onshow should have been called once", () => {
                  expect(onshow).toHaveBeenCalledTimes(1);
                });
                it("Then onhide custom event should have been called with ...args", () => {
                  expect(event.detail).toEqual({ visible: Visible.YES });
                });
              });
            });
            describe("When contents.show()", () => {
              let onshow: jasmine.Spy;
              beforeEach(() => {
                onshow = jasmine.createSpy("onshow");
                contents.onshow = onshow;
                contents.show();
              });
              it("Then contents.visible should be Visible.YES", () => {
                expect(contents.visible).toEqual(Visible.YES);
              });
              it("Then html attribute visible should be null", () => {
                let visible = contents.getAttribute(Attribute.VISIBLE);
                expect(visible).toEqual(null);
              });
              it("Then onshow should not have been called", () => {
                expect(onshow).not.toHaveBeenCalled();
              });
              describe("When contents.hide()", () => {
                let onhide: jasmine.Spy;
                let event: CustomEvent;
                beforeEach(() => {
                  onhide = jasmine.createSpy("onhide");
                  contents.onhide = onhide;
                  contents.hide();
                  event = onhide.calls.mostRecent().args[0];
                });
                it("Then contents.visible should be Visible.NO", () => {
                  expect(contents.visible).toEqual(Visible.NO);
                });
                it("Then html attribute visible should be Visible.NO", () => {
                  let visible = contents.getAttribute(Attribute.VISIBLE);
                  expect(visible).toEqual(Visible.NO);
                });
                it("Then onhide should have been called once", () => {
                  expect(onhide).toHaveBeenCalledTimes(1);
                });
                it("Then onhide custom event should have been called with ...args", () => {
                  expect(event.detail).toEqual({ visible: Visible.NO });
                });
              });
            });
            describe("When contents.on()", () => {
              let onon: jasmine.Spy;
              let event: CustomEvent;
              beforeEach(() => {
                onon = jasmine.createSpy("onon");
                contents.onon = onon;
                contents.on();
                event = onon.calls.mostRecent().args[0];
              });
              it("Then contents.state should be State.ON", () => {
                expect(contents.state).toEqual(State.ON);
              });
              it("Then html attribute state should be State.ON", () => {
                let state = contents.getAttribute(Attribute.STATE);
                expect(state).toEqual(State.ON);
              });
              it("Then onon should have been called", () => {
                expect(onon).toHaveBeenCalled();
              });
              it("Then onon custom event should have been called with ...args", () => {
                expect(event.detail).toEqual({ state: State.ON });
              });
              describe("When contents.off()", () => {
                let onoff: jasmine.Spy;
                let event: CustomEvent;
                beforeEach(() => {
                  onoff = jasmine.createSpy("onoff");
                  contents.onoff = onoff;
                  contents.off();
                  event = onoff.calls.mostRecent().args[0];
                });
                it("Then contents.state should be State.OFF", () => {
                  expect(contents.state).toEqual(State.OFF);
                });
                it("Then html attribute state should be State.OFF", () => {
                  let state = contents.getAttribute(Attribute.STATE);
                  expect(state).toEqual(State.OFF);
                });
                it("Then onoff should have been called once", () => {
                  expect(onoff).toHaveBeenCalledTimes(1);
                });
                it("Then onoff custom event should have been called with ...args", () => {
                  expect(event.detail).toEqual({ state: State.OFF });
                });
              });
            });
            describe("When contents.off()", () => {
              let onoff: jasmine.Spy;
              beforeEach(() => {
                onoff = jasmine.createSpy("onoff");
                contents.onoff = onoff;
                contents.off();
              });
              it("Then contents.state should be State.OFF", () => {
                expect(contents.state).toEqual(State.OFF);
              });
              it("Then html attribute state should be null", () => {
                let state = contents.getAttribute(Attribute.STATE);
                expect(state).toEqual(null);
              });
              it("Then onoff should not have been called", () => {
                expect(onoff).not.toHaveBeenCalled();
              });
              describe("When contents.on()", () => {
                let onon: jasmine.Spy;
                let event: CustomEvent;
                beforeEach(() => {
                  onon = jasmine.createSpy("onon");
                  contents.onon = onon;
                  contents.on();
                  event = onon.calls.mostRecent().args[0];
                });
                it("Then contents.state should be State.NO", () => {
                  expect(contents.state).toEqual(State.ON);
                });
                it("Then html attribute state should be State.ON", () => {
                  let state = contents.getAttribute(Attribute.STATE);
                  expect(state).toEqual(State.ON);
                });
                it("Then onoff should not have been called", () => {
                  expect(onoff).toHaveBeenCalledTimes(0);
                });
                it("Then onon custom event should have been called with ...args", () => {
                  expect(event.detail).toEqual({ state: State.ON });
                });
              });
            });
          });
          describe("Given User Gestures used", () => {
            describe("When click with mouse", () => {
              let onon: jasmine.Spy;
              beforeEach(() => {
                onon = jasmine.createSpy("onon");
                contents.onon = onon;
                contents.dispatchEvent(new MouseEvent("click"));
              });
              it("Then contents.state should be State.ON", () => {
                expect(contents.state).toEqual(State.ON);
              });
              it("Then html attribute state should be State.ON", () => {
                let state = contents.getAttribute(Attribute.STATE);
                expect(state).toEqual(State.ON);
              });
              it("Then onon should have been called once", () => {
                expect(onon).toHaveBeenCalledTimes(1);
              });
              describe("When click with mouse", () => {
                let onoff: jasmine.Spy;
                beforeEach(() => {
                  onoff = jasmine.createSpy("onoff");
                  contents.onoff = onoff;
                  contents.dispatchEvent(new MouseEvent("click"));
                });
                it("Then contents.state should be State.OFF", () => {
                  expect(contents.state).toEqual(State.OFF);
                });
                it("Then html attribute state should be State.OFF", () => {
                  let state = contents.getAttribute(Attribute.STATE);
                  expect(state).toEqual(State.OFF);
                });
                it("Then onoff should have been called once", () => {
                  expect(onoff).toHaveBeenCalledTimes(1);
                });
              });
            });
          });
        });
      });
    });
  });
});
