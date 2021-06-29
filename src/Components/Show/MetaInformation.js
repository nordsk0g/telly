import React, { useEffect, useState } from 'react';

export default function MetaInformation({ title, data, searchObject}) {
    const [content, setContent] = useState([]);
    // console.log(data)
    useEffect(() => {
        if (data) {
            if (searchObject) {
                    let tempValues = [];
                    data.forEach(value => tempValues.push(value[searchObject]))
                    setContent(tempValues)
                } else {
                    setContent(data.map(item => item));
            }
        }
            // if (Array.isArray(data)) {
            //     setContent(data);
            //     console.log('im here')
            // } else {
            //     const values = Object.values(data);
            //     console.log('object values', values)
            //     if (searchObject) {
            //         let tempValues = [];
            //         values.forEach(value => tempValues.push(values[value][searchObject]))
            //         setContent(tempValues)
            //     } else {

            //     }
            //     setContent(values);
            // }
    }, [data])

    
    return (
        <ul>
            {data && content.map(item => <li>{item}</li>)
            }
        </ul>
    )
}