import  React, { Component} from 'react'
import GranndChild from './GrandChild'

class Child2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
      

        }
    }

    render() {
        return(
<div>
    <h3> Child2</h3>
    <GranndChild data={this.props.stock}/>
    </div>
        )
    }
}

export default Child2