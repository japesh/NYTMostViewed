import React from 'react';
import { connect } from 'react-redux';
import { fetchAPI } from '../../redux/actions/API'

export default ({ url, name }) => (Component) => {

    @connect((state) => {
        const { error, isFetching, response } = state.API[name] || {};
        return ({ error, isFetching, response })
    }, { fetchAPI })
    class ReduxApi extends React.Component {
        componentDidMount() {
            const { isFetching, response } = this.props;
            if (!isFetching && !response) {
                this.props.fetchAPI({ url, name });
            }
        }
        render() {
            const { fetchAPI, ...restProps } = this.props;
            return <Component {...restProps} />
        }
    }
    return ReduxApi;
}