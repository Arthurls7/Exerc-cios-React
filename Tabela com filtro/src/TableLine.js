export default function TableLine(props) {
  const styleCategory = {
    color: "blue"
  };

  const styleInStock = {
    color: "green"
  };

  const styleOutStock = {
    color: "purple"
  };

  if (props.type === "Category") {
    return (
      <tr>
        <th colSpan="2" style={styleCategory}>
          {props.value.category}
        </th>
      </tr>
    );
  }

  if (props.type === "Element") {
    return (
      <tr style={props.value.stocked ? styleInStock : styleOutStock}>
        <td>{props.value.name}</td>
        <td>{props.value.price}</td>
      </tr>
    );
  }
}
