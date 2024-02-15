import {clsx} from "./clsx";

describe("clsx", () => {
    test("test", () => {
        expect(clsx("someClass")).toBe("someClass");
    });

    test("with additional class", () => {
        const expeted = "someClass class1 class2 hovered scrollable";
        expect(
            clsx("someClass", {hovered: true, scrollable: true}, [
                "class1",
                "class2",
            ]),
        ).toBe(expeted);
    });

    test("with additional class", () => {
        const expeted = "someClass class1 class2 hovered ";
        expect(
            clsx("someClass", {hovered: true, scrollable: false}, [
                "class1",
                "class2",
            ]),
        ).toBe(expeted);
    });
});

// function hello(name: string) {
//     console.log(`Hello ${name}`);
// }
//
// hello("Alymzhan");
