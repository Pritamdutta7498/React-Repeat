function Dynamic(){
    let randomNum = Math.random() * 100;
    return <>
    <h3 style={{'background-color': 'green'}} >Random Numer is: {Math.round(randomNum)}</h3>
    </>
}
export default Dynamic;