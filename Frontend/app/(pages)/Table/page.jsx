'use client'
import React from 'react'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
const page = () => {
    const [standings, setStandings] = useState([])
useEffect(() => {
    axios.get("https://v3.football.api-sports.io/standings?league=233&season=2021",
    {
        headers: {
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": "37df1a748199b2c70309ba22216f0e30"
    }
    }).then((res) => {
        setStandings(res.data.response[0].league.standings[0])
        console.log(res.data.response[0].league.standings[0])
        setLoading(true)
    })
    .catch((err) => {
        console.log(err)
    })
  }, [])
    return (
    <div className="w-full py-5 flex items-center bg-MODE1-primary dark:bg-MODE2-primary flex-col gap-3">
        <span className="text-xl text-MODE1-third tracking-[7px] dark:text-MODE2-third font-bold ">League Table</span>
        <table className="w-[60%] container mx-auto table">
            <thead className="w-full text-center border-b-[1px] pb-4 border-[#E5E5E5]">
                <tr className="w-full text-center text-MODE1-third dark:text-MODE2-third">
                    <th>Team</th>
                    <th>Win</th>
                    <th>Draw</th>
                    <th>Lose</th>
                    <th>GS</th>
                    <th>GA</th>
                    <th>GD</th>
                    <th>Points</th>
                    <th>Last 5</th>
                </tr>
            </thead>
                {
                    standings.map((team, index) => (
                        <tbody key={index} className="w-full text-center">
                            <tr className="w-full text-center py-2 text-MODE1-third dark:text-MODE2-third border-[1px] border-[#E5E5E5]">
                                <td className="text-center p-3 flex items-center justify-center border-r-[1px] border-[#E5E5E5]">
                                    <Image
                                        src={team.team.logo}
                                        alt={team.team.name}
                                        width={50}
                                        height={50}
                                    />
                                </td>
                                <td className='text-green-700'>{team.all.win}</td>
                                <td className='text-blue-700'>{team.all.draw}</td>
                                <td className='text-red-700'>{team.all.lose}</td>
                                <td>{team.all.goals.for}</td>
                                <td>{team.all.goals.against}</td>
                                <td>{team.all.goals.for - team.all.goals.against}</td>
                                <td>{team.points}</td>
                                <td className="">
                                    {/* Loop in string  */}
                                    {
                                        team.form[0] === "W" ?
                                            <span className="text-green-500">W</span>
                                            : team.form[0] === "L" ?
                                            <span className="text-red-500">L</span>
                                            : <span className="text-yellow-500">D</span>
                                    }
                                    {
                                        team.form[1] === "W" ?
                                            <span className="text-green-500">W</span>
                                            : team.form[1] === "L" ?
                                            <span className="text-red-500">L</span>
                                            : <span className="text-yellow-500">D</span>
                                    }
                                    {
                                        team.form[2] === "W" ?
                                            <span className="text-green-500">W</span>
                                            : team.form[2] === "L" ?
                                            <span className="text-red-500">L</span>
                                            : <span className="text-yellow-500">D</span>
                                    }
                                    {
                                        team.form[3] === "W" ?
                                            <span className="text-green-500">W</span>
                                            : team.form[3] === "L" ?
                                            <span className="text-red-500">L</span>
                                            : <span className="text-yellow-500">D</span>
                                    }
                                    {
                                        team.form[4] === "W" ?
                                            <span className="text-green-500">W</span>
                                            : team.form[4] === "L" ?
                                            <span className="text-red-500">L</span>
                                            : <span className="text-yellow-500">D</span>
                                    }
                                </td>
                            </tr>
                        </tbody>
                    ))
                }
        </table>
    </div>
  )
}

export default page