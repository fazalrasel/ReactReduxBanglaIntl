import React from 'react';
import expect from 'expect';
import IntlNumber from './IntlNumber';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const middlewares = [];
const mockStore = configureStore(middlewares);


describe('IntlNumber', () => {
  let wrapper = undefined;
  let testProps = { value: 1234 };
  let defaultStore = undefined;
  let wrapperGenerator = undefined;
  let initialState = {
    currentLanguage: 'en'
  };

  beforeEach(() => {
    defaultStore = mockStore(initialState);
    wrapperGenerator = (store = defaultStore, props) => {
      return mount(<Provider store={store} ><IntlNumber {...props}/></Provider>);
    };
    wrapper = wrapperGenerator(defaultStore, testProps);
  });

  it('Should Wrap With "span"', () => {
    // expect(true).toBeFalsy();
    expect(wrapper.find('span').length).toEqual(1);
  });

  it('Should Display english English Number by default', () => {
    expect(wrapper.find('span').text()).toEqual(testProps.value);
  });

  it('Should change to bangla when toggleLanguage action fired', () => {
    defaultStore = mockStore({
      currentLanguage: 'bn'
    });
    wrapper = wrapperGenerator(defaultStore, testProps);
    expect(wrapper.find('span').text()).toEqual('১২৩৪');
  });
});
