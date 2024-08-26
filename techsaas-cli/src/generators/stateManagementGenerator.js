import {
  createFileWithDirCheck,
  ensureCorrectDirectory,
} from '../utils/fileUtils.mjs';
import { loadCustomTemplate } from '../config/templates.js';

export const createStateManagementFiles = (
  solution,
  targetDir,
  fileExtension
) => {
  const finalDir = ensureCorrectDirectory(targetDir);

  const stateManagementTemplates = {
    context: {
      contextFile:
        loadCustomTemplate('context', 'Context') ||
        `import React, { createContext, useReducer } from 'react';
const initialState = {};
const Context = createContext(initialState);
const reducer = (state, action) => { switch (action.type) { default: return state; }};
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};
export default Context;`,
      usageExample: `import React, { useContext } from 'react';
import Context from './Context';
const ExampleComponent = () => {
  const { state, dispatch } = useContext(Context);
  return <div><p>State: {JSON.stringify(state)}</p></div>;
};
export default ExampleComponent;`,
    },
    redux: {
      storeFile: `import { createStore } from 'redux';
import rootReducer from './reducers';
const store = createStore(rootReducer);
export default store;`,
      rootReducerFile: `import { combineReducers } from 'redux';
// import your reducers here
const rootReducer = combineReducers({
  // Add your reducers here
});
export default rootReducer;`,
      usageExample: `import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
const ExampleComponent = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div>
      <p>State: {JSON.stringify(state)}</p>
    </div>
  );
};
export default ExampleComponent;`,
    },
    reduxToolkit: {
      storeFile: `import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './slices';
const store = configureStore({
  reducer: rootReducer,
});
export default store;`,
      rootReducerFile: `import { combineReducers } from '@reduxjs/toolkit';
// import your slices here
const rootReducer = combineReducers({
  // Add your slices here
});
export default rootReducer;`,
      usageExample: `import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
const ExampleComponent = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div>
      <p>State: {JSON.stringify(state)}</p>
    </div>
  );
};
export default ExampleComponent;`,
    },
  };

  if (solution === 'context') {
    createFileWithDirCheck(
      path.join(finalDir, `Context.${fileExtension}`),
      stateManagementTemplates.context.contextFile
    );
    createFileWithDirCheck(
      path.join(finalDir, `ExampleComponent.${fileExtension}`),
      stateManagementTemplates.context.usageExample
    );
  } else if (solution === 'redux' || solution === 'reduxToolkit') {
    createFileWithDirCheck(
      path.join(finalDir, `store.${fileExtension}`),
      stateManagementTemplates[solution].storeFile
    );
    createFileWithDirCheck(
      path.join(finalDir, `rootReducer.${fileExtension}`),
      stateManagementTemplates[solution].rootReducerFile
    );
    createFileWithDirCheck(
      path.join(finalDir, `ExampleComponent.${fileExtension}`),
      stateManagementTemplates[solution].usageExample
    );
  }

  console.log(
    `${solution} state management setup created at ${finalDir}`
  );
};
