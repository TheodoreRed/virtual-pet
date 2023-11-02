import VirtualPet from "./VirtualPet";

export default class Dog extends VirtualPet {
  //override play method
  play() {
    if (this.happiness + 15 >= 100) {
      this.happiness = 100;
    } else {
      this.happiness += 15;
    }
  }
}
