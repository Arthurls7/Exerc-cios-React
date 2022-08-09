import TableLine from "./TableLine";

export default function Table(props) {
  const rows = [];
  const input = props.input;
  let lastRow;

  props.products.forEach((el) => {
    console.log(input.search);
    if (input.search !== undefined && input.search !== "") {
      if (el.name.toLowerCase().indexOf(input.search.toLowerCase()) === -1)
        return;
    }

    if (input.box && !el.stocked) return;

    if (el.category !== lastRow) {
      rows.push(<TableLine type="Category" value={el} key={el.category} />);
    }

    rows.push(<TableLine type="Element" value={el} key={el.name} />);
    lastRow = el.category;
  });

  return (
    <div>
      <p />
      <table style={{ width: "50%" }}>
        <thead>
          <tr>
            <th>Names</th>
            <th>Prices</th>
          </tr>
        </thead>
        <tbody>
          {rows.length !== 0 ? (
            [rows]
          ) : (
            <tr>
              <td>Tabela vazia</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
