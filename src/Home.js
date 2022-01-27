import React from 'react'

function Home(){
    function click(var1){
        console.log(var1)
    }

    return (

        <div className="home">
            <h2>Homepage</h2>
            <input type="text"/>
            <button onClick={() => click("ARTURO")}>Click me</button>
        </div>

    )
}

export default Home