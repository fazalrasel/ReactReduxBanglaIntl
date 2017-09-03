import React from 'react';
import expect from 'expect';
import IntlText from './IntlText';
import { mount } from 'enzyme';
import { createStore } from 'redux';
import reducer from './reducer';
import { Provider } from 'react-redux';

describe.only('IntlText', () => {
  let wrapper = undefined;
  let testProps = { en: 'Language', bn: 'বাংলা' };
  let store = undefined;

  beforeEach(() => {
    store = createStore(reducer);
    wrapper = mount(<Provider store={store} ><IntlText {...testProps}/></Provider>);
  });

  it('Should Wrap With "span"', () => {
    // expect(true).toBeFalsy();
    expect(wrapper.find('span').length).toEqual(1);
  });

  it('Should Display english Message from props', () => {
    expect(wrapper.find('span').text()).toEqual(testProps.en);
  });

  // it('should change to bangla when toggleLanguage action fired', () => {
  //   store.dispatch(toggleLanguage());
  //   expect(wrapper.find('span').text()).toEqual(testProps.bn);
  // });
});

