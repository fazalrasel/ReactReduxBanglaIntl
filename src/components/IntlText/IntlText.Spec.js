import React from 'react';
import expect from 'expect';
import IntlText from './IntlText';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const middlewares = [];
const mockStore = configureStore(middlewares);


describe('IntlText', () => {
  let wrapper = undefined;
  let testProps = { en: 'Language', bn: 'বাংলা' };
  let store = undefined;
  let initialState = {
    currentLanguage: 'en'
  };

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(<Provider store={store} ><IntlText {...testProps}/></Provider>);
    // console.log(wrapper);
    // wrapper = shallow(<IntlText store={store} {...testProps}/>);
  });

  it('Should Wrap With "span"', () => {
    // expect(true).toBeFalsy();
    expect(wrapper.find('span').length).toEqual(1);
  });

  it('Should Display english Message from props', () => {
    expect(wrapper.find('span').text()).toEqual(testProps.en);
  });

  it('should change to bangla when toggleLanguage action fired', () => {
    store = mockStore({
      currentLanguage: 'bn',
    });
    wrapper = mount(<Provider store={store} ><IntlText {...testProps}/></Provider>);
    expect(wrapper.find('span').text()).toEqual(testProps.bn);
  });
});
