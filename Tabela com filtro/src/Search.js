export default function Search(props) {
  return (
    <div className="Search">
      <label>
        Buscar produto:{" "}
        <input
          type="text"
          placeholder="Produto"
          onChange={props.hSearch}
          value={props.input.search || ""}
        />
      </label>
      <br />

      <label>
        Apenas produtos no estoque
        <input
          type="checkbox"
          checked={props.input.box || false}
          onChange={props.hBox}
          value="onlyStock"
        />
      </label>
    </div>
  );
}
