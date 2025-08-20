import { Rabbit } from 'lucide-react'
import React from 'react'
function Button1(props){
    console.log(props)
  return (
    <button className={"btn btn-primary" + props.className}>{props.children}</button>
  )
}

function ShoeCard(props){
    return (
    <div className='bg-neutral text-neutral-content shadow-md card' >
        <picture>
        <img className="h-32 w-full object-cover" src={props.image} alt={props.name} />
      </picture>
      <div className="card-body">
        <p className="card-title">
            {props.name}
        </p>

      </div>

    </div>
    
)
}

const TestComponent = () => {


// return React.createElement(
//     //type of element: string
//     'div',  
//     //props : object
//     { className: 'test-component card bg-neutral' }, 
//     //children : tableau of children or single child
//     'Hello, World!',
//     React.createElement('p', null, 'This is a test component.') 
// )


  return (
    <div className="flex flex-col gap-4 items-start">
      <h1 className="text-2xl font-bold">Hello, World!</h1>
      
      <Button1 className="btn btn-info btn-lg" text="Je suis super">
        <Rabbit size={24}/> 
        Je suis super
        </Button1>

        <ShoeCard  image="https://picsum.photos/id/237/200/300" name="DOG">
        
        </ShoeCard>
      
    </div>
  )
}




export default TestComponent
