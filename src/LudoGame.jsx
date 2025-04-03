import { useState } from "react";

export default function LudoGame() {
    const players = ["red", "blue", "yellow", "green"];
    const [positions, setPositions] = useState({ red: 0, blue: 0, yellow: 0, green: 0 });
    const [currentPlayer, setCurrentPlayer] = useState("red");
    const [dice, setDice] = useState(1);

    const rollDice = () => {
        const newDice = Math.floor(Math.random() * 6) + 1;
        setDice(newDice);
    };

    const moveToken = () => {
        setPositions(prev => ({ ...prev, [currentPlayer]: prev[currentPlayer] + dice }));
        nextTurn();
    };

    const nextTurn = () => {
        const nextIndex = (players.indexOf(currentPlayer) + 1) % players.length;
        setCurrentPlayer(players[nextIndex]);
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Simple Ludo Game</h1>
            <p>Current Player: <b style={{ color: currentPlayer }}>{currentPlayer.toUpperCase()}</b></p>
            <p>Dice Roll: <b>{dice}</b></p>
            <button onClick={rollDice}>Roll Dice</button>
            <button onClick={moveToken} style={{ marginLeft: "10px" }}>Move Token</button>
            <div style={{ marginTop: "20px" }}>
                {players.map(player => (
                    <p key={player} style={{ color: player }}>
                        {player.toUpperCase()} Position: {positions[player]}
                    </p>
                ))}
            </div>
        </div>
    );
}
