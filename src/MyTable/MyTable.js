import React from "react";
import { useTable } from 'react-table'
 
function MyTable() {
  const data = React.useMemo(
    () => [
        {
            "name" : "Tiger Nixon",
            "position" : "System Architect",
            "office" : "Edinburgh",
            "age" : 61 ,
            "start_date" : "2011/04/25",
            "salary" : "$320,800"
    
        },
        {
            "name" : "Garrett Winters",
            "position" : "Accountant",
            "office" : "Tokyo",
            "age" : 63 ,
            "start_date" : "2011/07/25",
            "salary" : "$170,750"
    
        }
    ],
    []
  )

  const columns = React.useMemo(
    () => [
        {
            Header: 'Name',
            accessor: 'name'
          },
          {
            Header: 'Position',
            accessor: 'position'
          },
          {
            Header: 'Office',
            accessor: 'office'
          },
          {
            Header: 'Age',
            accessor: 'age'
          },
          {
            Header: 'Start date',
            accessor: 'start_date'
          },
          {
            Header: 'Salary',
            accessor: 'salary'
          }
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  return (
    <table {...getTableProps()} style={{ captionSide : "bottom", borderCollapse: 'collapse'}} >
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                style={{
                  textAlign: 'inherit',
                  textAlign: '-webkit-match-parent'
                }}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: '10px',
                      border: 'solid 1px gray',
                      background: 'papayawhip',
                    }}
                  >
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default MyTable;