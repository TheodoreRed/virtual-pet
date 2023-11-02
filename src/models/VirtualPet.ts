export default class VirtualPet {
  name: string;
  hunger: number;
  happiness: number;
  constructor(name: string, hunger: number = 50, happiness: number = 50) {
    this.name = name;
    this.hunger = hunger;
    this.happiness = happiness;
  }
  describe(): string {
    return `Name: ${this.name}, Hunger: ${this.hunger}, Happiness: ${this.happiness}`;
  }
  getSatisfaction(): number {
    return this.happiness - this.hunger;
  }
  makeSound(sound: string): string {
    return `${this.name} says ${sound}`;
  }
  feed(): void {
    this.hunger -= 10;
    if (this.hunger < 0) {
      this.hunger = 0;
    }
  }
  play(): void {
    this.happiness += 10;
    if (this.happiness > 100) {
      this.happiness = 100;
    }
  }
}
