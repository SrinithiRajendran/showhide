// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    first: false,
    last: false,
  }

  onShowHideFirst = () => {
    this.setState(prev => ({
      first: !prev.first,
    }))
  }

  onShowHideLast = () => {
    this.setState(prev => ({
      last: !prev.last,
    }))
  }

  render() {
    const {first, last} = this.state
    return (
      <div className="bg-container">
        <h1 className=" heading">Show/Hide</h1>
        <div className="showHide-container">
          <div className="button-container">
            <button
              type="button"
              className="button"
              onClick={this.onShowHideFirst}
            >
              Show/Hide Firstname
            </button>

            {first && <p className="card-name">Joe</p>}
          </div>

          <div className="button-container">
            <button
              type="button"
              className="button"
              onClick={this.onShowHideLast}
            >
              Show/Hide Lastname
            </button>

            {last && <p className="card-name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
