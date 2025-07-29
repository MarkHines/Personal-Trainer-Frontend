import useQuery from '/src/api/useQuery';
import { useState } from 'react';

const Trainers = () => {
  const { data: trainers } = useQuery(`/trainers`, `trainers`);
  const [ selectedTrainer, setSelectedTrainer ] = useState();
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
              <button>Select Trainer</button>
            </section>
          ) : ( 
            <>
              <p>Please Select a Trainer</p>
            </>
          )
        }
      </section>
    </>
  )
};

export default Trainers;