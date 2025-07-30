import { useParams } from "react-router";
import useQuery from "../api/useQuery";
import { Link } from "react-router";


const ProgramsById = () => {
  const { id } = useParams();
  const { data: program } = useQuery(`/programs/${id}`, `program`)
  if(!program) return null;
  return (
    <>
      <Link to={`/trainers/${program.trainer_id}`}>Go Back</Link>
      <h1>Program: {program.name}</h1>
      <h3>This program is to be completed over the next {program.frequency} weeks</h3>
      <p>Contact your trainer with any questions regarding this program</p>
      <br></br>
      <p>{program.description}</p>
    </>
  );
};

export default ProgramsById