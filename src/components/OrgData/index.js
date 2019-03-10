import React from "react";
import { Summary } from "../../components/Summary";
import PropTypes from "prop-types";

export class OrgData extends React.Component {
  static propTypes = {
    orgData: PropTypes.object.isRequired,
    orgNumTests: PropTypes.number.isRequired,
    orgAvgScore: PropTypes.number.isRequired,
    orgStDev: PropTypes.number.isRequired
  };

  render() {
    const { orgData, orgNumTests, orgAvgScore, orgStDev } = this.props;
    return (
      <Summary
        name={orgData.name}
        id={orgData.id}
        created={orgData.created}
        numTests={orgNumTests}
        avgScore={orgAvgScore}
        stDev={orgStDev}
      />
    );
  }
}

export default OrgData;
