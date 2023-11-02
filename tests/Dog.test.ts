import Dog from "../src/models/Dog";

describe("Dog class", () => {
  test(" a new instance of Dog has name set from the constructor parameter and hunger and happiness are set to 50", () => {
    const dog1 = new Dog("Rover");
    expect(dog1.name).toBe("Rover");
    expect(dog1.hunger).toBe(50);
    expect(dog1.happiness).toBe(50);
  });
});

describe("play method for Dog", () => {
  test("Calling play increases happiness by 15.", () => {
    const dog1 = new Dog("Rover");
    dog1.play();
    expect(dog1.happiness).toBe(65);
    dog1.play();
    expect(dog1.happiness).toBe(80);
  });
  test("Calling play does not increase happiness past 100.", () => {
    const dog1 = new Dog("Rover", 50, 90);
    dog1.play();
    expect(dog1.happiness).toBe(100);
    dog1.play();
    expect(dog1.happiness).toBe(100);
  });
});
