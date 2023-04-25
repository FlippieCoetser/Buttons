import { Utils } from "../src/utilities/utilities.js";

import { Tag } from "../node_modules/@browser-modules/component.library/lib/library.js";

import {
  Attribute,
  Visible,
  State,
  Operation,
} from "../src/button.metadata.js";
import { Left } from "../src/Button.Left.js";

import { template } from "../src/templates/Button.Left.template.js";

describe("Given Left imported", () => {
  it("Then Left should be defined", () => {
    expect(Left).toBeDefined();
  });
  it("Then Left.tag should be Tag.Left", () => {
    expect(Left.tag).toBe(Tag.LEFT);
  });
  it("Then Left.attributes should equal Attribute", () => {
    expect(Left.attributes).toEqual(Attribute);
  });
  describe("Given Left defined", () => {
    beforeEach(() => {
      Utils.defineComponent(Left.tag, Left);
    });
    it("Then custom element registry should contain Left", () => {
      expect(customElements.get(Left.tag)).toBe(Left);
    });
    describe("Given HTML Template added to DOM", () => {
      let HTMLTemplate: HTMLTemplateElement;
      beforeEach(() => {
        HTMLTemplate = Utils.appendTemplate(Left.tag, template);
      });
      afterEach(() => {
        Utils.removeTemplate(Left.tag);
      });
      it("Then a HTML Template should be available in DOM", () => {
        expect(document.getElementsByTagName("template")).toHaveSize(1);
      });
      describe("When Left component added to DOM", () => {
        let left: Left;
        beforeEach(() => {
          left = Utils.appendComponent<Left>(Left.tag);
        });
        afterEach(() => {
          left.remove();
        });
        it("Then left.templateId should be Left.tag", () => {
          expect(left.templateId).toBe(Left.tag);
        });
        describe("Given state defaults have been applied", () => {
          it("Then left.visible should be Visible.YES", () => {
            expect(left.visible).toEqual(Visible.YES);
          });
          it("Then left.state should be State.UP", () => {
            expect(left.state).toEqual(State.UP);
          });
          describe("Given Imperative API used", () => {
            describe("When left.hide()", () => {
              let onhide: jasmine.Spy;
              beforeEach(() => {
                onhide = jasmine.createSpy("onhide");
                left.onhide = onhide;
                left.hide();
              });
              it("Then left.visible should be Visible.NO", () => {
                expect(left.visible).toEqual(Visible.NO);
              });
              it("Then html attribute visible should be Visible.NO", () => {
                let visible = left.getAttribute(Attribute.VISIBLE);
                expect(visible).toEqual(Visible.NO);
              });
              it("Then onhide should have been called", () => {
                expect(onhide).toHaveBeenCalled();
              });
              describe("When left.hide()", () => {
                let onhide: jasmine.Spy;
                beforeEach(() => {
                  onhide = jasmine.createSpy("onhide");
                  left.onhide = onhide;
                  left.hide();
                });
                it("Then left.visible should be Visible.NO", () => {
                  expect(left.visible).toEqual(Visible.NO);
                });
                it("Then html attribute visible should be null", () => {
                  let visible = left.getAttribute(Attribute.VISIBLE);
                  expect(visible).toEqual(Visible.NO);
                });
                it("Then onhide should have been called once", () => {
                  expect(onhide).toHaveBeenCalledTimes(0);
                });
              });
              describe("When left.show()", () => {
                let onshow: jasmine.Spy;
                beforeEach(() => {
                  onshow = jasmine.createSpy("onshow");
                  left.onshow = onshow;
                  left.show();
                });
                it("Then left.visible should be Visible.YES", () => {
                  expect(left.visible).toEqual(Visible.YES);
                });
                it("Then html attribute visible should be null", () => {
                  let visible = left.getAttribute(Attribute.VISIBLE);
                  expect(visible).toEqual(null);
                });
                it("Then onshow should have been called once", () => {
                  expect(onshow).toHaveBeenCalledTimes(1);
                });
              });
            });
            describe("When left.show()", () => {
              let onshow: jasmine.Spy;
              beforeEach(() => {
                onshow = jasmine.createSpy("onshow");
                left.onshow = onshow;
                left.show();
              });
              it("Then left.visible should be Visible.YES", () => {
                expect(left.visible).toEqual(Visible.YES);
              });
              it("Then html attribute visible should be null", () => {
                let visible = left.getAttribute(Attribute.VISIBLE);
                expect(visible).toEqual(null);
              });
              it("Then onshow should not have been called", () => {
                expect(onshow).not.toHaveBeenCalled();
              });
              describe("When left.hide()", () => {
                let onhide: jasmine.Spy;
                beforeEach(() => {
                  onhide = jasmine.createSpy("onhide");
                  left.onhide = onhide;
                  left.hide();
                });
                it("Then left.visible should be Visible.NO", () => {
                  expect(left.visible).toEqual(Visible.NO);
                });
                it("Then html attribute visible should be Visible.NO", () => {
                  let visible = left.getAttribute(Attribute.VISIBLE);
                  expect(visible).toEqual(Visible.NO);
                });
                it("Then onhide should have been called once", () => {
                  expect(onhide).toHaveBeenCalledTimes(1);
                });
              });
            });
            describe("When left.press()", () => {
              let ondown: jasmine.Spy;
              beforeEach(() => {
                ondown = jasmine.createSpy("onon");
                left.ondown = ondown;
                left.press();
              });
              it("Then left.state should be State.DOWN", () => {
                expect(left.state).toEqual(State.DOWN);
              });
              it("Then html attribute state should be State.DOWN", () => {
                let state = left.getAttribute(Attribute.STATE);
                expect(state).toEqual(State.DOWN);
              });
              it("Then ondown should have been called", () => {
                expect(ondown).toHaveBeenCalled();
              });
              describe("When left.press()", () => {
                let ondown: jasmine.Spy;

                beforeEach(() => {
                  ondown = jasmine.createSpy("onon");
                  left.ondown = ondown;
                  left.press();
                });
                it("Then left.state should be State.DOWN", () => {
                  expect(left.state).toEqual(State.DOWN);
                });
                it("Then html attribute state should be State.DOWN", () => {
                  let state = left.getAttribute(Attribute.STATE);
                  expect(state).toEqual(State.DOWN);
                });
                it("Then ondown should have been called", () => {
                  expect(ondown).toHaveBeenCalledTimes(0);
                });
              });
              describe("When left.release()", () => {
                let onup: jasmine.Spy;
                beforeEach(() => {
                  onup = jasmine.createSpy("onup");
                  left.onup = onup;
                  left.release();
                });
                it("Then left.state should be State.UP", () => {
                  expect(left.state).toEqual(State.UP);
                });
                it("Then html attribute state should be State.UP", () => {
                  let state = left.getAttribute(Attribute.STATE);
                  expect(state).toEqual(State.UP);
                });
                it("Then onup should have been called once", () => {
                  expect(onup).toHaveBeenCalledTimes(1);
                });
              });
            });
            describe("When left.release()", () => {
              let onup: jasmine.Spy;
              beforeEach(() => {
                onup = jasmine.createSpy("onup");
                left.onup = onup;
                left.release();
              });
              it("Then left.state should be State.UP", () => {
                expect(left.state).toEqual(State.UP);
              });
              it("Then html attribute state should be null", () => {
                let state = left.getAttribute(Attribute.STATE);
                expect(state).toEqual(null);
              });
              it("Then onup should not have been called", () => {
                expect(onup).not.toHaveBeenCalled();
              });
              describe("When left.press()", () => {
                let ondown: jasmine.Spy;
                beforeEach(() => {
                  ondown = jasmine.createSpy("ondown");
                  left.ondown = ondown;
                  left.press();
                });
                it("Then left.state should be State.DOWN", () => {
                  expect(left.state).toEqual(State.DOWN);
                });
                it("Then html attribute state should be State.DOWN", () => {
                  let state = left.getAttribute(Attribute.STATE);
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
                left.ondown = ondown;
                left.dispatchEvent(new MouseEvent("mousedown"));
              });
              it("Then left.state should be State.DOWN)", () => {
                expect(left.state).toEqual(State.DOWN);
              });
              it("Then html attribute state should be State.DOWN", () => {
                let state = left.getAttribute(Attribute.STATE);
                expect(state).toEqual(State.DOWN);
              });
              it("Then ondown should have been called once", () => {
                expect(ondown).toHaveBeenCalledTimes(1);
              });
              describe("When mouse up", () => {
                let onup: jasmine.Spy;
                beforeEach(() => {
                  onup = jasmine.createSpy("onup");
                  left.onup = onup;
                  left.dispatchEvent(new MouseEvent("mouseup"));
                });
                it("Then left.state should be State.UP", () => {
                  expect(left.state).toEqual(State.UP);
                });
                it("Then html attribute state should be State.UP", () => {
                  let state = left.getAttribute(Attribute.STATE);
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
                left.ondown = ondown;
                left.dispatchEvent(new TouchEvent("touchstart"));
              });
              it("Then left.state should be State.DOWN)", () => {
                expect(left.state).toEqual(State.DOWN);
              });
              it("Then html attribute state should be State.DOWN", () => {
                let state = left.getAttribute(Attribute.STATE);
                expect(state).toEqual(State.DOWN);
              });
              it("Then ondown should have been called once", () => {
                expect(ondown).toHaveBeenCalledTimes(1);
              });
              describe("When mouse up", () => {
                let onup: jasmine.Spy;
                beforeEach(() => {
                  onup = jasmine.createSpy("onup");
                  left.onup = onup;
                  left.dispatchEvent(new TouchEvent("touchend"));
                });
                it("Then left.state should be State.UP", () => {
                  expect(left.state).toEqual(State.UP);
                });
                it("Then html attribute state should be State.UP", () => {
                  let state = left.getAttribute(Attribute.STATE);
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
