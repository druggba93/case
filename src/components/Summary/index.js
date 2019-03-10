import React from "react";
import { Header, Wrapper, PlainText } from "../../components/Common";
import PropTypes from "prop-types";

export class Summary extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    numTests: PropTypes.number.isRequired,
    avgScore: PropTypes.number.isRequired,
    stDev: PropTypes.number.isRequired
  };

  render() {
    const { name, id, created, numTests, avgScore, stDev } = this.props;
    return (
      <Wrapper>
        <Header>{name}</Header>
        <PlainText>ID: {id}</PlainText>
        <PlainText>Created at: {created.split("T")[0]}</PlainText>
        <PlainText>Number of persons who have taken the test: {numTests}</PlainText>
        <PlainText>
          Average test score: {(avgScore * 100).toFixed(1)} %
        </PlainText>
        <PlainText>
          Standard deviation of test scores: {(stDev * 100).toFixed(1)} %
        </PlainText>
      </Wrapper>
    );
  }
}

export default Summary;
