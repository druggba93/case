import React from "react";
import { Wrapper, Table, HeaderCell } from "../../components/Common";
import { Summary } from "../../components/Summary";
import { EmployeeData } from "../../components/EmployeeData";
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
      .reduce((prev, cur) => {
        return cur.length > 0 ? prev.concat(cur[0].node.score) : prev;
      }, []);
  };

  render() {
    const { teamData, orgAvgScore, orgStDev } = this.props;
    const teamTestScores = this.extractTestScores(
      teamData.node.employments.edges
    );
    const teamAvgScore = calcAvgScore(teamTestScores);
    const teamStDev = calcStDev(teamTestScores);
    return (
      <Wrapper>
        <Summary
          name={teamData.node.name}
          id={teamData.node.id}
          created={teamData.node.created}
          numTests={teamTestScores.length}
          avgScore={teamAvgScore}
          stDev={teamStDev}
        />
        {teamTestScores.length > 0 && (
          <Table>
            <thead>
              <tr>
                <HeaderCell>Name</HeaderCell>
                <HeaderCell>Email</HeaderCell>
                <HeaderCell>Birth date</HeaderCell>
                <HeaderCell>Test score</HeaderCell>
                <HeaderCell>Sten score</HeaderCell>
              </tr>
            </thead>
            <tbody>
              {teamData.node.employments.edges.map(employee => {
                const employeeData = employee.node.employment.user;
                return (
                  <EmployeeData
                    key={employeeData.id}
                    employeeData={employeeData}
                    orgAvgScore={orgAvgScore}
                    orgStDev={orgStDev}
                  />
                );
              })}
            </tbody>
          </Table>
        )}
      </Wrapper>
    );
  }
}

export default TeamData;
