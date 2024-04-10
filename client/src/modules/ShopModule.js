import { useState, useEffect } from 'react';


export function ShopModule() {

    const [state, setState] = useState({ getData: '', postData: '' });

    useEffect(() => {
        if (state.postData) {
            fetch('http://localhost:5000/api/shop', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json; charset=utf-8' },
                body: JSON.stringify({"id": state.postData})
            })
            .then(response => response.json())
            .then(response => {
                while (response.drugs.length % 3 !== 0) response.drugs.push({ "id": "empty" })
                setState(prev => ({ ...prev, getData: response }))
            })
        } else {
            fetch('http://localhost:5000/api/shop')
            .then(response => response.json())
            .then(response => { setState(prev => ({ ...prev, getData: { stores: response } })) })
        }
    }, [state.postData])
    
    return { state: state, setState: setState }
                                
}
