import VirtualPet from "../src/models/VirtualPet";

describe("VirtualPet class", () => {
  test("all three properties are initialized to the correct values.", () => {
    const pet1 = new VirtualPet("Bill");
    expect(pet1.name).toBe("Bill");
    expect(pet1.hunger).toBe(50);
    expect(pet1.happiness).toBe(50);
  });
});

describe("describe method", () => {
  test("returns the current name, hunger, and happiness in a string", () => {
    const pet1 = new VirtualPet("Bill");
    expect(pet1.describe()).toBe("Name: Bill, Hunger: 50, Happiness: 50");
  });
  test("returns the current name, hunger, and happiness in a string", () => {
    const pet2 = new VirtualPet("Bob", 60);
    expect(pet2.describe()).toBe("Name: Bob, Hunger: 60, Happiness: 50");
  });
});

describe("getSatisfaction method", () => {
  test("returns a number calculated by adding happiness and subtracting hunger", () => {
    const pet1 = new VirtualPet("Bill");
    expect(pet1.getSatisfaction()).toBe(0);
  });
  test("returns a number calculated by adding happiness and subtracting hunger", () => {
    const pet2 = new VirtualPet("Bob", 60);
    expect(pet2.getSatisfaction()).toBe(-10);
  });
  test("returns a number calculated by adding happiness and subtracting hunger", () => {
    const pet3 = new VirtualPet("Bowie", 10, 90);
    expect(pet3.getSatisfaction()).toBe(80);
  });
});

describe("makeSound method", () => {
  test("returns the name and sound", () => {
    const pet1 = new VirtualPet("Bill");
    expect(pet1.makeSound("ribbet")).toBe("Bill says ribbet");
  });
  test("returns the name and sound", () => {
    const pet2 = new VirtualPet("Bugs Bunny");
    expect(pet2.makeSound("What's up, Doc?")).toBe(
      "Bugs Bunny says What's up, Doc?"
    );
  });
});

describe("feed method", () => {
  test("decreases the hunger level by 10", () => {
    const pet1 = new VirtualPet("Bill");
    pet1.feed();
    expect(pet1.hunger).toBe(40);
    pet1.feed();
    pet1.feed();
    pet1.feed();
    expect(pet1.hunger).toBe(10);
  });
  test(" (make sure it doesn't go below 0)", () => {
    const pet1 = new VirtualPet("Bill", 2);
    pet1.feed();
    pet1.feed();
    expect(pet1.hunger).toBe(0);
  });
});

describe("play method", () => {
  test("increases the happiness level by 10", () => {
    const pet1 = new VirtualPet("Bill");
    pet1.play();
    expect(pet1.happiness).toBe(60);
    pet1.play();
    pet1.play();
    expect(pet1.happiness).toBe(80);
  });
  test(" (make sure it doesn't go above 100)", () => {
    const pet2 = new VirtualPet("Bill", 50, 99);
    pet2.play();
    pet2.play();
    expect(pet2.happiness).toBe(100);
  });
});
