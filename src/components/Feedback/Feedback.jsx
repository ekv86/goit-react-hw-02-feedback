import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Section } from './Section';
import { Notification } from './Notification';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = el => {
    this.setState(prevState => {
      return { [el]: prevState[el] + 1 };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const positiveFeedback = good / this.countTotalFeedback() * 100;
    return Math.round(positiveFeedback);
  }

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            handleClick={this.handleClick}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? ( <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />) : <Notification message="There is no feedback"/>}
         
        </Section>
      </div>
    );
  }
}
