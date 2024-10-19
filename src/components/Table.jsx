import { Icon } from "@iconify/react/dist/iconify.js";
import { Table } from "react-bootstrap";

const TableComponent = ({ tableHeaders, data, handleEdit }) => {
  return (
    <Table>
      <thead>
        <tr>
          {tableHeaders.map((item, index) => (
            <th key={index}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, rowIndex) => (
          <tr key={rowIndex}>
            <td>{item.serialNo}</td>
            {Object.entries(item)
              .filter(([key]) => key !== 'id' && key !== 'serialNo')
              .map(([key, value], index) => (
                <td key={index}>{value}</td>
              ))}
            <td><Icon icon="mage:edit-fill" className=" bg-second text-white" onClick={() => handleEdit(item)} /></td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableComponent;
