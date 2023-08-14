const LoginPageComponent = () => {
    const goToGoogleSignIn = () => {
        // this will redirect user to google login page
        window.location.href = "https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=insert_your_client_id&redirect_uri=http://localhost:3000/auth&scope=https://www.googleapis.com/auth/userinfo.email";
    }

    return (
        <div>
            <h2>Please login</h2>
            <button onClick={() => goToGoogleSignIn()}>Log In with Google</button>
        </div>
    );
}

export default LoginPageComponent;


