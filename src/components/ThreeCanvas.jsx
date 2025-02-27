import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import useSound from 'use-sound';

// Import sound effects
import eatSound from '/sounds/eat.mp3';
import bombSound from '/sounds/bomb.mp3';
import gameOverSound from '/sounds/gameover.mp3';

// Constants
const GAME_SIZE = 850;
const GRID_SIZE = 5;
const SPEED = 100;

const BOUNDARY_LEFT = -40;
const BOUNDARY_RIGHT = 42;
const BOUNDARY_TOP = 42;
const BOUNDARY_BOTTOM = -40;

const getRandomPosition = () => ({
  x: Math.floor(Math.random() * ((BOUNDARY_RIGHT - BOUNDARY_LEFT) / GRID_SIZE)) * GRID_SIZE + BOUNDARY_LEFT,
  y: Math.floor(Math.random() * ((BOUNDARY_TOP - BOUNDARY_BOTTOM) / GRID_SIZE)) * GRID_SIZE + BOUNDARY_BOTTOM,
});

const SnakeGame = React.forwardRef((props, ref) => {
  const [snake, setSnake] = useState([{ x: 0, y: 0 }]);
  const [direction, setDirection] = useState({ x: GRID_SIZE, y: 0 });
  const [fruit, setFruit] = useState(getRandomPosition());
  const [bomb, setBomb] = useState(getRandomPosition());
  const [score, setScore] = useState(0);
  const [growthTracker, setGrowthTracker] = useState(0);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [welcomeScreen, setWelcomeScreen] = useState(true);
  const gameLoop = useRef(null);

  // Load textures
  const appleTexture = useLoader(THREE.TextureLoader, '/img/apple.png');
  const bombTexture = useLoader(THREE.TextureLoader, '/img/bomb.png');

  // Load sounds
  const [playEat] = useSound(eatSound);
  const [playBomb] = useSound(bombSound);
  const [playGameOver] = useSound(gameOverSound);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (welcomeScreen) return;
      if (!isGameStarted && !gameOver) setIsGameStarted(true);

      if (event.key === "ArrowUp" && direction.y === 0) setDirection({ x: 0, y: GRID_SIZE });
      if (event.key === "ArrowDown" && direction.y === 0) setDirection({ x: 0, y: -GRID_SIZE });
      if (event.key === "ArrowLeft" && direction.x === 0) setDirection({ x: -GRID_SIZE, y: 0 });
      if (event.key === "ArrowRight" && direction.x === 0) setDirection({ x: GRID_SIZE, y: 0 });
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [direction, isGameStarted, gameOver, welcomeScreen]);

  useEffect(() => {
    if (!isGameStarted || gameOver) return;

    if (gameLoop.current) {
      clearInterval(gameLoop.current);
    }

    gameLoop.current = setInterval(() => {
      setSnake((prevSnake) => {
        let newHead = { x: prevSnake[0].x + direction.x, y: prevSnake[0].y + direction.y };

        if (
          newHead.x < BOUNDARY_LEFT || newHead.x >= BOUNDARY_RIGHT ||
          newHead.y < BOUNDARY_BOTTOM || newHead.y >= BOUNDARY_TOP ||
          prevSnake.some((seg) => seg.x === newHead.x && seg.y === newHead.y)
        ) {
          playGameOver();
          setGameOver(true);
          return prevSnake; // Stop updating the snake
        }

        let newSnake = [newHead, ...prevSnake];
        let newGrowthTracker = growthTracker;

        if (newHead.x === fruit.x && newHead.y === fruit.y) {
          setFruit(getRandomPosition());
          setScore((s) => s + 0.5);
          playEat();
          newGrowthTracker += 0.5;
        }

        if (newHead.x === bomb.x && newHead.y === bomb.y) {
          // Trigger game over if score is 0
          if (score === 0) {
            playGameOver();
            setGameOver(true);
            return prevSnake; // Stop updating the snake
          }

          setBomb(getRandomPosition());
          setScore((s) => Math.max(0, s - 1));
          playBomb();
          newGrowthTracker -= 1;
        }

        if (newGrowthTracker >= 1) {
          newGrowthTracker -= 1;
        } else {
          newSnake.pop(); // Remove tail unless we're growing
        }

        if (newGrowthTracker <= -1 && newSnake.length > 1) {
          newGrowthTracker += 1;
          newSnake.pop(); // Shrink
        }

        setGrowthTracker(newGrowthTracker);
        return newSnake;
      });
    }, SPEED);

    return () => clearInterval(gameLoop.current);
  }, [direction, fruit, bomb, isGameStarted, gameOver, growthTracker, score]);

  return (
    <div ref={ref} style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>
      <h2 style={{ color: "white" }}>Score: {score}</h2>

      <Canvas
        style={{
          background: `url('/img/grass.png') no-repeat center center / cover`,
          width: GAME_SIZE,
          height: GAME_SIZE,
        }}
        orthographic
        camera={{ zoom: 10, position: [0, 0, 100] }}
      >
        {/* Snake */}
        {snake.map((segment, index) => (
          <mesh key={index} position={[segment.x, segment.y, 0]}>
            <boxGeometry args={[GRID_SIZE, GRID_SIZE, GRID_SIZE]} />
            <meshStandardMaterial color={index === 0 ? "limegreen" : "green"} />
            {index === 0 && (
              <>
                {/* Eyes */}
                <mesh position={[0.6, 0.6, GRID_SIZE / 2]}>
                  <sphereGeometry args={[0.5, 10, 10]} />
                  <meshStandardMaterial color="black" />
                </mesh>
                <mesh position={[-0.6, 0.6, GRID_SIZE / 2]}>
                  <sphereGeometry args={[0.5, 10, 10]} />
                  <meshStandardMaterial color="black" />
                </mesh>
              </>
            )}
          </mesh>
        ))}

        {/* Fruit (Apple) */}
        <mesh position={[fruit.x, fruit.y, 0]}>
          <planeGeometry args={[GRID_SIZE, GRID_SIZE]} />
          <meshBasicMaterial map={appleTexture} transparent />
        </mesh>

        {/* Bomb */}
        <mesh position={[bomb.x, bomb.y, 0]}>
          <planeGeometry args={[GRID_SIZE, GRID_SIZE]} />
          <meshBasicMaterial map={bombTexture} transparent />
        </mesh>

        <ambientLight />
      </Canvas>

      {/* Welcome Screen Overlay */}
      {welcomeScreen && (
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          zIndex: 10,
          cursor: "pointer"
        }}>
          <h1>Welcome to Basilisk</h1>
          <h2>Instructions</h2><br />
          <p>1. Use Arrow Keys to Move</p>
          <p>2. Fruits grow basilisk and add points to scoreboard</p>
          <p>3. Bombs shrink basilisk and subtract points to scoreboard</p>
          <br />
          <button
            onClick={() => setWelcomeScreen(false)}
            style={{
              background: "limegreen",
              color: "white",
              fontSize: "20px",
              padding: "10px 20px",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => e.target.style.background = "darkgreen"}
            onMouseLeave={(e) => e.target.style.background = "limegreen"}
          >
            Start Game
          </button>
        </div>
      )}

      {/* Game Over Overlay */}
      {gameOver && (
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          cursor: "pointer"
        }}>
          <h2>Game Over!</h2><br />
          <button
            onClick={() => window.location.reload()}
            style={{
              background: "red",
              color: "white",
              fontSize: "20px",
              padding: "10px 20px",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => e.target.style.background = "darkred"}
            onMouseLeave={(e) => e.target.style.background = "red"}
          >
            Restart
          </button>
        </div>
      )}
    </div>
  );
});

export default SnakeGame;
