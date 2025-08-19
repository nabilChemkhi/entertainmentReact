import React from 'react'
function Button1(){
  return (
    <button className="btn btn-primary">button</button>
  )
}

const TestComponent = () => {


// return React.createElement(
//     //type of element
//     'div',  
//     //props
//     { className: 'test-component card bg-neutral' }, 
//     //children
//     'Hello, World!',
//     React.createElement('p', null, 'This is a test component.') 
// )


  return (
    <div className="flex flex-col gap-4 p-4 ">
      <h1 className="text-2xl font-bold">Hello, World!</h1>
      
      <Button1 >Click Me</Button1>
      <Button1 />
      <Button1 />
    </div>
  )
}




export default TestComponent
