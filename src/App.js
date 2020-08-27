import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import SongList from './components/SongList';
import SongDetail from './components/SongDetail';

function App() {
  return (
    <Provider store={createStore(reducers)}>
      <div className="ui container grid">
        <div className="ui row" style={{marginTop: '30px'}}>
          <div className="column eight wide">
            <SongList />
          </div>
          <div className="column eight wide">
            <SongDetail />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
