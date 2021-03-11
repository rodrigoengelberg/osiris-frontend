import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import {
  changeLayout,
  changeTopbarTheme,
  changeLayoutWidth,
} from '../../store/actions'

// Other Layout related Component
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'
import Rightbar from '../CommonForBoth/Rightbar'

const document: any = window.document

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuOpened: false,
    }
  }

  componentDidMount() {

    const props: any = this.props

    if (props.isPreloader === true) {
      document.getElementById("preloader").style.display = "block"
      document.getElementById("status").style.display = "block"

      setTimeout(function () {
        document.getElementById("preloader").style.display = "none"
        document.getElementById("status").style.display = "none"
      }, 2500)
    } else {
      document.getElementById("preloader").style.display = "none"
      document.getElementById("status").style.display = "none"
    }

    // Scrollto 0,0
    window.scrollTo(0, 0)

    const title = props.location.pathname
    let currentage = title.charAt(1).toUpperCase() + title.slice(2)

    document.title =
      currentage + " | Skote - Responsive Bootstrap 5 Admin Dashboard"

    props.changeLayout("horizontal")
    if (props.topbarTheme) {
      props.changeTopbarTheme(props.topbarTheme)
    }
    if (props.layoutWidth) {
      props.changeLayoutWidth(props.layoutWidth)
    }
  }

  /**
   * Opens the menu - mobile
   */
  openMenu = () => {

    const state: any = this.state

    this.setState({ isMenuOpened: !state.isMenuOpened })
  }
  render() {

    const props: any = this.props
    const state: any = this.state

    return (
      <React.Fragment>
        <div id="preloader">
          <div id="status">
            <div className="spinner-chase">
              <div className="chase-dot"/>
              <div className="chase-dot"/>
              <div className="chase-dot"/>
              <div className="chase-dot"/>
              <div className="chase-dot"/>
              <div className="chase-dot"/>
            </div>
          </div>
        </div>

        <div id="layout-wrapper">
          <Header
            theme={props.topbarTheme}
            isMenuOpened={state.isMenuOpened}
            openLeftMenuCallBack={this.openMenu}
          />
          <Navbar menuOpen={state.isMenuOpened} />
          <div className="main-content">{this.props.children}</div>
          <Footer />
        </div>

        {props.showRightSidebar ? <Rightbar /> : null}
      </React.Fragment>
    )
  }
}

const mapStatetoProps = state => {
  return {
    ...state.Layout,
  }
}
export default connect(mapStatetoProps, {
  changeTopbarTheme,
  changeLayout,
  changeLayoutWidth,
})(withRouter(Layout))
