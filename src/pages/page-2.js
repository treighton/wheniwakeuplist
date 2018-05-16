import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
  <div>
    <h1>FAQ / RULES</h1>
    <p>
      Right now there aren't many FAQ's so this will basically serve as a place
      to house the rules for this game
    </p>
    <ul>
      <li>
        <h3>Rule 1:</h3>
        <p>
          When you wake up with a song stuck in your head you <em>MUST</em> add
          it to your list (variety makes it more fun, so dont be emberassed)
        </p>
      </li>
      <li>
        <h3>Rule 2:</h3>
        <p>
          You MUST add the exact or closest version of the song that was stuck
          in your head (if you cannot find a version of the song that is close
          enough to the version that was stuck in your head you can skip adding
          it)
        </p>
      </li>
      <li>
        <h3>Rule 3:</h3>
        <p>
          The song you <em>MUST ADD</em> is the{' '}
          <strong>
            VERY FIRST SONG IN YOUR HEAD WHEN THE LITTLE THING POPS OFF ITS
            PILLOW
          </strong>
        </p>
      </li>
    </ul>
    <p>
      if you have any other rules to suggest shoot an email to{' '}
      <a href="mailto:treighton@gmail.com">treighton@gmail.com</a> or DM me{' '}
      <a href="https://www.instagram.com/treighton/">here</a>
    </p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
