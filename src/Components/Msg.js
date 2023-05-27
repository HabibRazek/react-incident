import React from 'react'

const Msg = () => {
    return (
        <div class="inner-main-body p-2 p-sm-3 collapse forum-content show">
        <h3 class='text-center listmsg'>List Messages :</h3>
        <div class="card mb-2 mt-3">
            <div class="card-body p-2 p-sm-3">
                <div class="media forum-item">
                    <a href="/" data-toggle="collapse" data-target=".forum-content"><img src="https://bootdey.com/img/Content/avatar/avatar6.png" class="mr-3 rounded-circle" width="50" alt="User" /></a>
                    <div class="media-body">
                        <h6><a href="/" data-toggle="collapse" data-target=".forum-content" class="text-body">Realtime fetching data</a></h6>
                        <p class="text-secondary">
                            lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Msg