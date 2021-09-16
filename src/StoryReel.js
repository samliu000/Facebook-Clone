import React from 'react';
import Story from './Story';
import './StoryReel.css'

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story 
                image="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"
                profileSrc="https://media-exp1.licdn.com/dms/image/C5603AQG_IOrOXN9BuQ/profile-displayphoto-shrink_200_200/0/1599165023844?e=1635984000&v=beta&t=KpXOUk4z5GUmYHLpVk4-s8ZoIaLDdpVZY10na0YTaSM"
                title="Kimberly Kao"
            />
            <Story 
                image="https://i2.wp.com/files.123freevectors.com/wp-content/original/131131-cool-blue-polygon-background-template-design.jpg?w=800&q=95"
                profileSrc="https://media-exp1.licdn.com/dms/image/C5603AQFwISC-cajaFw/profile-displayphoto-shrink_800_800/0/1592189648204?e=1637193600&v=beta&t=c8aQyuWopxDANfYPZWpua4hdpEQArWuwQvPVWN6_EuE"
                title="Samuel Liu"
            />
            <Story 
                image="https://images.unsplash.com/photo-1527082395-e939b847da0d?%20ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                profileSrc="https://image.cnbcfm.com/api/v1/image/106569797-1591649109683gettyimages-1032942656.jpeg?v=1597932630"
                title="Frankie"
            />
            <Story 
                image="https://media.istockphoto.com/photos/neon-background-abstract-blue-and-pink-with-light-shapes-line-picture-id1191658515?k=20&m=1191658515&s=612x612&w=0&h=GyYyYJB8QTutGPhOtWdz0k8adWc1q4F55oEdM37duNA="
                profileSrc="https://prod-takelessons.netdna-ssl.com/document/profile_183419_pi_IMG_6868.JPG?v=1561606635"
                title="Swaydon"
            />
            <Story 
                image="https://wallpaperaccess.com/full/1810265.jpg"
                profileSrc="https://www.thelocal.se/wp-content/uploads/2018/12/6d67730d16af04f3f956389d4cc244af808b8381c23b1e3d218ecd792de14fa8.jpg"
                title="Naz"
            />
        </div>
    )
}

export default StoryReel