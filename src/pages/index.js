import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>
      This will soon be a site where you can add your spotify playlists of songs
      that were stuck in your head when you woke up!
    </p>
    <p>GO MAKE THAT LIST!</p>
    <h3>Lists So Far</h3>
    <p>Go listen to them while you wait for this site to be built!</p>
    <ul>
      <li>
        <iframe
          src="https://open.spotify.com/embed/user/1238350059/playlist/6FtFCQWzUy4I6tWlMhqQa3"
          width="300"
          height="380"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        />
      </li>
      <li>
        <iframe
          src="https://open.spotify.com/embed/user/1212739218/playlist/1XLZ6gKOhB7uMuneUs9a1E"
          width="300"
          height="380"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        />
      </li>
      <li>
        <iframe
          src="https://open.spotify.com/embed/user/1248643022/playlist/4o7seOy3gAezJdjfemzB9P"
          width="300"
          height="380"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        />
      </li>
      <li>
        <iframe
          src="https://open.spotify.com/embed/user/1212739218/playlist/2ydHg7sr1NcLGTkThTxbtA"
          width="300"
          height="380"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        />
      </li>
    </ul>

    <p>
      to add yours to this list shoot an email to
      <a href="mailto:treighton@gmail.com">treighton@gmail.com</a> or DM me
      <a href="https://www.instagram.com/treighton/">here</a>
    </p>
    <Link to="/page-2/">FAQ / RULES</Link>
  </div>
)

export default IndexPage
