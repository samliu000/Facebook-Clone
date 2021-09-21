import React from 'react';
import './Feed.css';
import MessageSender from './MessageSender';
import StoryReel from './StoryReel';
import Post from './Post';

function Feed() {
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />

            <Post 
                profilePic="https://media-exp1.licdn.com/dms/image/C5603AQFwISC-cajaFw/profile-displayphoto-shrink_800_800/0/1592189648204?e=1637193600&v=beta&t=c8aQyuWopxDANfYPZWpua4hdpEQArWuwQvPVWN6_EuE"
                message="Cool this works!"
                timestamp="10:26 9/20"
                username="samuelliu"
                image="https://code.org/shared/images/social-media/codeorg2019_social.png"
            />
            <Post 
                profilePic="https://media-exp1.licdn.com/dms/image/C5603AQFwISC-cajaFw/profile-displayphoto-shrink_800_800/0/1592189648204?e=1637193600&v=beta&t=c8aQyuWopxDANfYPZWpua4hdpEQArWuwQvPVWN6_EuE"
                message="Facebook clone woot woot!"
                timestamp="10:24 9/20"
                username="samuelliu"
            />

        </div>
    )
}

export default Feed