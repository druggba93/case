import React from "react";
import {Summary} from "../../components/Summary";
import PropTypes from "prop-types";


export class OrgData extends React.Component {
  static propTypes = {
    orgData: PropTypes.object.isRequired,
    orgNumTests: PropTypes.number.isRequired,
    orgAvgScore: PropTypes.number.isRequired,
    orgStDev: PropTypes.number.isRequired
  };

  render() {

    const orgData = this.props.orgData;
    const vars = {
        "name": orgData.name,
        "id": orgData.id,
        "created": orgData.created,
        "numTests": this.props.orgNumTests,
        "avgScore": this.props.orgAvgScore,
        "stDev": this.props.orgStDev
    }

    return (
        <Summary vars={vars}></Summary>
    );
  }
}

export default OrgData;
