import React from 'react'
import NavbarTeacher from '../component/NavbarTeacher';

const Leaderboard = () => {

    const dummyData = [
        { rank: 1, name: 'Sonakshi', score: 100 },
        { rank: 2, name: 'Somya', score: 100 },
        { rank: 3, name: 'Hanshika', score: 100 },
        { rank: 4, name: 'Viru', score: 100 },
        { rank: 5, name: 'Dickshant', score: 100 },
        { rank: 6, name: 'DS', score: 70 },
      ];

  return (
    <>
    <NavbarTeacher />
    <div className="container mx-auto p-4 w-[80%] m-[50px]">
      <h1 className="text-3xl font-semibold mb-4 text-center">Leaderboard</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-300 " >
            <th className="px-4 py-2">Rank</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Score</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((item) => (
            <tr key={item.rank} className="border-b border-gray ">
              <td className="px-4 py-2 border-r border-gray">{item.rank}</td>
              <td className="px-4 py-2 border-r border-gray">{item.name}</td>
              <td className="px-4 py-2 border-r border-gray">{item.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Leaderboard
