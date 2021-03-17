import { Container, ResponsiveTable } from "./styles"

import { useTransactions } from "../../hooks/useTransactions"

export function TransactionsTable() {
    const { transactions } = useTransactions()

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>
                                {new Intl.NumberFormat('pt-br', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transaction.amount)}
                            </td>
                            <td>{transaction.category}</td>
                            <td>
                                {new Intl.DateTimeFormat('pt-br').format(
                                    new Date(transaction.createdAt)
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {transactions.map(transaction => (
                <ResponsiveTable key={transaction.id}>
                    <p>{transaction.title}</p>
                    <p className={transaction.type}>
                        {new Intl.NumberFormat('pt-br', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(transaction.amount)}
                    </p>
                    <div>
                        <span>{transaction.category}</span>
                        <span>
                            {new Intl.DateTimeFormat('ot-br').format(
                                new Date(transaction.createdAt)
                            )}
                        </span>
                    </div>
                </ResponsiveTable>
            ))}
        </Container>
    )
}