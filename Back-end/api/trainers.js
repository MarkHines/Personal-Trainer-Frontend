import express from 'express';
const trainersRouter = express.Router();
export default trainersRouter;

import { getAllTrainers, getTrainerById } from '#db/queries/trainers';


trainersRouter.get(`/`, async (request, response) => {
  const trainers = await getAllTrainers();
  response.send(trainers)
})

trainersRouter.get(`/:id`, async (request, response) => {
  const { id } = request.params;
  const trainer = await getTrainerById(id)
  response.send(trainer)
})