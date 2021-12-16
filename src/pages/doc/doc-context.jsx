import * as React from 'react';

const DOCContext = React.createContext({
  title: '',
  navLists: [],
  action: (key, value) => {}
});

export const useDocContext = () => React.useContext(DOCContext);

export const DOCContextProvider = (props) => {
  const [title, setTitle] = React.useState('');
  const [navLists, setNavLists] = React.useState([]);

  const updateAction = (key, value) => {
    const actions = {
      title: setTitle,
      navLists: setNavLists
    };

    if (!Object.keys(actions).includes(key)) return;
    actions[key](value);
  }
  return (
    <DOCContext.Provider
      value={{
        title,
        navLists,
        action: updateAction
      }}
    >
      {props.children}
    </DOCContext.Provider>
  )
}