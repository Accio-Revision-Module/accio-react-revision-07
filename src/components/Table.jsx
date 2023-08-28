/* eslint-disable react/prop-types */
import "../styles/table.css";

function Table({ columns, data }) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((e, i) => (
            <th key={i}>{e.name}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((e) => (
          <tr key={e.id}>
            {columns.map((col, colIndex) => (
              <td key={colIndex}>{e[col.label]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
