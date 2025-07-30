import useQuery from '../api/useQuery';
import { Link } from 'react-router';


const Programs = ({ trainer }) => {
  const { data: programs } = useQuery(`/trainers/${trainer.id}/programs`, `programs`);
  
  return (
    <>
      <h1>Programs</h1>
      {
        programs && programs.map((program) => {
          return (
            <Link to={`/programs/${program.id}`} key={program.id}>
              {program.name}
            </Link>
          )
        })
      }
    </>
  );
};

export default Programs