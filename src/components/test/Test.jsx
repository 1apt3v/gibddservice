import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Test = ({ _testTransactionInDB }) => {
    const [documentSeries, setDocumentSeries] = useState('')
    const [someInfo, setSomeInfo] = useState('')

    useEffect(() => {

    }, [])

    return (
        <div>
            <input type="text" placeholder='documentSeries' value={documentSeries} onChange={(e) => setDocumentSeries(e.target.value)} />
            <input type="text" placeholder='someInfo' value={someInfo} onChange={(e) => setSomeInfo(e.target.value)} />
            <button onClick={() => {
                _testTransactionInDB({ documentSeries, someInfo })
            }}>Отправить</button>
        </div>
    );
};

export default Test;