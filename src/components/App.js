

import '../App.css';
import React from 'react'
import TodoFormContainer from './TodoFormContainer'
import TodoListContainer from './TodoListContainer'
import Footer from './Footer'

const App = () => (
    <div>
        <TodoFormContainer />
        <TodoListContainer />
        <Footer />
    </div>

)

export default App
