import VirtualPet from "./models/VirtualPet";
import Dog from "./models/Dog";
import Cat from "./models/Cat";

export const decay = (pet: VirtualPet): void => {
  pet.hunger += 5;
  pet.happiness -= 5;
  if (pet.hunger >= 100) {
    pet.hunger = 100;
  }
  if (pet.happiness <= 0) {
    pet.happiness = 0;
  }
};

export const makePet = (name: string, type: string): VirtualPet => {
  if (type === "dog") {
    return new Dog(name);
  } else if (type === "cat") {
    return new Cat(name, "black");
  } else return new VirtualPet(name);
};

export const findMostSatisfied = (
  arr: VirtualPet[]
): VirtualPet | undefined => {
  if (arr.length === 0) return undefined;
  return arr.reduce((prev, curr) =>
    curr.getSatisfaction() > prev.getSatisfaction() ? curr : prev
  );
};
