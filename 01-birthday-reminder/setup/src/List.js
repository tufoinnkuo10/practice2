import React from 'react';

const List = ({people, setPeople}) => {
  const remover = (id)=>{
    console.log(id)
    let remain=people.filter((person)=>person.id !==id)
    setPeople(remain)
  }
  return (
    <>
      {people.map((person)=>{
        const {id,name,age,image}=person;
        return <article key={id} className='person'>
          <img src={image} alt={name}></img>
          <div>
            <h4>{name}</h4>
            <p>{age} years</p>
            <button className='btn' onClick={()=>remover(id)}>
              remove
            </button>
          </div>


        </article>
      })}
    </>
  );
};

export default List;
