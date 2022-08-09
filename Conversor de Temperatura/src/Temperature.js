export default function Temperature(props) {
  return (
    <div>
      <input type="text" onChange={props.setTemp} value={props.temp} />
    </div>
  );
}
