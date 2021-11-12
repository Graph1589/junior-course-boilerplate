import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { logger } from 'csssr-school-utils';

export default class LogRender extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    const changes = shallowCompare(this, nextProps, nextState);
    if (!changes) {
      return false;
    }
    logger.call(this, this.constructor.name, nextProps, nextState);
    return true;
  }
}
