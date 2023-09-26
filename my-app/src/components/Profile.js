const Profile = ({img}) => {
    const style = {marginleft: "10px", padding: "10px"}
    return(
        <img style={style} src={img !== undefined ? img : "https://i.imgur.com/MK3eW3As.jpg"} width={100} height={120}/>
    )
}

export default Profile