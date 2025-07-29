import db from "#db/client";
import { createUser } from "#db/queries/users";
import { createTrainer } from "#db/queries/trainers";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  await createUser("username", "password");
  
  const gbst = await createTrainer(`Mr. Plate Banger`, 
    `http://localhost:3000/images/trainer_image.jpg`,
  `Over Train, Under Complain! Plates and MORE PLATES!!`);

  const qui = await createTrainer(`BIG Qui`,
    `http://localhost:3000/images/qui.jpg`,
    `Scientific Focus, but the science says TRAIN HARD!!`);
  
  const fitFilm = await createTrainer(`The FIT Film Maker`,
    `http://localhost:3000/images/fit_film.JPG`,
    `Sports & Fitness Instruction: Faith, Fitness, Family`);

  const theOx = await createTrainer(`BIG MACK`,
    `http://localhost:3000/images/the_ox.JPG`,
    `Powerlifter at heart, athlete by design — strength with purpose`);
}
