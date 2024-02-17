import "./Card.css";

function Card({
  title,
  navigation_title,
  convertFunction,
  resetFunction,
  navigateFunction,
  changeFunction,
  inputValue,
  outputValue,
}) {
  return (
    <div className="card-container">
      <div className="card">
        <h2 className="card-title">{title}</h2>
        <input
          className="input-sens"
          type="number"
          step="0.000001"
          value={inputValue}
          onChange={changeFunction}
          placeholder="Input sens.."
        />
        <div className="output">Output: {outputValue}</div>
      </div>
      <div className="button-container">
        <button className="button" onClick={convertFunction}>
          CONVERT
        </button>
        <button className="button" onClick={resetFunction}>
          RESET
        </button>
        <button className="button" onClick={navigateFunction}>
          {navigation_title}
        </button>
      </div>
    </div>
  );
}

export default Card;
