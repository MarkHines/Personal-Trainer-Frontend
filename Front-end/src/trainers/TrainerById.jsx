import useQuery from "../api/useQuery";
import { useParams } from "react-router";


const TrainerById = () => {
  const { id } = useParams();
  const { data: trainer } = useQuery(`/trainers/${id}`, `trainers`);
  if(!trainer) return null;
  console.log(trainer)
  return (
    <section className="trainerDetails">
      <h1>Trainer Details</h1>
      <h2>{trainer.name}</h2>
      <img src={trainer.img_url} />
    </section>
  );
};

export default TrainerById;