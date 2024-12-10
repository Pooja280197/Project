import axios from "axios"

export const getData=(data)=>({
    type: 'get_data',
    payload:data


})

export const sendData=(data)=>({
    type:'send_data',
    payload:data

})


export const getApiData=(id)=>(dispatch)=>{
    axios.get(`https://66a495bb5dc27a3c190945ee.mockapi.io/template/${id}`)
    .then((res)=>{
    //  console.log(res)
     dispatch(getData(res.data))
    })
    .catch((error) => {
        console.error("Error fetching data by ID:", error);
    });
}

export const sendApiData=(formData)=>(dispatch)=>{
    axios.post('https://66a495bb5dc27a3c190945ee.mockapi.io/template',formData)
    .then((res)=>{
        dispatch(sendData(res.data))
        const newId = res.data.id;
        // console.log(res.data.id)
        
    })
    .catch((error) => {
        console.error("Error sending data:", error);
    });

}
