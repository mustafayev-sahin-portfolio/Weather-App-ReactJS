import React from 'react';

const City = ({city}) => {
    console.log(city);
    return (
    <div>
        <div>
            <table className='table'>
                    <thead>
                        <tr className='table-th-design'>
                            <th>Şəhər adı</th>
                            <th>Tempraturu</th>
                            <th>Havanın vəziyyəti</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{city.name}</td>
                            <td>{city.main.temp}</td>
                            <td>{city.weather[0].main}</td>
                        </tr>
                    </tbody>
                </table>

        </div>
    </div>
  )
}

export default City;