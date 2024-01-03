import React, { useState ,useEffect} from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
      fetch('https://api.github.com/users/somtrip')
      .then(res  => res.json())
      .then(data =>{
       
        setData(data)
      })
      
    }, [ ])
    
  return (
    <div className='text-white bg-green-500 text-3xl p-4 m-10'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt="github avatar" width={300} />
    <h1 className='text-4xl'>{ data.name} </h1>
    </div>
  )
}

export default Github