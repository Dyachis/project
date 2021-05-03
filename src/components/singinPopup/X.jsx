export default function X({history, setPopup}) {
  return (
    <div
      className='x'
      onClick={() => {
        setPopup()
        history.push('/home')
      }}
    >
      <div></div>
      <div></div>
    </div>
  )
}
