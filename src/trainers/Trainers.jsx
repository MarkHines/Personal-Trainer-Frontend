import useQuery from '/src/api/useQuery';
import { useState } from 'react';
import { useNavigate } from 'react-router';


const Trainers = () => {
  const { data: trainers } = useQuery(`/trainers`, `trainers`);
  const [ selectedTrainer, setSelectedTrainer ] = useState();
  const navigate = useNavigate();

  const eventHandler = (event, trainer) => {
    event.preventDefault();
    setSelectedTrainer(trainer);
  }

  if(!trainers) return null; 
  return (
    <>
    <h1>Trainers</h1>
      <section className='allTrainers'>
        {
          trainers && 

          trainers.map((trainer) => {
            return (
              <section className='trainerCard' key={trainer.id}>
                <h3>{trainer.name}</h3>
                <img 
                  src={trainer.img_url} 
                  onClick={(event) => eventHandler(event, trainer)}
                />
              </section>
            )
          })
        }
      </section>
      <br></br>
      <section className='trainerHighlight'>
        <h2>Trainer Highlight</h2>
        {
          selectedTrainer ? (
            <section>
              <p>{selectedTrainer.description}</p>
              <button onClick={(event) => {navigate(`/trainers/${selectedTrainer.id}`)}}>Select Trainer</button>
            </section>
          ) : ( 
            <section className='trainerHighlight'>
              <p>Please Select a Trainer</p>
            </section>
          )
        }
      </section>
    </>
  )
};

export default Trainers;