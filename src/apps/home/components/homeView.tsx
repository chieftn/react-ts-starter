import * as React from 'react';

type Context = { state: { x: number, y: number, velocityX: number, velocityY: number }, context: CanvasRenderingContext2D };
type KeyPresses = {
    playerLeftUp: boolean;
    playerLeftDown: boolean;
    playerRightUp: boolean;
    playerRightDown: boolean;
}

export const HomeView: React.FC = () => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const width = 640;
    const height = 480;

    React.useEffect(() => {
        const context: Record<string, Context> = {};
        let keyPresses: KeyPresses = {
            playerLeftUp: false,
            playerLeftDown: false,
            playerRightDown: false,
            playerRightUp: false
        };

        const getDot = (canvas: HTMLCanvasElement): Context  => {
            if (!context['dot']) {
                const ctx = canvas.getContext('2d');
                if (!ctx) {
                    throw new Error('already tried to get context');
                }

                const initialState = { x: 400, y: 300, velocityX: 100, velocityY: 100 }

                context['dot'] = { state: initialState, context: ctx };
            }

            return context['dot'];
        }

        const getLeftPlayer = (canvas: HTMLCanvasElement): Context => {
            if (!context['leftPlayer']) {
                const ctx = canvas.getContext('2d');
                if (!ctx) {
                    throw new Error('already tried to get context');
                }

                const initialState = { x: 30, y: 240, velocityX: 100, velocityY: 300 }

                context['leftPlayer'] = { state: initialState, context: ctx };
            }

            return context['leftPlayer'];
        };

        const getRightPlayer = (canvas: HTMLCanvasElement): Context => {
            if (!context['rightPlayer']) {
                const ctx = canvas.getContext('2d');
                if (!ctx) {
                    throw new Error('already tried to get context');
                }

                const initialState = { x: (width - 30), y: 240, velocityX: 100, velocityY: 300 }

                context['rightPlayer'] = { state: initialState, context: ctx };
            }

            return context['rightPlayer'];
        }

        const updateDot = (canvas: HTMLCanvasElement, progress: number) => {
            const dot = getDot(canvas);

            dot.state.x = dot.state.x += dot.state.velocityX * (progress / 1000);

            if (dot.state.x >= width || dot.state.x <= 0) {
                dot.state.velocityX = -(dot.state.velocityX);
            }

            dot.state.y = dot.state.y += dot.state.velocityY * (progress / 1000);

            if (dot.state.y >= height || dot.state.y <= 0) {
                dot.state.velocityY = -(dot.state.velocityY);
            }

            if (collisionWithLeftPlayer(canvas) || collisionWithRightPlayer(canvas)) {
                dot.state.velocityX = -(dot.state.velocityX);
                dot.state.velocityY = -(dot.state.velocityY);
            }
        }

        const collisionWithLeftPlayer = (canvas: HTMLCanvasElement): boolean => {
            const leftPlayer = getLeftPlayer(canvas);
            const dot = getDot(canvas);

            if ((leftPlayer.state.x - 5) < dot.state.x  &&
                dot.state.x < leftPlayer.state.x &&
                leftPlayer.state.y <= dot.state.y &&
                (leftPlayer.state.y + 50) >= dot.state.y) {

                return true;
            }

            return false;
        };

        const collisionWithRightPlayer = (canvas: HTMLCanvasElement): boolean => {
            const rightPlayer = getRightPlayer(canvas);
            const dot = getDot(canvas);

            if ((rightPlayer.state.x + 5) < dot.state.x  &&
                dot.state.x > rightPlayer.state.x &&
                rightPlayer.state.y <= dot.state.y &&
                (rightPlayer.state.y + 50) >= dot.state.y) {

                return true;
            }

            return false;
        };

        const updateLeftPlayer = (canvas: HTMLCanvasElement, progress: number) => {
            const playerLeft = getLeftPlayer(canvas);
            if (keyPresses.playerLeftUp && playerLeft.state.y > 0) {
                playerLeft.state.y = playerLeft.state.y - playerLeft.state.velocityY * (progress / 1000);
            }

            if (keyPresses.playerLeftDown && playerLeft.state.y - 50 <= height) {
                playerLeft.state.y = playerLeft.state.y + playerLeft.state.velocityY * (progress / 1000);
            }
        };

        const updateRightPlayer = (canvas: HTMLCanvasElement, progress: number) => {
            const playerRight = getRightPlayer(canvas);
            if (keyPresses.playerRightUp && playerRight.state.y > 0) {
                playerRight.state.y = playerRight.state.y - playerRight.state.velocityY * (progress / 1000);
            }

            if (keyPresses.playerRightDown && playerRight.state.y + 50 <= height) {
                playerRight.state.y = playerRight.state.y + playerRight.state.velocityY * (progress / 1000);
            }
        };

        const drawDot = (canvas: HTMLCanvasElement) => {
            const dot = getDot(canvas);
            dot.context.fillStyle = 'white';

            dot.context.fillRect(dot.state.x - 5, dot.state.y - 5, 10, 10);
        };

        const drawLeftPlayer = (canvas: HTMLCanvasElement) => {
            const leftPlayer = getLeftPlayer(canvas);
            leftPlayer.context.fillStyle = 'white';
            leftPlayer.context.fillRect(leftPlayer.state.x, leftPlayer.state.y, 5, 50);
        };

        const drawRightPlayer = (canvas: HTMLCanvasElement) => {
            const rightPlayer = getRightPlayer(canvas);
            rightPlayer.context.fillStyle = 'white';
            rightPlayer.context.fillRect(rightPlayer.state.x, rightPlayer.state.y, 5, 50);
        };

        const update = (canvas: HTMLCanvasElement, progress: number) => {
            updateDot(canvas, progress);
            updateRightPlayer(canvas, progress);
            updateLeftPlayer(canvas, progress);
        };

        const draw = (canvas: HTMLCanvasElement) => {
            canvas.getContext('2d')?.clearRect(0, 0, width, height);
            drawDot(canvas);
            drawLeftPlayer(canvas);
            drawRightPlayer(canvas);
        };

        const loop = (timestamp: number) => {
            if (canvasRef.current) {
                update(canvasRef.current, timestamp - lastRender)
                draw(canvasRef.current);
            }

            lastRender = timestamp
            window.requestAnimationFrame(loop)
        }

        const keydown = (event: KeyboardEvent) => {
            const key = event.key;
            if (key === 'a') {
                keyPresses = {...keyPresses, playerLeftUp: true};
            }

            if (key === 's') {
                keyPresses = {...keyPresses, playerLeftDown: true};
            }

            if (key === 'ArrowUp') {
                keyPresses = {...keyPresses, playerRightUp: true};
            }

            if (key === 'ArrowDown') {
                keyPresses = {...keyPresses, playerRightDown: true};
            }
        };

        const keyup = (event: KeyboardEvent) => {
            const key = event.key;

            if (key === 'a') {
                keyPresses = {...keyPresses, playerLeftUp: false};
            }

            if (key === 's') {
                keyPresses = {...keyPresses, playerLeftDown: false};
            }

            if (key === 'ArrowUp') {
                keyPresses = {...keyPresses, playerRightUp: false};
            }

            if (key === 'ArrowDown') {
                keyPresses = {...keyPresses, playerRightDown: false};
            }
        };

        let lastRender = 0;

        window.addEventListener("keydown", keydown, false);
        window.addEventListener("keyup", keyup, false);
        window.requestAnimationFrame(loop);
    }, []);

    return (
        <canvas
            style={{background: '#000'}}
            ref={canvasRef}
            width={width}
            height={height}
        />
    );
};
