import BoardComponent from '../Board/BoardComponent';
import { Container, Col, Row } from 'react-bootstrap';
import { useState } from 'react';
import './Game.css'

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    const handlePlay = (nextSquares) => {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];// this will save the history array arrays up to the currentMove
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    const JumpTo = (nextMove) => {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = `Go to move #${move}`;
        } else {
            description = 'Go to game start';
        }
        return (
            <li className='my-1' key={move}>
                <button className='listItem' onClick={() => JumpTo(move)}>{description}</button>
            </li>
        );
    });

    return (
        <>
            <Container>
                <Row>
                    <Col className='col-6'>
                        <BoardComponent
                            xIsNext={xIsNext}
                            squares={currentSquares}
                            onPlay={handlePlay} />
                    </Col>
                    <Col className='col-6 movesBoard'>
                        <h1 className='text-center'>Moves Board</h1>
                        <ol className='d-grid justify-content-center m-0 p-0'>{moves}</ol>
                    </Col>
                </Row>
            </Container>

        </>
    );
}

export default Game;