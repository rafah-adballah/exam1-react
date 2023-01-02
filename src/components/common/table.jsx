import _ from "lodash";

const Table = ({ data, columns }) => {
  return (
    <table class="table">
      <thead>
        <tr>
          {columns.map((col) => (
            <th scope="col" key={col.path}>
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            {columns.map((col) => (
              <td>{_.get(item, col.path) || col.content(item)}</td>
            ))}
          </tr>
        ))}
        {/* <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr> */}
      </tbody>
    </table>
  );
};

export default Table;
