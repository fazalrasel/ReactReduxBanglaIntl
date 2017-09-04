import React from 'react';
import expect from 'expect';
import IntlCurrency from '../IntlCurrency/IntlCurrency';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const middlewares = [];
const mockStore = configureStore(middlewares);


describe('IntlCurrency', () => {
  let wrapper = undefined;
  let store = undefined;

  describe('basic Test: ', () => {
    let initialState = {
      currentLanguage: 'en'
    };
    beforeEach(() => {
      store = mockStore(initialState);
      wrapper = mount(<Provider store={store} ><IntlCurrency/></Provider>)
    });

    it('Should Wrap With "span"', () => {
      expect(wrapper.find('span').length).toEqual(1);
    });
  });

  describe('english currency', () => {
    let initialState = {
      currentLanguage: 'en'
    };
    beforeEach(() => {
      store = mockStore(initialState);
      wrapper = mount(<Provider store={store} ><IntlCurrency value={1234} /></Provider>)
    });

    it('should default to left symbol', () => {
      expect(wrapper.find('span').text()).toEqual('BDT1234');
    });

    it('should default to right symbol', () => {
      let props = {
        value: 1234,
        enSymbolPosition: 'right',
      };
      wrapper = mount(<Provider store={store} ><IntlCurrency {...props} /></Provider>);
      expect(wrapper.find('span').text()).toEqual('1234BDT');
    });
    it('should default to left symbol with given currency symbol', () => {
      let props = {
        value: 1234,
        enSymbol: 'TK'
      };
      wrapper = mount(<Provider store={store} ><IntlCurrency {...props} /></Provider>);
      expect(wrapper.find('span').text()).toEqual('TK1234');
    });

    it('should default to left symbol with given currency symbol', () => {
      let props = {
        value: 1234,
        enSymbol: ' TK.',
        enSymbolPosition: 'right',
      };
      wrapper = mount(<Provider store={store} ><IntlCurrency {...props} /></Provider>);
      expect(wrapper.find('span').text()).toEqual('1234 TK.');
    });
  });

  describe('bangla currency', () => {
    let initialState = {
      currentLanguage: 'bn'
    };
    beforeEach(() => {
      store = mockStore(initialState);
      wrapper = mount(<Provider store={store} ><IntlCurrency value={1234} /></Provider>)
    });

    it('should default to left symbol', () => {
      expect(wrapper.find('span').text()).toEqual('টাকা১২৩৪');
    });

    it('should default to right symbol', () => {
      let props = {
        value: 1234,
        bnSymbolPosition: 'right',
      };
      wrapper = mount(<Provider store={store} ><IntlCurrency {...props} /></Provider>);
      expect(wrapper.find('span').text()).toEqual('১২৩৪টাকা');
    });
    it('should default to left symbol with given currency symbol', () => {
      let props = {
        value: 1234,
        bnSymbol: '৳ '
      };
      wrapper = mount(<Provider store={store} ><IntlCurrency {...props} /></Provider>);
      expect(wrapper.find('span').text()).toEqual('৳ ১২৩৪');
    });
  });
});
