import React from 'react'
import { Feed, Icon } from 'semantic-ui-react'

const MessagesFeed = () => (
  <Feed>

    <Feed.Event>
      <Feed.Label image='/images/avatar/small/joe.jpg' />
      <Feed.Content>
        <Feed.Summary>
          <a>Joe Henderson</a> posted on his page
          <Feed.Date>3 days ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra text>
          Ours is a life of constant reruns. We're always circling back to where we'd we started,
          then starting all over again. Even if we don't run extra laps that day, we surely will
          come back for more of the same another day soon.
        </Feed.Extra>
      </Feed.Content>
    </Feed.Event>

</Feed>
)

export default MessagesFeed
