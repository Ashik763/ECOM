import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineGoogle } from 'react-icons/ai';
import { AuthContext } from '../../Contexts/AuthProvider';
import RightSide from './RightSide/RightSide';



const Register = () => {
    const [error,setError] = useState('');
    const {signInWithGoogle,createUser,updateUserProfile,setLoading,user} = useContext(AuthContext);
    const navigate = useNavigate();
  
  const location  = useLocation();
  // //console.log();(location);
   const from = location.state?.from?.pathname || '/';
    // //console.log();(value);
    const handleSubmit =  (event) =>{
      event.preventDefault();
      // //console.log();(event)
      const form = event.target;
    
      const firstName  = form.first_name.value || " ";
      const secondName  = form.second_name.value || "";
      const name = firstName + " " + secondName;
      const email = form.email.value;
      const password = form.password.value;
      const checked = form.checkbox.checked;


      
      // console.log(name,photoURL, email, password, checked);
      if(checked){

        // const formData = new FormData();
    
          // if(imgData.success){
             
              const photoURL = "https://i.ibb.co/2q8f71Z/default-pic.jpg";

              createUser(email,password)
              .then((userCredential) => {
                
                // Signed in 
                console.log("clicked");
                // const user = userCredential.user;
                setError('');
                form.reset();
                navigate('/');
                setLoading(true);
                handleUpdateUserProfile(name,photoURL);
               
                //console.log();("successfull",user);
                
              })
              .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorMessage);
                setError(errorMessage);
                
              });  

         
      }
      else{
        setError("please accept terms & conditions");
      }
      //console.log();(checked);
  
      
      
    }
    const handleUpdateUserProfile = (name, photoURL) => {
      const profile = {
          displayName: name,
          photoURL: photoURL
      }
  
      updateUserProfile(profile)
          .then(() => { 
            setLoading(false);
          })
          .catch(error =>{ 
            console.error(error);
            setLoading(false);
          
          });
  }
    const handleGoogleSignIn = () =>{
      signInWithGoogle()
      .then(result =>{
        //console.log();(result);
        setError('');
      
        navigate(from, {replace: true});
        
        handleUpdateUserProfile(result.user.name,result.user.photoURL)
          // handleUpdateUserProfile(name,photoURL);
      })
      .catch(err =>{
        //console.log();(err);
        setError(err.message);
      })
    }


    if(user){
      return <Navigate to="/" state={{from: location}} replace></Navigate>
     }
    return (

    <div className='flex h-full'>
     
      {/* Left Side */}
      <div className="w-1/2 h-full flex align-items-center">
          
        <div className="   p-10 m-auto ">
          <form onSubmit = {handleSubmit}>
            <div className="mb-3">
              <h3 className="font-bold text-center  ">Welcome To</h3>
              <h2 className="text-center text-2xl font-bold"> Furni<span className="text-[#1E99F5]">Flex</span> </h2>
             
             <div className='flex'>
              <div>
                  <label htmlFor="name" className="form-label">
                  First Name
                  </label>
                    <input
                    type="text"
                    name="first_name"
                    className="form-control border  h-8"
                  
                    aria-describedby="emailHelp"
                    required
                  />
                </div>
              <div>
                  <label htmlFor="name" className="form-label">
                    Last Name
                  </label>
                    <input
                    type="text"
                    name="second_name"
                    className="form-control border  h-8"
                  
                    aria-describedby="emailHelp"
                    required
                  />
                </div>
            </div>
              {/* <label htmlFor="photo" className="form-label">
               Image:
              </label>
              <input
                type="file"
                name="photoUrl"
                className="form-control border w-full h-8"

                id="photo"
                aria-describedby="emailHelp"
                required
              /> */}
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                className="form-control border w-full h-8"

                id="email"
                aria-describedby="emailHelp"
                required
              />
            
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="form-control border w-full h-8"

                id="password"
                required
              />
            </div>
            <div className="mb-3">
            <input
                type="checkbox"
                name="checkbox"
                className='me-2'
                required
                
              />
              <label htmlFor="checkbox" className="form-label">
                Accept terms & conditions
              </label>
          
            </div>
        
            <button type="submit" className="btn mt-5 btn-outline w-full border ">
                    Signup
          </button>
            <p className='error text-danger'> <small className='text-danger'>{error} </small>  </p>
          </form>
          <p className="text-center mt-3"> 
          Already have an account?<Link className='link' to="/login">Log in</Link>
          </p>
        <div className=' sign-in-options text-center '> 

            <h6>Or you can continue with  </h6>
            <p className=" flex justify-center mt-2"> 
                <span onClick={handleGoogleSignIn} className='sign-in-option  sign-in-with-google text-5xl'><AiOutlineGoogle></AiOutlineGoogle> </span>
                {/* <span className="sign-in-option sign-in-with-github text-5xl"><AiFillGithub></AiFillGithub> </span> */}
   
            </p>

        </div>
          
         
        </div>
       </div>

       <div className='border w-1/2'>
                <RightSide></RightSide>

      </div>

    </div>
    );
};

export default Register;




