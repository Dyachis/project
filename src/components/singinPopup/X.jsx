export default function X({history, changePopup}) {
  return (
    <div
      className='x'
      onClick={() => {
        changePopup()
        history.push('/home')
      }}
    >
      <div></div>
      <div></div>
    </div>
  )
}
