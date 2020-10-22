import React from 'react'

interface Marks {
    internal: number;
    external: number;
}

interface Props {
    text: boolean;
    name?: string;
    age:number;
    mark: Marks;
}

const TextField: React.FC<Props> = () => {
    return (
        <div>
            Hello 
        </div>
    )
}
export default TextField;