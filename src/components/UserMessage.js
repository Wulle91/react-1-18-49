import React from 'react'

function UserMessage(props) {
  return (
    <div>
        {props.isLoggedIn ? (
                <div>
                    <p>Welcome to the Site! Please comlete the steps below:</p>
                    <ol>
                        <li>Confirm your email</li>
                        <li>Complete your profile</li>
                        <li>Subscribe to the nesletter</li>
                    </ol>
                    <button onClick={props.handleSigneOut}>Sign Out</button>
                </div>
            ) : (
              <div>
                <p>Please sign in</p>
                <button onClick={props.handleSigneIn}>Sign In</button>
              </div>
            )}
    </div>
  )
}

export default UserMessage