import {Transition} from 'react-spring/renderprops'

export default function TM({showMenu, setMenu}){
    return (
      <Transition
      items={!showMenu}
      enter={{
        opacity: 1,
        transform: 'translateX(0)',
      }}
      leave={{ display: 'flex' }}
      from={{
        opacity: 0,
        transform: 'translateX(-300px)',
      }}
    >
      {(item) =>
        item &&
        ((props) => (
          <ul style={props} onMouseEnter={setMenu}>
            <div className='palki'>
              <div></div>
              <div></div>
            </div>
            <div className='palki'>
              <div></div>
              <div></div>
            </div>
            <h3>Menu</h3>
          </ul>
        ))
      }
    </Transition>
    )
}