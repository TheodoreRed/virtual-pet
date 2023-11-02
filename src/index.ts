import promptly from "promptly";
import Dog from "./models/Dog";
import Cat from "./models/Cat";
import VirtualPet from "./models/VirtualPet";
import { decay } from "./pet-functions";
import Fish from "./models/Fish";

async function main() {
  const petType = await promptly.choose("What type of pet? (dog, cat, fish)", [
    "dog",
    "cat",
    "fish",
  ]);
  const name = await promptly.prompt("Enter the pet's name: ");
  let pet: null | VirtualPet = null;
  if (petType === "dog") {
    pet = new Dog(name);
  } else if (petType === "fish") {
    let large = false;
    const isLargeFish = await promptly.prompt("Fish is large? (true, false)");
    if (isLargeFish === "true") {
      large = true;
    }
    pet = new Fish(name, large);
  } else {
    const color = await promptly.prompt("Enter the pet's color: ");
    pet = new Cat(name, color);
  }
  const sound = await promptly.prompt("What sound does this pet make? ");

  let exit = false;
  while (!exit) {
    console.log(pet.describe());
    console.log("Satisfaction: " + pet.getSatisfaction());
    console.log();

    const action = await promptly.choose(
      "What do you want to do? (feed, play, sound, nothing, exit)",
      ["feed", "play", "sound", "nothing", "exit"]
    );
    if (action === "exit") {
      exit = true;
      break;
    } else if (action === "feed") {
      pet.feed();
      console.log(`${pet.name} has been fed.`);
    } else if (action === "play") {
      pet.play();
      console.log(`${pet.name} has played.`);
    } else if (action == "sound") {
      console.log(pet.makeSound(sound));
    } else if (action == "nothing") {
      decay(pet);
    }
  }
}

main().catch((err) => console.error(err));
