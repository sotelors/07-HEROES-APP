import { heroes } from "../data/heroes";

export const getHeroById = ( id ) =>{

    //const validPublishers = ['DC Comics','Marvel Comics'];

    return heroes.find( hero => hero.id === id);

}