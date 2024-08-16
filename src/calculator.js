import React from "react";

export function Calculator2() {
    const n1 = 20
    const n2 = 4

    const calculate = (op) => {
        let c = `${n1} ${op} ${n2}`     // window + ปุ่มเปลี่ยนภาษา
        let r = eval(c)
        alert(`${c} = ${r}`)
    }

    return (
        <div style={{textAlign:'center', marginTop:20}}>
            <span>{n1}</span>&nbsp;
            <button onClick={() => calculate('+')}>+</button>&nbsp;
            <button onClick={() => calculate('-')}>-</button>&nbsp;
            <button onClick={calculate.bind(this,'*')}>*</button>&nbsp;
            <button onClick={calculate.bind(this,'/')}>/</button>&nbsp;
            <span>{n2}</span>
        </div>
    )
}