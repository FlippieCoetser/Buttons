import { Utils } from "../src/utilities/utilities.js";

import { Tag } from "../node_modules/@browser-modules/component.library/lib/library.js";

import {
  Attribute,
  Visible,
  State,
  Operation,
} from "../src/button.metadata.js";
import { Fullscreen } from "../src/Button.Fullscreen.js";

import { template } from "../src/templates/Button.Fullscreen.template.js";

describe("Given Fullscreen imported", () => {
  it("Then Fullscreen should be defined", () => {
    expect(Fullscreen).toBeDefined();
  });
  it("Then Fullscreen.tag should be Tag.Fullscreen", () => {
    expect(Fullscreen.tag).toBe(Tag.FULLSCREEN);
  });
  it("Then Fullscreen.attributes should equal Attribute", () => {
    expect(Fullscreen.attributes).toEqual(Attribute);
  });
  describe("Given Fullscreen defined", () => {
    beforeEach(() => {
      Utils.defineComponent(Fullscreen.tag, Fullscreen);
    });
    it("Then custom element registry should contain Fullscreen", () => {
      expect(customElements.get(Fullscreen.tag)).toBe(Fullscreen);
    });
    describe("Given HTML Template added to DOM", () => {
      let HTMLTemplate: HTMLTemplateElement;
      beforeEach(() => {
        HTMLTemplate = Utils.appendTemplate(Fullscreen.tag, template);
      });
      afterEach(() => {
        Utils.removeTemplate(Fullscreen.tag);
      });
      it("Then a HTML Template should be available in DOM", () => {
        expect(document.getElementsByTagName("template")).toHaveSize(1);
      });
      describe("When Fullscreen component added to DOM", () => {
        let fullscreen: Fullscreen;
        beforeEach(() => {
          fullscreen = Utils.appendComponent<Fullscreen>(Fullscreen.tag);
        });
        afterEach(() => {
          fullscreen.remove();
        });
        it("Then fullscreen.templateId should be Fullscreen.tag", () => {
          expect(fullscreen.templateId).toBe(Fullscreen.tag);
        });
        describe("Given state defaults have been applied", () => {
          it("Then fullscreen.visible should be Visible.YES", () => {
            expect(fullscreen.visible).toEqual(Visible.YES);
          });
          it("Then fullscreen.state should be State.OFF", () => {
            expect(fullscreen.state).toEqual(State.OFF);
          });
          describe("Given Imperative API used", () => {
            describe("When fullscreen.hide()", () => {
              let onhide: jasmine.Spy;
              let event: CustomEvent;
              beforeEach(() => {
                onhide = jasmine.createSpy("onhide");
                fullscreen.onhide = onhide;
                fullscreen.hide();
                event = onhide.calls.mostRecent().args[0];
              });
              it("Then fullscreen.visible should be Visible.NO", () => {
                expect(fullscreen.visible).toEqual(Visible.NO);
              });
              it("Then html attribute visible should be Visible.NO", () => {
                let visible = fullscreen.getAttribute(Attribute.VISIBLE);
                expect(visible).toEqual(Visible.NO);
              });
              it("Then onhide should have been called", () => {
                expect(onhide).toHaveBeenCalled();
              });
              it("Then onhide custom event should have been called with ...args", () => {
                expect(event.detail).toEqual({ visible: Visible.NO });
              });
              describe("When fullscreen.show()", () => {
                let onshow: jasmine.Spy;
                let event: CustomEvent;
                beforeEach(() => {
                  onshow = jasmine.createSpy("onshow");
                  fullscreen.onshow = onshow;
                  fullscreen.show();
                  event = onshow.calls.mostRecent().args[0];
                });
                it("Then fullscreen.visible should be Visible.YES", () => {
                  expect(fullscreen.visible).toEqual(Visible.YES);
                });
                it("Then html attribute visible should be null", () => {
                  let visible = fullscreen.getAttribute(Attribute.VISIBLE);
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
            describe("When fullscreen.show()", () => {
              let onshow: jasmine.Spy;
              beforeEach(() => {
                onshow = jasmine.createSpy("onshow");
                fullscreen.onshow = onshow;
                fullscreen.show();
              });
              it("Then fullscreen.visible should be Visible.YES", () => {
                expect(fullscreen.visible).toEqual(Visible.YES);
              });
              it("Then html attribute visible should be null", () => {
                let visible = fullscreen.getAttribute(Attribute.VISIBLE);
                expect(visible).toEqual(null);
              });
              it("Then onshow should not have been called", () => {
                expect(onshow).not.toHaveBeenCalled();
              });
              describe("When fullscreen.hide()", () => {
                let onhide: jasmine.Spy;
                let event: CustomEvent;
                beforeEach(() => {
                  onhide = jasmine.createSpy("onhide");
                  fullscreen.onhide = onhide;
                  fullscreen.hide();
                  event = onhide.calls.mostRecent().args[0];
                });
                it("Then fullscreen.visible should be Visible.NO", () => {
                  expect(fullscreen.visible).toEqual(Visible.NO);
                });
                it("Then html attribute visible should be Visible.NO", () => {
                  let visible = fullscreen.getAttribute(Attribute.VISIBLE);
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
            describe("When fullscreen.on()", () => {
              let onon: jasmine.Spy;
              let event: CustomEvent;
              beforeEach(() => {
                onon = jasmine.createSpy("onon");
                fullscreen.onon = onon;
                fullscreen.on();
                event = onon.calls.mostRecent().args[0];
              });
              it("Then fullscreen.state should be State.ON", () => {
                expect(fullscreen.state).toEqual(State.ON);
              });
              it("Then html attribute state should be State.ON", () => {
                let state = fullscreen.getAttribute(Attribute.STATE);
                expect(state).toEqual(State.ON);
              });
              it("Then onon should have been called", () => {
                expect(onon).toHaveBeenCalled();
              });
              it("Then onon custom event should have been called with ...args", () => {
                expect(event.detail).toEqual({ state: State.ON });
              });
              describe("When fullscreen.off()", () => {
                let onoff: jasmine.Spy;
                let event: CustomEvent;
                beforeEach(() => {
                  onoff = jasmine.createSpy("onoff");
                  fullscreen.onoff = onoff;
                  fullscreen.off();
                  event = onoff.calls.mostRecent().args[0];
                });
                it("Then fullscreen.state should be State.OFF", () => {
                  expect(fullscreen.state).toEqual(State.OFF);
                });
                it("Then html attribute state should be State.OFF", () => {
                  let state = fullscreen.getAttribute(Attribute.STATE);
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
            describe("When fullscreen.off()", () => {
              let onoff: jasmine.Spy;
              beforeEach(() => {
                onoff = jasmine.createSpy("onoff");
                fullscreen.onoff = onoff;
                fullscreen.off();
              });
              it("Then fullscreen.state should be State.OFF", () => {
                expect(fullscreen.state).toEqual(State.OFF);
              });
              it("Then html attribute state should be null", () => {
                let state = fullscreen.getAttribute(Attribute.STATE);
                expect(state).toEqual(null);
              });
              it("Then onoff should not have been called", () => {
                expect(onoff).not.toHaveBeenCalled();
              });
              describe("When fullscreen.on()", () => {
                let onon: jasmine.Spy;
                let event: CustomEvent;
                beforeEach(() => {
                  onon = jasmine.createSpy("onon");
                  fullscreen.onon = onon;
                  fullscreen.on();
                  event = onon.calls.mostRecent().args[0];
                });
                it("Then fullscreen.state should be State.NO", () => {
                  expect(fullscreen.state).toEqual(State.ON);
                });
                it("Then html attribute state should be State.ON", () => {
                  let state = fullscreen.getAttribute(Attribute.STATE);
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
                fullscreen.onon = onon;
                fullscreen.dispatchEvent(new MouseEvent("click"));
              });
              it("Then fullscreen.state should be State.ON", () => {
                expect(fullscreen.state).toEqual(State.ON);
              });
              it("Then html attribute state should be State.ON", () => {
                let state = fullscreen.getAttribute(Attribute.STATE);
                expect(state).toEqual(State.ON);
              });
              it("Then onon should have been called once", () => {
                expect(onon).toHaveBeenCalledTimes(1);
              });
              describe("When click with mouse", () => {
                let onoff: jasmine.Spy;
                beforeEach(() => {
                  onoff = jasmine.createSpy("onoff");
                  fullscreen.onoff = onoff;
                  fullscreen.dispatchEvent(new MouseEvent("click"));
                });
                it("Then fullscreen.state should be State.OFF", () => {
                  expect(fullscreen.state).toEqual(State.OFF);
                });
                it("Then html attribute state should be State.OFF", () => {
                  let state = fullscreen.getAttribute(Attribute.STATE);
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
