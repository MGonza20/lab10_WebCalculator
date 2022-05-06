import React from 'react';
import './buttonsGrid.css';
import PropTypes from 'prop-types';

function ButtonsGrid({
  setOp, setNum, deleteNum, clear, resultt, setPMstate,
}) {
  return (
    <div className="btnsDiv">
      <div onClick={clear} onKeyPress role="button" tabIndex="0"> AC </div>
      <div onClick={setPMstate} onKeyPress role="button" tabIndex="0"> +/- </div>
      <div onClick={() => { setOp('%'); }} onKeyPress role="button" tabIndex="0"> % </div>
      <div onClick={() => { setOp('÷'); }} onKeyPress role="button" tabIndex="0"> ÷ </div>
      <div onClick={() => { setNum('1'); }} onKeyPress role="button" tabIndex="0"> 1 </div>
      <div onClick={() => { setNum('2'); }} onKeyPress role="button" tabIndex="0"> 2 </div>
      <div onClick={() => { setNum('3'); }} onKeyPress role="button" tabIndex="0"> 3 </div>
      <div onClick={() => { setOp('x'); }} onKeyPress role="button" tabIndex="0"> x </div>
      <div onClick={() => { setNum('4'); }} onKeyPress role="button" tabIndex="0"> 4 </div>
      <div onClick={() => { setNum('5'); }} onKeyPress role="button" tabIndex="0"> 5 </div>
      <div onClick={() => { setNum('6'); }} onKeyPress role="button" tabIndex="0"> 6 </div>
      <div onClick={() => { setOp('-'); }} onKeyPress role="button" tabIndex="0"> - </div>
      <div onClick={() => { setNum('7'); }} onKeyPress role="button" tabIndex="0"> 7 </div>
      <div onClick={() => { setNum('8'); }} onKeyPress role="button" tabIndex="0"> 8 </div>
      <div onClick={() => { setNum('9'); }} onKeyPress role="button" tabIndex="0"> 9 </div>
      <div onClick={() => { setOp('+'); }} onKeyPress role="button" tabIndex="0"> + </div>
      <div onClick={() => { setNum('.'); }} onKeyPress role="button" tabIndex="0"> . </div>
      <div onClick={() => { setNum('0'); }} onKeyPress role="button" tabIndex="0"> 0 </div>
      <div onClick={resultt} onKeyPress role="button" tabIndex="0"> = </div>
      <div onClick={deleteNum} onKeyPress role="button" tabIndex="0"> DEL </div>
    </div>
  );
}

export default ButtonsGrid;

ButtonsGrid.propTypes = {
  setOp: PropTypes.func.isRequired,
  setNum: PropTypes.func.isRequired,
  deleteNum: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
  resultt: PropTypes.func.isRequired,
  setPMstate: PropTypes.func.isRequired,
};
