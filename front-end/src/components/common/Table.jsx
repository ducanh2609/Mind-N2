import "./table.scss";

export default function Table(props) {
  function renderTableData() {
    return props.data.map((item, index) => {
      const { id, username, email, role } = item;
      return (
        <tr key={index}>
          <td>{id}</td>
          <td>{username}</td>
          <td>{email}</td>
          <td>{role.join(", ")}</td>
        </tr>
      );
    });
  }

  function renderTableHeader() {
    const header = Object.keys(props.data[0]);
    return header.map((key, index) => <th key={index}>{key.toUpperCase()}</th>);
  }
  return (
    <table className="table">
      <tbody>
        <tr>{renderTableHeader()}</tr>
        {renderTableData()}
      </tbody>
    </table>
  );
}
