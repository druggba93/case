import React from "react";
import { Header, SmallHeader, Wrapper, PlainText } from "../../components/Common";
import {Summary} from "../../components/Summary"
import PropTypes from "prop-types";
import { calcAvgScore, calcStDev } from "../../utils/utils.js";


export class TeamData extends React.Component {

  static propTypes = {
    teamData: PropTypes.object.isRequired,
    orgAvgScore: PropTypes.number.isRequired,
    orgStDev: PropTypes.number.isRequired
  };

  extractTestScores = employments => {
    return employments
    .map(item => item.node.employment.user.logicTest.edges)
    .reduce((prev, cur) => { return cur.length > 0 ? prev.concat(cur[0].node.score) : prev}, [])
  };

  render() {

    const teamData = this.props.teamData.node;
    const teamTestScores = this.extractTestScores(teamData.employments.edges);
    const teamAvgScore = calcAvgScore(teamTestScores);
    const teamStDev = calcStDev(teamTestScores);
    const vars = {
        "name": teamData.name,
        "id": teamData.id,
        "created": teamData.created,
        "numTests": teamTestScores.length,
        "avgScore": teamAvgScore,
        "stDev": teamStDev
    }

    return (
        <Summary vars={vars}></Summary>
    );
  }
}

export default TeamData;
