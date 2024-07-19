import React from 'react'

const CustomButton = (props) => {

    function onClick (){
        props.setCount(()=>props.count+1)
      }

    return (<button onClick={onClick}>
    counter{props.count}
     </button>)
}

export default CustomButton