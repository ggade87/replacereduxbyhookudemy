import { useState, useEffect } from "react";
let globalState = {};
let listeners = [];
let actions = {};

export const useStore = (shouldListen = true) => {
  const setState = useState(globalState)[1];
  const dispatch = (actionIdentifire, payLoad) => {
    const newState = actions[actionIdentifire](globalState, payLoad);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    if (shouldListen) {
      listeners.push(setState); //adding to compoent
    }

    return () => {
      if (shouldListen) {
        listeners = listeners.filter((li) => li !== setState); // removing from comppet
      }
    };
  }, [setState, shouldListen]);

  return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
};
