import React from 'react';
import PropTypes from 'prop-types'

/*Here Props were passed to the funtion,to simplify code we have use object destruction users is a object on props to destructure it we have used the syntax { users: { login, avatar_url, html_url}}*/
const UserItem = ({ user: { login, avatar_url, html_url } })=>{
        return (
            <div className='class card text-center'>
                <img src={avatar_url}
                alt=''
                className='round-img'
                style={{width:'60px'}}
                />
                <h3>{login}</h3>
                <div>
                    <a href={html_url} className='btn btn-dark btn-sm my-1'>More</a>
                </div>
            </div>
        )
}

UserItem.prototype = {
    user: PropTypes.object.isRequired,
}

export default UserItem
