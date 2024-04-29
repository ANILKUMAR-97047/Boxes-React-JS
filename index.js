const Box = props => {
  //  Write your code here.
  const {boxCls, content} = props
  return (
    <div className={boxCls}>
      <p>{content}</p>
    </div>
  )
}

const element = (
  //  Write your code here.

  <div className='boxes-bg-container'>
    <h1 className='heading'>Boxes</h1>
    <div className='boxes-container'>
      <Box boxCls='box-small box' content='Small' />
      <Box boxCls='box-medium box' content='Medium' />
      <Box boxCls='box-large box' content='Large' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
