import React from 'react';

export default class MainPage extends React.Component {
    render() {
        return (
            <table style={{backgroundColor: 'lightgray', width: '900px'}}>
                <tr>
                    {content.map((el) => <th>{el.title}</th>)}
                </tr>
                <tr>
                    <td>Qwer</td>
                    <td>qwertyqwe</td>
                    <td>qweqwe@mail.ru</td>
                    <td>www.asdqwewer.com</td>
                </tr>
            </table>
        )
    }
}