import Fish from "../src/models/Fish";

describe("Fish class", () => {
  test("a new instance of Fish has name set from the constructor parameters, isLarge set, and hunger and happiness are set to 50", () => {
    const fish1 = new Fish("Goldie", true);
    expect(fish1.name).toBe("Goldie");
    expect(fish1.isLarge).toBe(true);
    expect(fish1.hunger).toBe(50);
    expect(fish1.happiness).toBe(50);
  });

  test("feeding a large fish decreases hunger by 5", () => {
    const fish1 = new Fish("Sharky", true); // Large fish
    fish1.feed();
    expect(fish1.hunger).toBe(45);
  });

  test("feeding a small fish decreases hunger by 10", () => {
    const fish1 = new Fish("Bubbles", false); // Small fish
    fish1.feed();
    expect(fish1.hunger).toBe(40);
  });

  test(" (make sure it doesn't go below 0)", () => {
    const pet1 = new Fish("Fishy", false, 2);
    pet1.feed();
    pet1.feed();
    expect(pet1.hunger).toBe(0);
  });
});
