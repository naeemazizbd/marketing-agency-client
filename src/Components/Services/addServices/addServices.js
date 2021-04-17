// import React, { useState }  from 'react';
// import axios from 'axios';
// import { useForm } from 'react-hook-form';


// const addServices = () => {

//     const { register, handleSubmit, description, price, watch, errors } = useForm ();
//     const [imageURL, setIMageURL] = useState (null);

//     const onSubmit = data => {
//         const serviceData = {
//             name: data.name,
//             description: data.description,
//             price: data.price,
//             imageURL: imageURL,
//         };
//         const url = `https://pumpkin-shortcake-33875.herokuapp.com/addProduct`;
//         fetch(url, {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(serviceData)
//         })
//             .then(res => console.log('server side response', res))
//     };

//     const handleImageUpload = event => {
//         console.log(event.target.files[0])
//         const imageData = new FormData();
//         imageData.set('key', '55f1df8fff17cc8f0a6a9d1e9dd028ec');
//         imageData.append('image', event.target.files[0]);
//         axios.post('https://api.imgbb.com/1/upload',
//             imageData)
//             .then(function (response) {
//                 setIMageURL(response.data.data.display_url);
//             })
//             .catch(function (error) {
//                 console.log(error);
//             });
//         }
//     return (
//         <div>
//              <div className="row mt-5 container">
//             <div className="col-md-4 ">
//                 <h5>Add Your Service Here</h5>
//                 <form className="card p-3" onSubmit={handleSubmit(onSubmit)}> {/* onSubmit={handleSubmit(onSubmit)}*/}
//                     <input className="form-control m-2" name="name" defaultValue="Write Service Name" ref={register} />
//                     <input className="form-control m-2" name="description" defaultValue="Write service description" ref={register} />
//                     <input className="form-control m-2" name="price" type="number" defaultValue="Service Price" ref={register} />
//                     <input className="form-control m-2" name="exampleRequired" type="file" onChange={handleImageUpload} />
//                     <input className="bg-primary border-0 rounded text-white p-1" type="submit" />
//                 </form>
//             </div>
//             <div className="col-md-8">
//                 <h5>All All Service list</h5>
                
//             </div>
//         </div>
//         </div>
//     );
// };

// export default addServices;