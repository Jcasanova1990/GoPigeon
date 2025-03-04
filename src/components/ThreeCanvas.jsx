import React, { useState, useEffect } from "react";

export default function FlappyBird() {
  const gameWidth = 1600;
  const gameHeight = 2400;
  const birdSize = 100;
  const gravity = 3.5;
  const jumpPower = -35;
  const buildingWidth = 240;
  const buildingGap = 600;

  const [birdY, setBirdY] = useState(gameHeight / 2 - birdSize / 2);
  const [velocity, setVelocity] = useState(0);
  const [buildings, setBuildings] = useState([]);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameStarted, setIsGameStarted] = useState(false);

  useEffect(() => {
    if (!isGameStarted) return;

    resetGame();
    const handleKeyPress = (e) => {
      if (e.key === " ") jump();
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isGameStarted]);

  useEffect(() => {
    if (isGameOver || !isGameStarted) return;

    const gameLoop = setInterval(() => {
      setBirdY((prev) => prev + velocity);
      setVelocity((prev) => prev + gravity);
      moveBuildings();
      checkCollision();
      updateScore();
    }, 30);

    return () => clearInterval(gameLoop);
  }, [velocity, buildings, isGameOver, isGameStarted]);

  useEffect(() => {
    if (isGameOver || !isGameStarted) return;

    const buildingTimer = setInterval(() => {
      addBuilding();
    }, 1000);

    return () => clearInterval(buildingTimer);
  }, [isGameOver, isGameStarted]);

  function jump() {
    setVelocity(jumpPower);
  }

  function resetGame() {
    setBirdY(gameHeight / 2 - birdSize / 2);
    setVelocity(0);
    setBuildings([]);
    setScore(0);
    setIsGameOver(false);
  }

  function addBuilding() {
    const heightTop = getRandomBuildingHeight();
    setBuildings((prev) => [
      ...prev,
      { x: gameWidth, heightTop },
    ]);
  }

  function moveBuildings() {
    setBuildings((prev) => {
      return prev
        .map((building) => ({ ...building, x: building.x - 12 * 1.55 }))
        .filter((building) => building.x + buildingWidth > 0);
    });
  }

  function checkCollision() {
    if (birdY < 0 || birdY + birdSize > gameHeight) {
      setIsGameOver(true);
      return;
    }

    const birdLeft = 200;
    const birdRight = birdLeft + birdSize;
    const birdTop = birdY;
    const birdBottom = birdY + birdSize;

    for (const building of buildings) {
      const buildingLeft = building.x;
      const buildingRight = building.x + buildingWidth;

      const topBuildingHeight = building.heightTop.height;
      const bottomBuildingTop = topBuildingHeight + buildingGap;

      const hitsTopBuilding = (
        birdRight > buildingLeft &&
        birdLeft < buildingRight &&
        birdTop < topBuildingHeight
      );

      const hitsBottomBuilding = (
        birdRight > buildingLeft &&
        birdLeft < buildingRight &&
        birdBottom > bottomBuildingTop
      );

      if (hitsTopBuilding || hitsBottomBuilding) {
        setIsGameOver(true);
        return;
      }
    }
  }

  function updateScore() {
    const birdLeft = 200;
    for (const building of buildings) {
      const buildingLeft = building.x;
      const buildingRight = building.x + buildingWidth;

      // Check if the bird passes through the gap
      if (birdLeft > buildingLeft && birdLeft < buildingRight && !building.passed) {
        const topBuildingHeight = building.heightTop.height;
        const bottomBuildingTop = topBuildingHeight + buildingGap;
        const birdBottom = birdY + birdSize;

        if (birdY > topBuildingHeight && birdBottom < bottomBuildingTop) {
          setScore((prevScore) => prevScore + 1);
          building.passed = true; // Mark this building as passed
        }
      }
    }
  }

  function getRandomBuildingHeight() {
    const heights = [
      { label: "lg bldg", height: 1400 },
      { label: "md bldg", height: 1000 },
      { label: "sm bldg", height: 600 },
    ];
    return heights[Math.floor(Math.random() * heights.length)];
  }

  function startGame() {
    setIsGameStarted(true);
  }

  return (
    <div style={styles.gameContainer}>
      {!isGameStarted ? (
        <div style={styles.welcomeScreen}>
          <h1 style={styles.welcomeTitle}>Welcome to Flappy Bird</h1>
          <button onClick={startGame} style={styles.startButton}>Start Game</button>
        </div>
      ) : (
        <>
          <div style={{ ...styles.bird, top: birdY }} />

          {buildings.map((building, index) => (
            <React.Fragment key={index}>
              <div
                style={{
                  ...styles.building,
                  height: building.heightTop.height,
                  left: building.x,
                  top: 0,
                  backgroundColor: buildingColor(building.heightTop.label),
                }}
              >
                <div style={styles.label}>{building.heightTop.label}</div>
              </div>

              <div
                style={{
                  ...styles.building,
                  height: gameHeight - building.heightTop.height - buildingGap,
                  left: building.x,
                  top: building.heightTop.height + buildingGap,
                  backgroundColor: buildingColor(building.heightTop.label),
                }}
              >
                <div style={{ ...styles.label, top: "10px" }}>{building.heightTop.label}</div>
              </div>
            </React.Fragment>
          ))}

          {/* Score Overlay in the Center */}
          <div style={styles.scoreOverlay}>
            <div style={styles.score}>{score}</div>
          </div>

          {isGameOver && (
            <div style={styles.gameOver}>
              <h2>Game Over</h2>
              <p>Score: {score}</p>
              <button onClick={resetGame} style={styles.button}>Restart</button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

function buildingColor(label) {
  switch (label) {
    case "lg bldg":
      return "#8B0000";
    case "md bldg":
      return "#FF8C00";
    case "sm bldg":
      return "#228B22";
    default:
      return "gray";
  }
}

const styles = {
  gameContainer: {
    width: "1600px",
    height: "2400px",
    backgroundColor: "#87CEEB",
    position: "relative",
    overflow: "hidden",
    border: "4px solid #000",
    margin: "20px auto",
  },
  welcomeScreen: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "#fff",
    backgroundColor: "rgba(0,0,0,0.8)",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 0 30px rgba(0,0,0,0.8)",
  },
  welcomeTitle: {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  startButton: {
    padding: "20px 40px",
    fontSize: "32px",
    backgroundColor: "#FF4500",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    borderRadius: "10px",
  },
  bird: {
    width: "120px",
    height: "120px",
    backgroundColor: "yellow",
    position: "absolute",
    left: "200px",
    borderRadius: "50%",
    boxShadow: "0 0 20px rgba(0,0,0,0.5)",
  },
  building: {
    width: "240px",
    position: "absolute",
    border: "2px solid black",
  },
  label: {
    position: "absolute",
    top: "5px",
    width: "100%",
    textAlign: "center",
    fontSize: "48px",
    fontWeight: "bold",
    color: "white",
    textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
  },
  scoreOverlay: {
    position: "absolute",
    top: "33.5%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "20px 40px",
    borderRadius: "10px",
    zIndex: 100,
  },
  score: {
    fontSize: "72px",
    fontWeight: "bold",
    color: "#fff",
  },
  gameOver: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(0,0,0,0.85)",
    color: "#fff",
    padding: "40px",
    textAlign: "center",
    borderRadius: "20px",
    boxShadow: "0 0 30px rgba(0,0,0,0.8)",
  },
  button: {
    padding: "20px 40px",
    fontSize: "32px",
    backgroundColor: "#FF4500",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    marginTop: "20px",
    borderRadius: "10px",
  },
};
