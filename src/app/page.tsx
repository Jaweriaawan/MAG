export default async function Home(){
  const apiUrl = process.env.API_URL
  const products = await fetch (`${apiUrl}/api/data`)
  const  data = await products.json() 
  console.log(data);
  
  return (
   <>
     {
      data.map((detail:any) =>{
          <div>
            <img src={detail.image} alt="" />
            <h1>{detail.name}</h1>
            <h1>{detail.price}</h1>
          </div>
      })
    } 

    
   </>
  )

}  