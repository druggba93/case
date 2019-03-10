import React from "react";
import PropTypes from "prop-types";
import {TableCell} from "../../components/Common";
import {calcStenScore} from "../../utils/utils.js";


export class EmployeeData extends React.Component {

  static propTypes = {
    employeeData: PropTypes.object.isRequired,
    orgAvgScore: PropTypes.number.isRequired,
    orgStDev: PropTypes.number.isRequired
  };

  render() {
    const employeeData = this.props.employeeData;
    const testScore = employeeData.logicTest.edges.length > 0 ? employeeData.logicTest.edges[0].node.score : null;
    const stenScore = calcStenScore(testScore, this.props.orgAvgScore, this.props.orgStDev);
    return (
        <tr>
          <TableCell>{employeeData.firstName} {employeeData.lastName}</TableCell>
          <TableCell>{employeeData.email}</TableCell>
          <TableCell>{employeeData.born}</TableCell>
          <TableCell>{testScore ? (testScore * 100).toFixed(1).toString() + " %" : "N/A"}</TableCell>
          <TableCell>{stenScore ? Math.round(stenScore) : "N/A"}</TableCell>
        </tr>
    );
  }
}

export default EmployeeData;
