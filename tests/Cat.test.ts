import Cat from "../src/models/Cat";

describe("Cat class", () => {
  test("a new instance of Cat has name and color set from the constructor parameters and hunger and happiness are set to 50", () => {
    const cat1 = new Cat("Whiskers", "black");
    expect(cat1.name).toBe("Whiskers");
    expect(cat1.color).toBe("black");
    expect(cat1.hunger).toBe(50);
    expect(cat1.happiness).toBe(50);
  });
  test(`getAttitude returns "grumpy" for neutral satisfaction`, () => {
    const cat1 = new Cat("Fluffy", "black");
    expect(cat1.getAttitude()).toBe("grumpy");
  });
  test(`getAttitude returns "inquisitive" for positive satisfaction`, () => {
    const cat1 = new Cat("Fluffy", "black");
    cat1.play();
    expect(cat1.getAttitude()).toBe("inquisitive");
  });
  test(`getAttitude returns "grumpy" for negative satisfaction`, () => {
    const cat1 = new Cat("Fluffy", "black");
    cat1.hunger = 90;
    expect(cat1.getSatisfaction()).toBe(-40);
    expect(cat1.getAttitude()).toBe("grumpy");
  });
});
