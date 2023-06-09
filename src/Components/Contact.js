import React from 'react'
import UserMenu from './UserMenu'

const Contact = () => {
    return (
        <>
            <UserMenu />
            <div class="container mt-5">
                <h1>Contact Us</h1>
                <form method="post" action="submit.php">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" id="name" name="name" required></input>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" name="email" required></input>
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea class="form-control" id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" class="bntcom mt-3">Submit</button>
                </form>
            </div>
            </>

            )
}

            export default Contact