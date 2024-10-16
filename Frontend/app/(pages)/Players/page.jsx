import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PlayerCard from '@/app/components/PlayerCard'
import { PlayersTeam } from '@/app/Players'
const page = () => {
  const Links = [
    "اللاعبون",
    "حراس المرمي",
    "المدافعين",
    "لاعبي الوسط",
    "المهاجمون",
  ]
  return (
    <div className='flex items-center flex-col bg-MODE1-primary dark:bg-MODE2-primary justify-center w-full py-5'>
      <Tabs defaultValue="اللاعبون" className="w-[85%] flex items-center flex-col gap-4">
        <TabsList>
          {
            Links.map((link, index) => (
              <TabsTrigger key={index} value={link}>{link}</TabsTrigger>
            ))
          }
        </TabsList>
        <TabsContent value="اللاعبون">
          {
              PlayersTeam.map((player , index) => {
                  return (
                      <PlayerCard  key={index} Contact_expired={player.Contact_expired} Height={player.Height} Last_Clubs={player.Last_Clubs} Foot={player.Foot} Birthday={player.Birthday} Club={player.Club} nameLink={player.nameLink} id={player.id}  name={player.Name} img={player.Image} Number={player.Number} age={player.Age} position={player.Position} country={player.Country} />
                  )
              })
          }
        </TabsContent>
        <TabsContent value="حراس المرمي">
          {
              PlayersTeam.filter((player) => player.Position === "Goalkeeper").map((player , index) => {
                  return (
                    <PlayerCard  key={index} Contact_expired={player.Contact_expired} Height={player.Height} Last_Clubs={player.Last_Clubs} Foot={player.Foot} Birthday={player.Birthday} Club={player.Club} nameLink={player.nameLink} id={player.id}  name={player.Name} img={player.Image} Number={player.Number} age={player.Age} position={player.Position} country={player.Country} />                  )
              })
          }
        </TabsContent>
        <TabsContent value="المدافعين">
          {
              PlayersTeam.filter((player) => player.Position === "Defender").map((player , index) => {
                return (
                    <PlayerCard  key={index} Contact_expired={player.Contact_expired} Height={player.Height} Last_Clubs={player.Last_Clubs} Foot={player.Foot} Birthday={player.Birthday} Club={player.Club} nameLink={player.nameLink} id={player.id}  name={player.Name} img={player.Image} Number={player.Number} age={player.Age} position={player.Position} country={player.Country} />
                )
            })
          }
        </TabsContent>
        <TabsContent value="لاعبي الوسط">
          {
              PlayersTeam.filter((player) => player.Position === "Midfielder").map((player , index) => {
                return (
                    <PlayerCard  key={index} Contact_expired={player.Contact_expired} Height={player.Height} Last_Clubs={player.Last_Clubs} Foot={player.Foot} Birthday={player.Birthday} Club={player.Club} nameLink={player.nameLink} id={player.id}  name={player.Name} img={player.Image} Number={player.Number} age={player.Age} position={player.Position} country={player.Country} />
                )
            })
          }
        </TabsContent>
        <TabsContent value="المهاجمون">
          {
              PlayersTeam.filter((player) => player.Position === "Attack").map((player , index) => {
                return (
                    <PlayerCard  key={index} Contact_expired={player.Contact_expired} Height={player.Height} Last_Clubs={player.Last_Clubs} Foot={player.Foot} Birthday={player.Birthday} Club={player.Club} nameLink={player.nameLink} id={player.id}  name={player.Name} img={player.Image} Number={player.Number} age={player.Age} position={player.Position} country={player.Country} />
                )
            })
          }
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default page