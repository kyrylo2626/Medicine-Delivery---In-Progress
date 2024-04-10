import { useState, useEffect } from 'react';


export function CartModule() {

    const [state, setState] = useState({ totalPrice: 0, postData: '' })

    useEffect(() => {
        if (state.postData) {
            fetch('http://localhost:5000/api/cart', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json; charset=utf-8' },
                body: JSON.stringify(state.postData)
            })
            .then(() => setState(prev => ({ ...prev, postData: '' })))
        }
    }, [state.postData])
    
    return { state: state, setState: setState }
                                
}
    