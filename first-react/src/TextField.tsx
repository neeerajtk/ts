import React from 'react'

interface Props {
    text: boolean;
    name?: string;
    age:number
}

const TextField: React.FC<Props> = () => {
    return (
        <div>
            Hello 
        </div>
    )
}
export default TextField;