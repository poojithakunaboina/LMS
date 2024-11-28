function TLogout(){
    localStorage.removeItem('teacherLoginStatus')
    
        window.location.href='/Tlogin';
    
    return(
        <div></div>
    );
}
export default TLogout;