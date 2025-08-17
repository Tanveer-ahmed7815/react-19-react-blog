import style from './css/userProfile.module.css'

function UserProfile() {
    return (
        <div>
            <h1 className={style.heading}>User Profile</h1>
            <div className={style.card}>
                <img className={style.img} src="https://fastly.picsum.photos/id/145/536/354.jpg?hmac=Z4r_PULhGCx_ft_MM94T3oZEX_3u6Pvv9ip8ZoLveE8" alt="" />
                <div>
                    <h4>Piano</h4>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;