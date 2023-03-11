import React from 'react';
import './Board.css';
import Square from '../Square/SquareComponent';
// import GameOverModal from '../Modal/ModalComponent';
import BugleImage from '../../assets/bugle.png';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { CalculateWinner } from '../../functions';

const Board = ({ xIsNext, squares, onPlay }) => {

    // const [xIsNext, setXIsNext] = useState(true);
    const [btnClicked, setBtnClicked] = useState(Array(9).fill(false));
    const [bgColors, setBGColors] = useState(Array(9).fill(null));
    // const [squares, setSquares] = useState(Array(9).fill(null));
    const [counter, setCounter] = useState(0);
    // const [gameOver, setGameOver] = useState(false);

    const handleClick = (i) => {
        setCounter(counter + 1);
        if (CalculateWinner(squares) || squares[i]) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = 'X';
        }
        else {
            nextSquares[i] = 'O';
        }
        // setSquares(nextSquares);
        // setXIsNext(!xIsNext);
        onPlay(nextSquares);
        const nextBGColors = bgColors.slice();
        if (!btnClicked[i]) {
            nextBGColors[i] = '#EB5E28';
        } else {
            nextBGColors[i] = null;
        }
        setBGColors(nextBGColors);
        const nextBtnClicked = btnClicked.slice();
        nextBtnClicked[i] = !btnClicked;
        setBtnClicked(nextBtnClicked);
        console.log('Counter in func: ', counter);
    }
    console.log('Counter outside func: ', counter);
    const winner = CalculateWinner(squares);
    // console.log(winner);
    let status;
    // let image = null;
    if (winner) {
        return (
            <div>
                {/* <button className='playAgainBtn my-3' onClick={() => setGameOver(false)}>Play Again</button> */}
                <img className='bugleImg my-5' src={BugleImage} alt="Winner" />
                <h1 className='text-danger text-uppercase'>"{winner}" you are not perfect</h1>
            </div>
        )
        // status = `The Champion is: ${winner}`;
        // image = <img src={BugleImage} alt='cgi fetus'></img>;
        // setGameOver(true);
    }
    else if (counter === 9) {
        status = 'NO WINNER!';
    }
    else {
        status = `Next Player: ${xIsNext ? 'X' : 'O'}`;
    }

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h1 className='text-center'>{status}</h1>
                    </Col>
                </Row>
            </Container>
            {/* {gameOver ? image && <button onClick={() => setGameOver(false)}>Play Again</button> : null} */}
            <Container className='mt-5'>
                <Row >
                    <Col className='d-flex'>
                        <Square value={squares[0]} onSquareClick={() => handleClick(0)} changeBGColor={bgColors[0]} />
                        <Square value={squares[1]} onSquareClick={() => handleClick(1)} changeBGColor={bgColors[1]} />
                        <Square value={squares[2]} onSquareClick={() => handleClick(2)} changeBGColor={bgColors[2]} />
                    </Col>
                </Row>
                <Row>
                    <Col className='d-flex'>
                        <Square value={squares[3]} onSquareClick={() => handleClick(3)} changeBGColor={bgColors[3]} />
                        <Square value={squares[4]} onSquareClick={() => handleClick(4)} changeBGColor={bgColors[4]} />
                        <Square value={squares[5]} onSquareClick={() => handleClick(5)} changeBGColor={bgColors[5]} />
                    </Col>
                </Row>
                <Row>
                    <Col className='d-flex'>
                        <Square value={squares[6]} onSquareClick={() => handleClick(6)} changeBGColor={bgColors[6]} />
                        <Square value={squares[7]} onSquareClick={() => handleClick(7)} changeBGColor={bgColors[7]} />
                        <Square value={squares[8]} onSquareClick={() => handleClick(8)} changeBGColor={bgColors[8]} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Board;