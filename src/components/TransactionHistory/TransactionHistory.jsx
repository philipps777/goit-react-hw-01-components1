import { Table, TableList, TableRow, TableItems} from "./TransactionHistory.styled"

export const TransactionHistory = ({items}) => {
    return <Table class="transaction-history">
    <thead>
      <TableList>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </TableList>
    </thead>
  
    <tbody>
    {items.map(({id, type, amount, currency}) => (
          <TableRow key={id}>
            <TableItems  >{type}</TableItems>
            <TableItems >{amount}</TableItems>
            <TableItems >{currency}</TableItems>
          </TableRow>
        ))}
    </tbody>
  </Table>
}