function List(data) {

    return (
        <div>
            <div>Горячий номер для заказов 8811</div>
            <table className='table'> 
                <tbody >
                {data.goods.map (item =>
                    <tr>
                        {/* <td><div className='datatext' key={item.id}></div></td> */}
                        <td><div className='datatext'><img src={item.image} className='image'/></div></td>
                        <td><div className='datatext'>
                                <h3>{item.title}</h3>
                                <td><div className='datatext'>{item.description}</div></td>
                            </div>
                        </td>
                        
                    </tr>
                )}
                </tbody>
            </table>
        </div>
 )}

export default List; 


                  



{/* <li className='datatext' key={item.id}>
                        {item.title}
                        <p><img src={item.image}
                        className='image'/></p>
                    </li>) */}