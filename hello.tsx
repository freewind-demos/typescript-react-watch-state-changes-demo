//import * as React from 'react'
import React, {ChangeEvent} from 'react'

type State = {
  message: string
}

class Hello extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      message: "hello"
    }
  }

  onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const message = event.target.value;
    this.setState({message})
  };

  componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<State>, snapshot?: any): void {
    if (prevState.message !== this.state.message) {
      console.log(`message changed to: ${this.state.message}`);
    }
  }

  render() {
    return <div>
      <h1>Hello React</h1>
      <input type="text" onChange={this.onChange}/>
    </div>
  }
}

export default Hello
