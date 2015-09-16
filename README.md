# React Tunes
A simple React app to test competencies. Utilizes the Spotify API to display an artist and albums matching the search input.

> React is a JavaScript library for creating user interfaces. Its core principles are declarative code, efficiency, and flexibility. Simply specify what your component looks like and React will keep it up-to-date when the underlying data changes.

## Objectives
The goal is to turn this basic, non-optomized app into a React efficient and functional app. Currently, it is just a jQuery app that utilizes DOM manipulation to render the UI. React does all of this out of the box when handled correctly.

1. **Restructure into components**.
  Anything that is repeated, or outside of the context of the current component (logical serparation) should be it's own component (i.e. generating UI from strings like ` html = "<div>...</div>"` is **bad**).
2. **Implement state/props**.
  Data sould flow down from the parent components to the children. Props are immutatble and should be tired to a parent's mutable state.
3. **Fetch Data**.
  API callouts should directly feed component state.
4. *(Bonus)* Implement Bootstrap for styling (not just the css, but think thought the right Bootstrap components to aid the app).

## Running

Clone the repo to your local system. Navigate to the folder in your terminal or command prompt. Run `npm start` to fire up the node server on localhost. Then, go to `http://localhost:3000/` to access the app.

## Links

- [React Docs](https://facebook.github.io/react/docs/getting-started.html)
- [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html)
- [Spotify API](https://developer.spotify.com/web-api/search-item/)
- [Bootstrap](http://getbootstrap.com/components/)
