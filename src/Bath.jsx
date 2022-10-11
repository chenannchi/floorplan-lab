function Bath(props) {
  return (
    <div className="bathroom" id={`${props.size}-bath`}>
      <h1>{props.size} Bath</h1>
    </div>
  );
}

export default Bath