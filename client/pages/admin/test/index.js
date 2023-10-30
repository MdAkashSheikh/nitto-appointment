import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";

export default function BasicDemo() {
    const [checked, setChecked] = useState(true);

    console.log(checked);

    return (
        <div className="card flex justify-content-center">
            <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
        </div>
    )
}