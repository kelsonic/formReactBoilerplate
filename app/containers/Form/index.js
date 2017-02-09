/*
 *
 * Form
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import makeSelectForm from './selectors';
import { updateInput, updateInputLabel } from './actions';

export class Form extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    input: PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
    updateInput: PropTypes.func.isRequired,
    updateInputLabel: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div>
        <p>{this.props.input.label}</p>
        <input
          onChange={this.props.updateInput}
          value={this.props.input.value}
          style={{ border: '1px solid #eaeaea' }}
        />
        <button
          onClick={() => this.props.updateInputLabel(this.props.input.value)}
          style={{
            backgroundColor: '#4CAF50',
            borderRadius: '5em',
            color: 'white',
            display: 'block',
            fontSize: '16px',
            padding: '15px 32px',
            margin: '20px auto',
            textAlign: 'center',
            textDecoration: 'none',
          }}
        >
          Change Label
        </button>
      </div>
    );
  }
}

const mapStateToProps = makeSelectForm();

function mapDispatchToProps(dispatch) {
  return {
    updateInput: (event) => dispatch(updateInput(event.target.value)),
    updateInputLabel: (value) => dispatch(updateInputLabel(value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
