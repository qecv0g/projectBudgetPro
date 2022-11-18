import Layout from "components/Layout";

const LoginPage = () => {
//     console.log(logo);

// const App = () => {
//   const [errorMessages, setErrorMessages] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const database = [
//     {
//       username: "user1",
//       password: "pass1",
//     },
//     {
//       username: "user2",
//       password: "pass2",
//     },
//   ];

//   const errors = {
//     uname: "invalid username",
//     pass: "invalid password",
//   };

//   const handleSubmit = (event) => {
//     //Prevent page reload
//     event.preventDefault();

//     var { uname, pass } = document.forms[0];

//     // Find user login info
//     const userData = database.find((user) => user.username === uname.value);

//     // Compare user info
//     if (userData) {
//       if (userData.password !== pass.value) {
//         // Invalid password
//         setErrorMessages({ name: "pass", message: errors.pass });
//       } else {
//         setIsSubmitted(true);
//       }
//     } else {
//       // Username not found
//       setErrorMessages({ name: "uname", message: errors.uname });
//     }
//   };

//   const renderErrorMessage = (name) =>
//     name === errorMessages.name && (
//       <div className="error">{errorMessages.message}</div>
//     );

    const renderForm = (
        
    )
    return (
        <Layout title= 'Auth Site | Login' content = 'Login page'>
        <h1>Login</h1>
    

          <div className="welcome"> Welcome Back!</div>
          <div className="form">
            <div className="input-container">
              <label>Username </label>
              <input type="text" name="uname" required />
              
            </div>
    
              <label>Password </label>
              <input type="password" name="pass" required />
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
          

          <div className="login-form">
            <div className="title">Log In</div>
     
        </div>

        <div className="second">
          <div className="vl">
            {" "}
            <p>
              <b>NEW HERE?</b>
            </p>
          </div>
          <div className="underNewh">
            {" "}
            <span>
              <b>
                Please, register and start managing <br></br>your money!
              </b>
            </span>
          </div>

          <button className="regB regBH">Register</button>
        </div>
      </div>
    </div>


        
    </Layout>
    );
};

export default LoginPage;