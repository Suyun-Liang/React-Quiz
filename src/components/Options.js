function Options({ question, dispatch, answer }) {
  const hasAnswerd = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, i) => (
        <button
          className={`btn btn-option ${answer === i ? "answer" : ""} ${
            hasAnswerd
              ? i === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: i })}
          disabled={hasAnswerd}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
