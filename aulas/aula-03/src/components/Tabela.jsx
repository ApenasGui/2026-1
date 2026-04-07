function Tabela(props) {
    return (
        <>
            {props.titulo && <h3 className="text-lg font-bold mb-2">{props.titulo}</h3>}
            <table>
                <thead>
                    <th>
                        {props.colunas.map((item, index) => (
                            <td key={index}>{item}</td>
                        ))}
                    </th>
                </thead>
                <tbody>
                    <tr>
                        {props.dados.map((linha, i) => (
                            <tr key={i}>
                                {linha.map((colunas, j) => (
                                    <td key={j}>
                                        {colunas}
                                    </td>
                                ))}
                            </tr>
                        )
                        )}
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Tabela;