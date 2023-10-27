import { CreateClient } from "contentful";

export const getStaticProps = async ()=>{
    const client = CreateClient({
        space : process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })


const res = await client.getEntery({content_type: "userwebapp"})
return{
    props:{
         data: res.items
    }
}


}




const Dashboard = ({data})=>{
    console.log(data)
    return(
        <div>
            <h1>dashbaord</h1>
        </div>
    )
}

export default Dashboard;