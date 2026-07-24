/*------------ Hands-on 9 ------------------------*/

function ListofPlayers() {
  const players = [
    { name: "Virat Kohli", score: 85 },
    { name: "Rohit Sharma", score: 92 },
    { name: "KL Rahul", score: 65 },
    { name: "Shubman Gill", score: 75 },
    { name: "Hardik Pandya", score: 68 },
    { name: "Ravindra Jadeja", score: 80 },
    { name: "Rishabh Pant", score: 55 },
    { name: "Suryakumar Yadav", score: 88 },
    { name: "Mohammed Shami", score: 45 },
    { name: "Jasprit Bumrah", score: 72 },
    { name: "Kuldeep Yadav", score: 60 },
  ];

  const below70 = players.filter((player) => player.score < 70);

  return (
    <div>
      <h2>List of Players</h2>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>

        <tbody>
          {players.map((player, index) => (
            <tr key={index}>
              <td>{player.name}</td>
              <td>{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />

      <h2>Players with Score Below 70</h2>

      <ul>
        {below70.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;