import { createClient } from "contentful";

export const getdata = async ()=>{
    const spaceId = process.env.CONTENTFUL_SPACE_ID;
    const accessToken = process.env.CONTENTFUL_ACCESS_KEY;
    const apiUrl = `https://cdn.contentful.com/spaces/${spaceId}/entries?content_type=userwebapp`;

    try {
        const response = await fetch(apiUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
    
        if (!response.ok) {
          throw new Error('Failed to fetch data from Contentful');
        }
    
        const data = await response.json();
    
        return {
          props: {
            data: data.items,
          },
        };
      } catch (error) {
        console.error('Error fetching data from Contentful:', error);
    
        return {
          props: {
            data: [],
          },
        };
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