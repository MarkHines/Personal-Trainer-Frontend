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
  `test description just to test the test of the test`);

  const qui = await createTrainer(`BIG Qui`,
    `http://localhost:3000/images/qui.jpg`,
    `the biggest Qui to ever Qui`);
  
  const fitFilm = await createTrainer(`The FIT Film Maker`,
    `http://localhost:3000/images/fit_film.JPG`,
    `the biggest Qui to ever Qui`);

  const theOx = await createTrainer(`BIG MACK`,
    `http://localhost:3000/images/the_ox.JPG`,
    `The OX that ox'd the OX`);
}
