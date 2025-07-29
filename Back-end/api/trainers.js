import { getAllTrainers } from '#db/queries/trainers';
import express from 'express';
const trainersRouter = express.Router();
export default trainersRouter;

trainersRouter.get(`/`, async (request, response) => {
  const trainers = await getAllTrainers();
  response.send(trainers)
})