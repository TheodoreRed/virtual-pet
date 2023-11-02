import { decay, makePet, findMostSatisfied } from "../src/pet-functions";
import VirtualPet from "../src/models/VirtualPet";
import Cat from "../src/models/Cat";
import Dog from "../src/models/Dog";
import Fish from "../src/models/Fish";

describe("decay function", () => {
  test("Test that hunger and happiness are adjusted accordingly", () => {
    const pet1 = new VirtualPet("Bill");
    decay(pet1);
    expect(pet1.hunger).toBe(55);
    expect(pet1.happiness).toBe(45);
    decay(pet1);
    expect(pet1.hunger).toBe(60);
    expect(pet1.happiness).toBe(40);
  });
  test(`hunger does not go above 100, happiness does not go below 0`, () => {
    const pet1 = new VirtualPet("Bill", 99, 1);
    decay(pet1);
    decay(pet1);
    decay(pet1);
    decay(pet1);
    decay(pet1);
    expect(pet1.hunger).toBe(100);
    expect(pet1.happiness).toBe(0);
  });
});

describe("makePet function", () => {
  test("A test case for returning a Dog. Verify the name.", () => {
    const newPet = makePet("Fred", "dog");
    expect(newPet.name).toBe("Fred");
    expect(newPet instanceof Dog).toBeTruthy();
  });
  test("A test case for returning a Cat. Verify the name.", () => {
    const newPet = makePet("Fred", "cat") as Cat;
    expect(newPet.name).toBe("Fred");
    expect(newPet.color).toBe("black");
    expect(newPet instanceof Cat).toBeTruthy();
  });
  test("A test case for returning a VirtualPet. Verify the name.", () => {
    const newPet = makePet("pet", "anything else");
    expect(newPet.name).toBe("pet");
    expect(newPet instanceof VirtualPet).toBeTruthy();
  });
});

describe("findMostSatisfied function", () => {
  test("returns undefined for an empty array", () => {
    const pets: VirtualPet[] = [];
    expect(findMostSatisfied(pets)).toBeUndefined();
  });

  test("returns the most satisfied pet", () => {
    const pet1 = new Dog("Dog1", 40, 80);
    const pet2 = new Cat("Cat1", "black", 30, 50);
    const pet3 = new VirtualPet("VirtualPet1", 10, 20);
    const pet4 = new Fish("Fishy", true, 15, 90);

    const pets: VirtualPet[] = [pet1, pet2, pet3, pet4];

    expect(findMostSatisfied(pets)).toBe(pet4);
  });
});
