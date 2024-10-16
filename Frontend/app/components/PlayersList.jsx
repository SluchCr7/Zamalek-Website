import React from 'react'
import {PlayersTeam} from "../Players"
import PlayerCard from './PlayerCard'
import Link from 'next/link'
const PlayersList = () => {
    return (
        <div className='flex items-start gap-3 flex-col left w-full py-5'>   
            <span className='text-2xl text-MODE1-secondary dark:text-MODE2-secondary font-bold pb-3'>لاعبي الفريق الاول</span>
            <div className='grid grid-cols-4 gap-3 w-full'>
                {
                    PlayersTeam.map((player , index) => {
                        return (
                            <PlayerCard  key={index} Contact_expired={player.Contact_expired} Height={player.Height} Last_Clubs={player.Last_Clubs} Foot={player.Foot} Birthday={player.Birthday} Club={player.Club} nameLink={player.nameLink} id={player.id}  name={player.Name} img={player.Image} Number={player.Number} age={player.Age} position={player.Position} country={player.Country} />
                        )
                    }).slice(0 , 4)
                }
            </div>
            <div className='w-full items-center flex justify-center pt-3'>
                <button className='flex items-center justify-center w-[200px] p-3 text-MODE1-primary dark:text-MODE2-primary bg-MODE1-third dark:bg-MODE2-third text-center rounded-sm'>
                    <Link href={'/Players'}>Show More</Link>
                </button>
            </div>
        </div>
    )
}

export default PlayersList