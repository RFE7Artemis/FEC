import React from 'react';


const ScoreBar = ({ score }) => {

  const parentDiv = {
    height: 20,
    width: '80%',
    backgroundColor: 'grey',
    borderRadius: 100,
    margin: 5
  };
  const childDiv = {
    height: '100%',
    width: `${score}%`,
    backgroundColor: 'yellow',
    borderRadius: 100,
    textAlign: 'center'
  }
  const scoreText = {
    padding: 0,
    color: 'black',
    fontWeight: 900
  }
  return (
    <div style={parentDiv}>
    <div style={childDiv}>
      <span style={scoreText}>{score}</span>
    </div>
  </div>
  )
}

export default ScoreBar;