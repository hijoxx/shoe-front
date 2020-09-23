import React, {} from 'react'
import {useAutoIncrement} from "../../../Hooks/useAutoIncrement";
import {useToggle} from "../../../Hooks/useToggle";
import {useFetch} from "../../../Hooks/useFetch";

export function Compteur() {
    const [count] = useAutoIncrement(10, 2)
    const [compteurVisible, toggleCompteur] = useToggle(true)
    const [loading, items] = useFetch("https://jsonplaceholder.typicode.com/comments?_limit=5")

    if (loading) {
        return 'chargement...'
    }

    return <div>
        <input type="checkbox" id="input" onChange={toggleCompteur} checked={compteurVisible}/>
        <br/>
        <button> incrementer {count} </button>
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Body</th>
            </tr>
            {items.map(items =>
            <tr key={items.id}>
                <td>{items.id}</td>
                <td>{items.name}</td>
                <td>{items.email}</td>
                <td>{items.body}</td>
            </tr>
            )}
        </table>
    </div>
}