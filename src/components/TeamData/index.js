import React from "react";
import {Wrapper, TableHead} from "../../components/Common";
import {Summary} from "../../components/Summary";
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
      <Wrapper>
        <Summary vars={vars}></Summary>
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Birth date</th>
            <th>Test score</th>
            <th>Sten score</th>
            <th>Percentile</th>
          </tr>
          <tr>
            <td>Oskar Drugge</td>
            <td>drugge.oskar@gmail.com</td>
            <td>1993-07-18</td>
            <td>{42/45}</td>
            <td>10</td>
            <td>99</td>
          </tr>
        </table>
      </Wrapper>
    );
  }
}

export default TeamData;
