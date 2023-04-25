import { Utils } from "../src/utilities/utilities.js";

import { Tag } from "../node_modules/@browser-modules/component.library/lib/library.js";

import {
  Attribute,
  Visible,
  State,
  Operation,
} from "../src/button.metadata.js";
import { Maximize } from "../src/Button.Maximize.js";

import { template } from "../src/templates/Button.Maximize.template.js";

describe("Given Maximize imported", () => {
  it("Then Maximize should be defined", () => {
    expect(Maximize).toBeDefined();
  });
  it("Then Maximize.tag should be Tag.Maximize", () => {
    expect(Maximize.tag).toBe(Tag.MAXIMIZE);
  });
  it("Then Maximize.attributes should equal Attribute", () => {
    expect(Maximize.attributes).toEqual(Attribute);
  });
  describe("Given Maximize defined", () => {
    beforeEach(() => {
      Utils.defineComponent(Maximize.tag, Maximize);
    });
    it("Then custom element registry should contain Maximize", () => {
      expect(customElements.get(Maximize.tag)).toBe(Maximize);
    });
    describe("Given HTML Template added to DOM", () => {
      let HTMLTemplate: HTMLTemplateElement;
      beforeEach(() => {
        HTMLTemplate = Utils.appendTemplate(Maximize.tag, template);
      });
      afterEach(() => {
        Utils.removeTemplate(Maximize.tag);
      });
      it("Then a HTML Template should be available in DOM", () => {
        expect(document.getElementsByTagName("template")).toHaveSize(1);
      });
      describe("When Maximize component added to DOM", () => {
        let maximize: Maximize;
        beforeEach(() => {
          maximize = Utils.appendComponent<Maximize>(Maximize.tag);
        });
        afterEach(() => {
          maximize.remove();
        });
        it("Then maximize.templateId should be Maximize.tag", () => {
          expect(maximize.templateId).toBe(Maximize.tag);
        });
        describe("Given state defaults have been applied", () => {
          it("Then maximize.visible should be Visible.YES", () => {
            expect(maximize.visible).toEqual(Visible.YES);
          });
          it("Then maximize.state should be State.UP", () => {
            expect(maximize.state).toEqual(State.UP);
          });
          describe("Given Imperative API used", () => {
            describe("When maximize.hide()", () => {
              let onhide: jasmine.Spy;
              beforeEach(() => {
                onhide = jasmine.createSpy("onhide");
                maximize.onhide = onhide;
                maximize.hide();
              });
              it("Then maximize.visible should be Visible.NO", () => {
                expect(maximize.visible).toEqual(Visible.NO);
              });
              it("Then html attribute visible should be Visible.NO", () => {
                let visible = maximize.getAttribute(Attribute.VISIBLE);
                expect(visible).toEqual(Visible.NO);
              });
              it("Then onhide should have been called", () => {
                expect(onhide).toHaveBeenCalled();
              });
              describe("When maximize.hide()", () => {
                let onhide: jasmine.Spy;
                beforeEach(() => {
                  onhide = jasmine.createSpy("onhide");
                  maximize.onhide = onhide;
                  maximize.hide();
                });
                it("Then maximize.visible should be Visible.NO", () => {
                  expect(maximize.visible).toEqual(Visible.NO);
                });
                it("Then html attribute visible should be null", () => {
                  let visible = maximize.getAttribute(Attribute.VISIBLE);
                  expect(visible).toEqual(Visible.NO);
                });
                it("Then onhide should have been called once", () => {
                  expect(onhide).toHaveBeenCalledTimes(0);
                });
              });
              describe("When maximize.show()", () => {
                let onshow: jasmine.Spy;
                beforeEach(() => {
                  onshow = jasmine.createSpy("onshow");
                  maximize.onshow = onshow;
                  maximize.show();
                });
                it("Then maximize.visible should be Visible.YES", () => {
                  expect(maximize.visible).toEqual(Visible.YES);
                });
                it("Then html attribute visible should be null", () => {
                  let visible = maximize.getAttribute(Attribute.VISIBLE);
                  expect(visible).toEqual(null);
                });
                it("Then onshow should have been called once", () => {
                  expect(onshow).toHaveBeenCalledTimes(1);
                });
              });
            });
            describe("When maximize.show()", () => {
              let onshow: jasmine.Spy;
              beforeEach(() => {
                onshow = jasmine.createSpy("onshow");
                maximize.onshow = onshow;
                maximize.show();
              });
              it("Then maximize.visible should be Visible.YES", () => {
                expect(maximize.visible).toEqual(Visible.YES);
              });
              it("Then html attribute visible should be null", () => {
                let visible = maximize.getAttribute(Attribute.VISIBLE);
                expect(visible).toEqual(null);
              });
              it("Then onshow should not have been called", () => {
                expect(onshow).not.toHaveBeenCalled();
              });
              describe("When maximize.hide()", () => {
                let onhide: jasmine.Spy;
                beforeEach(() => {
                  onhide = jasmine.createSpy("onhide");
                  maximize.onhide = onhide;
                  maximize.hide();
                });
                it("Then maximize.visible should be Visible.NO", () => {
                  expect(maximize.visible).toEqual(Visible.NO);
                });
                it("Then html attribute visible should be Visible.NO", () => {
                  let visible = maximize.getAttribute(Attribute.VISIBLE);
                  expect(visible).toEqual(Visible.NO);
                });
                it("Then onhide should have been called once", () => {
                  expect(onhide).toHaveBeenCalledTimes(1);
                });
              });
            });
            describe("When maximize.press()", () => {
              let ondown: jasmine.Spy;
              beforeEach(() => {
                ondown = jasmine.createSpy("onon");
                maximize.ondown = ondown;
                maximize.press();
              });
              it("Then maximize.state should be State.DOWN", () => {
                expect(maximize.state).toEqual(State.DOWN);
              });
              it("Then html attribute state should be State.DOWN", () => {
                let state = maximize.getAttribute(Attribute.STATE);
                expect(state).toEqual(State.DOWN);
              });
              it("Then ondown should have been called", () => {
                expect(ondown).toHaveBeenCalled();
              });
              describe("When maximize.press()", () => {
                let ondown: jasmine.Spy;

                beforeEach(() => {
                  ondown = jasmine.createSpy("onon");
                  maximize.ondown = ondown;
                  maximize.press();
                });
                it("Then maximize.state should be State.DOWN", () => {
                  expect(maximize.state).toEqual(State.DOWN);
                });
                it("Then html attribute state should be State.DOWN", () => {
                  let state = maximize.getAttribute(Attribute.STATE);
                  expect(state).toEqual(State.DOWN);
                });
                it("Then ondown should have been called", () => {
                  expect(ondown).toHaveBeenCalledTimes(0);
                });
              });
              describe("When maximize.release()", () => {
                let onup: jasmine.Spy;
                beforeEach(() => {
                  onup = jasmine.createSpy("onup");
                  maximize.onup = onup;
                  maximize.release();
                });
                it("Then maximize.state should be State.UP", () => {
                  expect(maximize.state).toEqual(State.UP);
                });
                it("Then html attribute state should be State.UP", () => {
                  let state = maximize.getAttribute(Attribute.STATE);
                  expect(state).toEqual(State.UP);
                });
                it("Then onup should have been called once", () => {
                  expect(onup).toHaveBeenCalledTimes(1);
                });
              });
            });
            describe("When maximize.release()", () => {
              let onup: jasmine.Spy;
              beforeEach(() => {
                onup = jasmine.createSpy("onup");
                maximize.onup = onup;
                maximize.release();
              });
              it("Then maximize.state should be State.UP", () => {
                expect(maximize.state).toEqual(State.UP);
              });
              it("Then html attribute state should be null", () => {
                let state = maximize.getAttribute(Attribute.STATE);
                expect(state).toEqual(null);
              });
              it("Then onup should not have been called", () => {
                expect(onup).not.toHaveBeenCalled();
              });
              describe("When maximize.press()", () => {
                let ondown: jasmine.Spy;
                beforeEach(() => {
                  ondown = jasmine.createSpy("ondown");
                  maximize.ondown = ondown;
                  maximize.press();
                });
                it("Then maximize.state should be State.DOWN", () => {
                  expect(maximize.state).toEqual(State.DOWN);
                });
                it("Then html attribute state should be State.DOWN", () => {
                  let state = maximize.getAttribute(Attribute.STATE);
                  expect(state).toEqual(State.DOWN);
                });
                it("Then ondown should not have been called", () => {
                  expect(ondown).toHaveBeenCalledTimes(1);
                });
              });
            });
          });
          describe("Given User Gestures used", () => {
            describe("When mouse down", () => {
              let ondown: jasmine.Spy;
              beforeEach(() => {
                ondown = jasmine.createSpy("ondown");
                maximize.ondown = ondown;
                maximize.dispatchEvent(new MouseEvent("mousedown"));
              });
              it("Then maximize.state should be State.DOWN)", () => {
                expect(maximize.state).toEqual(State.DOWN);
              });
              it("Then html attribute state should be State.DOWN", () => {
                let state = maximize.getAttribute(Attribute.STATE);
                expect(state).toEqual(State.DOWN);
              });
              it("Then ondown should have been called once", () => {
                expect(ondown).toHaveBeenCalledTimes(1);
              });
              describe("When mouse up", () => {
                let onup: jasmine.Spy;
                beforeEach(() => {
                  onup = jasmine.createSpy("onup");
                  maximize.onup = onup;
                  maximize.dispatchEvent(new MouseEvent("mouseup"));
                });
                it("Then maximize.state should be State.UP", () => {
                  expect(maximize.state).toEqual(State.UP);
                });
                it("Then html attribute state should be State.UP", () => {
                  let state = maximize.getAttribute(Attribute.STATE);
                  expect(state).toEqual(State.UP);
                });
                it("Then onup should have been called once", () => {
                  expect(onup).toHaveBeenCalledTimes(1);
                });
              });
            });
            describe("When touch start", () => {
              let ondown: jasmine.Spy;
              beforeEach(() => {
                ondown = jasmine.createSpy("ondown");
                maximize.ondown = ondown;
                maximize.dispatchEvent(new TouchEvent("touchstart"));
              });
              it("Then maximize.state should be State.DOWN)", () => {
                expect(maximize.state).toEqual(State.DOWN);
              });
              it("Then html attribute state should be State.DOWN", () => {
                let state = maximize.getAttribute(Attribute.STATE);
                expect(state).toEqual(State.DOWN);
              });
              it("Then ondown should have been called once", () => {
                expect(ondown).toHaveBeenCalledTimes(1);
              });
              describe("When mouse up", () => {
                let onup: jasmine.Spy;
                beforeEach(() => {
                  onup = jasmine.createSpy("onup");
                  maximize.onup = onup;
                  maximize.dispatchEvent(new TouchEvent("touchend"));
                });
                it("Then maximize.state should be State.UP", () => {
                  expect(maximize.state).toEqual(State.UP);
                });
                it("Then html attribute state should be State.UP", () => {
                  let state = maximize.getAttribute(Attribute.STATE);
                  expect(state).toEqual(State.UP);
                });
                it("Then onup should have been called once", () => {
                  expect(onup).toHaveBeenCalledTimes(1);
                });
              });
            });
          });
        });
      });
    });
  });
});
