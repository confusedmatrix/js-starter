import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import Counter from '../../src/components/counter/Counter'

sinon.spy(Counter.prototype, 'render');

describe('<Counter />', () => {
    it('calls render', () => {
        const wrapper = mount(<Counter />);
        expect(Counter.prototype.render.calledOnce).to.equal(true);
    });
});