import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

interface IProps {
  isAuthProtected?: boolean;
  path: string;
  exact?: any;
  layout: React.ComponentType<any>;
  component: React.ComponentType<any>;
}

const Authmiddleware = ({
  component: Component,
  layout: Layout,
  isAuthProtected,
  ...rest
}: IProps) => (
  <>
    <Route
      {...rest}
      render={props => {
        if (isAuthProtected && !localStorage.getItem('authUser')) {
          return (
            <Redirect to={{ pathname: '/login', state: { from: props.location } }}
            />
          )
        }

        return (
          <Layout>
            <Component {...props} />
          </Layout>
        )
      }}
    />
  </>
)

Authmiddleware.propTypes = {
  isAuthProtected: PropTypes.bool,
  component: PropTypes.any,
  location: PropTypes.object,
  layout: PropTypes.any,
}

export default Authmiddleware