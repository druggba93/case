import React from "react";
import { Header, Wrapper, PlainText } from "../../components/Common";
import PropTypes from "prop-types";

export class Summary extends React.Component {
  static propTypes = {
    vars: PropTypes.object.isRequired
  };

  render() {
    const vars = this.props.vars;
    return (
      <Wrapper>
        <Header>{vars.name}</Header>
        <PlainText>ID: {vars.id}</PlainText>
        <PlainText>Created at: {vars.created.split("T")[0]}</PlainText>
        <PlainText>Number of persons taken the test: {vars.numTests}</PlainText>
        <PlainText>
          Average test score: {(vars.avgScore * 100).toFixed(1)} %
        </PlainText>
        <PlainText>
          Standard deviation of test scores: {(vars.stDev * 100).toFixed(1)} %
        </PlainText>
      </Wrapper>
    );
  }
}

export default Summary;
