import NewCard  from "./Components/NewCard"

const App = () => {
  //object array 
    const data=[{
      name:"Facebook",
      title:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, itaque dolorem nam ea, consequuntur facilis sed placeat esse, modi dolorum ipsam!", 
    },
    {
      name:"Twitter",
      title:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, itaque dolorem nam ea, consequuntur facilis sed placeat esse, modi dolorum ipsam!",
    }
    ]
    //loop in react using map used to featch array 
  return (
    <>
    <div className="wrapper-cards">
    {data.map((parameter)=>{
      return <NewCard name={parameter.name} title={parameter.title}/>
    })}
    </div>
    
    </>
  )
}

export default App
