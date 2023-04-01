## Tutorial to generate QR codes using React
https://www.youtube.com/watch?v=74zwJzCTNBE


### Commands used:
```
npm create vite@latest .
```
```
npm i
```
```
npm i qrcode
```

### Clean up project
- Delete files:
 - App.css
 - Remove everything from App.tsx, so it looks like:
```
function App() {

  return (
     <div className="app">
        <h1>Hello world 2</h1>
     </div>
  )
}

export default App
```

- Remove everything from index.css and replace it with:
```
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}

body {
    text-align: center;
    background-color: #1b2034;
    color: #FFF;
}

.app{
    padding: 2rem 1rem;
}
```