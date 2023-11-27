import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import '@fontsource/material-icons'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    // <React.StrictMode>
    <App />
    // </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

// ch02_1
// 물리 DOM
// let pPhysicalDOM = document.createElement('p')
// pPhysicalDOM.innerText = 'Hello physical DOM world!'
// document.body.appendChild(pPhysicalDOM)
// React.createElement

// 가상 DOM

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
// const pVirtualDOM = React.createElement('p', null, 'Hello virtual DOM world!')

// root.render(pVirtualDOM)

// ch02_2
// key
// const children = [0, 1, 2].map((n: number) => <h3>Hello world! {n}</h3>)
// const rootVirtualDOM = <div>{children}</div>

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
// root.render(rootVirtualDOM)

// Random image
// const children = D.makeArray(10).map((notUsed, index) => (
//     <div key={index}>
//         <p>{D.randomId()}</p>
//         <p>{D.randomName()}</p>
//         <p>{D.randomJobTitle()}</p>
//         <p>{D.randomSentence()}</p>
//         <img src={D.randomAvatar()} width={100} height={100} />
//     </div>
// ))
// const rootVirtualDOM = <div>{children}</div>

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
// root.render(rootVirtualDOM)
