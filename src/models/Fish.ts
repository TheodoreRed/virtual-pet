import VirtualPet from "./VirtualPet";

export default class Fish extends VirtualPet {
  isLarge: boolean;
  constructor(
    name: string,
    isLarge: boolean,
    hunger: number = 50,
    happiness: number = 50
  ) {
    super(name, hunger, happiness);
    this.isLarge = isLarge;
  }
  feed(): void {
    if (this.isLarge) {
      this.hunger -= 5;
    } else {
      super.feed();
    }
    if (this.hunger <= 0) {
      this.hunger = 0;
    }
  }
}
