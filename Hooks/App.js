import React from 'react'
import './App.css'
import ClassCounter from './components/ClassCounterOne'
import ClassCounterOne from './components/ClassCounterOne'
import HookCounter from './components/HookCounterOne'
import HookCounterOne from './components/HookCounterOne'
import Counter from './components/Counter'
import CounterOne from './components/CounterOne'
import ComponentC from './components/ComponentC'
import ParentComponent from './components/ParentComponent'


//export const UserContext = React.createContext ()
function App() {
  return (
    <div className='App'>
     {/*<ClassCounter />*/}
     {/*<HookCounter />*/}
     {/*<ClassCounterOne />*/}
     {/*<HookCounterOne />*/}
     {/*<Counter />*/}
     {/*<FocusInput />*/}
     {/*<CounterOne />*/}
     {/*<UserContext.Provider value= {'Fitri'}>
       <ComponentC />
     </UserContext.Provider>*/}
     <ParentComponent />
    </div>
  )
}

export default App
