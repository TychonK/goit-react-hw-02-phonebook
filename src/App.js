import './App.scss';
import { Component } from 'react';
import { Statistics } from './components/Statistics/Statistics'
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions'
import { Title } from './components/Title/Title'
import {Notification} from './components/Notification/Notification'

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleIncrementGood = () => {
    this.setState((prevState) => {
      return {
        good: prevState.good + 1,
      }
    })
  }

handleIncrementNeutral = () => {
    this.setState((prevState) => {
      return {
        neutral: prevState.neutral + 1,
      }
    })
  }
  
  handleIncrementBad = () => {
    this.setState((prevState) => {
      return {
        bad: prevState.bad + 1,
      }
    })
  }

  render() {
    const total = this.state.bad + this.state.good + this.state.neutral;
    const percentage = Math.floor(this.state.good / total * 100);
    let stats;
    if (total === 0) {
      stats = <Notification message="No feedback given" />
    } else {
      stats = <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={total} percentage={percentage} />
    }
    return (
      <div className="App">
        <Title title="Please leave feedback">
          <FeedbackOptions handleIncrementBad={ this.handleIncrementBad} handleIncrementGood={ this.handleIncrementGood} handleIncrementNeutral={ this.handleIncrementNeutral}/>
        </Title>
        <Title title="Statistics">
          {stats}
        </Title>  
      </div>
    )
  }
}

export default App;
