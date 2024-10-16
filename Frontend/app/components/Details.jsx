'use client'
import axios from 'axios'
import Image from 'next/image'
import React from 'react'
import { useEffect , useState } from 'react'
import DataTable from 'react-data-table-component'
const Details = () => {
  const [standings, setStandings] = useState([])
  const [loading , setLoading] = useState(false)
  const [fixtures, setFixtures] = useState([])
  useEffect(() => {
    axios.get("https://v3.football.api-sports.io/standings?league=233&season=2022",
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
  useEffect(()=>{
    axios.get("https://v3.football.api-sports.io/fixtures?league=233&season=2022&team=1040", {
      headers: {
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
          "x-rapidapi-key": "37df1a748199b2c70309ba22216f0e30"
      }
    }).then((res) => {
      console.log(res.data)
      setFixtures(res.data.response)
    })
    .catch((err) => {
        console.log(err)
    })
  },[])
  return (
    <div className='w-full flex flex-col items-center justify-center py-3'>
      <h1 className='text-3xl text-MODE1-third dark:text-MODE2-third font-bold text-center mb-6'>League Standings</h1>
        {
          loading ?
          <div className='flex justify-center gap-3 w-full'>
            <table className="w-[60%] table-auto">
            <thead className='text-center'>
              <tr className='text-center text-MODE1-secondary dark:text-MODE2-secondary'>
                <th>Team</th>
                <th>Wins</th>
                <th>Draws</th>
                <th>Losses</th>
                {/* <th>GF</th>
                <th>GA</th>
                <th>GD</th> */}
                <th>Points</th>
              </tr>
            </thead>
            <tbody className='text-center'>
              {
                standings.map((standing) => (
                  <tr key={standing.team.id} className={`text-center rounded-sm 
                      ${standing.description === "CAF Champions League" ? 'bg-green-800'
                      : standing.description === "CAF Confederation Cup" ? 'bg-blue-800' : 
                      standing.description === "Relegation" ? 'bg-red-800' : ""
                    } text-MODE1-third dark:text-MODE2-third`}>
                  
                    <td className='flex items-center justify-center p-3'>
                      <Image src={standing.team.logo} alt={standing.team.name} width={50} height={50} />
                    </td>
                    <td>{standing.all.win}</td>
                    <td>{standing.all.draw}</td>
                    <td>{standing.all.lose}</td>
                    {/* <td>{standing.all.goals.for}</td>
                    <td>{standing.all.goals.against}</td>
                    <td>{standing.all.goals.for - standing.all.goals.against}</td> */}
                    <td>{standing.points}</td>
                </tr>
                )).slice(0 , 5)
                }
              </tbody>
            </table> 
            <div className='w-[40%] grid grid-cols-2 gap-2'>
              {
                fixtures.map((fixtures) => (
                  <div key={fixtures.fixture.id} className='flex flex-col items-center gap-4'>
                    {/* <Image src={fixtures.league.logo} alt={fixtures.league.name} width={50} height={50} /> */}
                    <div className='flex flex-col gap-2 items-center'>
                      <div className='flex flex-row items-center gap-1 hover:bg-[#f5f5f5] p-2 w-full rounded-md transition-all duration-700'>
                        <div className='flex items-center gap-1'>
                          {/* <span>{fixtures.teams.home.name}</span> */}
                          <Image src={fixtures.teams.home.logo} alt={fixtures.teams.home.name} width={50} height={50} />
                        </div>
                        <span className='font-bold text-MODE1-secondary dark:text-MODE2-secondary'>{fixtures.goals.home}</span>
                        <span className='font-bold text-MODE1-third dark:text-MODE2-third'>-</span>
                        <span className='font-bold text-MODE1-secondary dark:text-MODE2-secondary'>{fixtures.goals.away}</span>
                        <div className='flex items-center gap-1'>
                          {/* <span>{fixtures.teams.away.name}</span> */}
                          <Image src={fixtures.teams.away.logo} alt={fixtures.teams.away.name} width={50} height={50} />
                        </div>
                      </div>
                      <span className='text-MODE1-secondary dark:text-MODE2-secondary'>{new Date(fixtures.fixture.date).toLocaleDateString()}</span>
                      {/* <span>{fixtures.fixture.venue.name}</span> */}
                    </div>
                  </div>
                )).slice(0 , 6)
              }
            </div>
          </div>
            : 
            <div className='flex items-center justify-center w-[100%]'>
                <div className='w-[80px] itemanimate flex items-center justify-center h-[80px] border-[2px] border-primary rounded-full'></div>
            </div> 
        }
    </div>
  )
}

export default Details