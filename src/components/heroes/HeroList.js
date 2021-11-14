import React, { useMemo } from "react";
import { getHeroesByPublisher } from "../../selector/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {

    const heroes = useMemo( () =>  getHeroesByPublisher( publisher ), [ publisher ]);

  //const heroes = getHeroesByPublisher( publisher );
  //const heroes = getHeroesByPublisher(publisher);

  return (
    <div className="row row-cols-1 row-cols-md-4 g-4 animate__animated animate__fadeIn">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>

    // <div className="row mx-lg-n5">

    //         {
    //             heroes.map( hero => (
    //                 <HeroCard
    //                     key={ hero.id }
    //                     { ...hero }
    //                 />
    //             ))
    //         }

    // </div>

    /*dddd
<div class="container">
<div class="row col">
<div class="col-6 col-md-4">
{
                    heroes.map( hero => (
                        <HeroCard 
                            key={ hero.id }
                            { ...hero }
                        />
                    ))
                }
</div>

<div class="col-6 col-md-4">
{
                    heroes.map( hero => (
                        <HeroCard 
                            key={ hero.id }
                            { ...hero }
                        />
                    ))
                }
</div>

<div class="col-6 col-md-4">
{
                    heroes.map( hero => (
                        <HeroCard 
                            key={ hero.id }
                            { ...hero }
                        />
                    ))
                }
</div>

</div>
</div>


        
*/

    // <ul>
    //     {
    //         heroes.map( hero => (
    //             <li key={ hero.id }>
    //                 {hero.superhero}
    //             </li>
    //         ))
    //     }
    // </ul>
  );
};
