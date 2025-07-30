import useQuery from "../api/useQuery";
import { useParams } from "react-router";
import Programs from "../programs/Programs";


const TrainerById = () => {
  const { id } = useParams();
  const { data: trainer } = useQuery(`/trainers/${id}`, `trainers`);
  if(!trainer) return null;
  return (
      <>
        <h1>Trainer Details</h1>
        <section className="trainerDetails">
          <h2>{trainer.name}</h2>
          <img src={trainer.img_url} />
          <h3>About {trainer.name}</h3>
          <p>{trainer.bio}</p>
        </section>
        <Programs trainer={trainer}/>
      </>
  );
};

export default TrainerById;