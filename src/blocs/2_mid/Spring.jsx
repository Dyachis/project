import {Spring, Transition} from 'react-spring/renderprops'
import {useState, useRef} from 'react'

export default function T(){

    const [isVisible, setVisible] = useState(false)
    const myRef = useRef(null)

    return <div>
        <button onClick={() => setVisible(!isVisible)}>Visible</button>
        <Spring 
        immediate={!myRef.current}
        reset={true}
        from={{opacity: 0, transform: 'translateY(-4rem)'}}
        to={{opacity: 1, transform: 'translateY(0)'}}
        reverse={!isVisible}>
            {(props) => (<h1 style={props} ref={myRef}>Hui Spring</h1>)}
        </Spring>

        <Transition 
            items={isVisible}
            enter={{opacity: 1, transform: 'translateY(0)', height: '200px'}}
            leave={{opacity: 0, transform: 'translateY(-4rem)', height: '0px'}}
            from={{opacity: 0, transform: 'translateY(-4rem)', height: '0px'}}
            >
            {item => item && (props => (
            <h1 style={props}>Hui Transition</h1>
            ))
            }
        </Transition>
    </div>
}