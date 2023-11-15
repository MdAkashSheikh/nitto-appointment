import React, { useState, useRef } from 'react';
import { DeferredContent } from 'primereact/deferredcontent';
import { Toast } from 'primereact/toast';
import { Divider } from 'primereact/divider';

export default function DataTableDemo() {
    const toast = useRef(null);
    const [products, setProducts] = useState(null);

   
    return (
        <div className="card">
            <img />
            <h1 style={{marginBottom: '1rem', textAlign: 'center', text: 'bold'}}>Create a prescription</h1>
            <Divider type="solid" />
            <Toast ref={toast} />
            <div className='flex justify-content-center'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <Divider layout="vertical" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    )
}
