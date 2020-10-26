import React,{useState} from 'react'

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
interface TextNode {
    text: string
}

const TextField: React.FC<Props> = ({age,name}) => {
    const increment = () => {
        setCount('Hai')
    }
    const [count,setCount] = useState<TextNode>({text:"Hello"});
    return (
        <div>
            <p>Hello {age} {name}</p>
            <p>Count is {count}</p>
            <button onClick={increment}>Increment </button>
        </div>
    )
}
export default TextField;