import React from 'react';
import {WithOrganizations} from '../../containers/WithOrganization';
import {Header, LargeHeader, Wrapper, MainWrapper, PlainText } from '../../components/Common';
import {OrgData} from '../../components/OrgData';
import {TeamData} from '../../components/TeamData';
import { calcAvgScore, calcStDev } from "../../utils/utils.js";

import {CONFIG} from '../../config';


class Home extends React.Component {

    renderError = (error) => {
        console.log(error);

        return (
            <div>
                <Header>Something went wrong</Header>
            </div>
        );
    };

    extractTestScores = orgData => {
        const teams = orgData.teams.edges;
        return teams
        .map(team => team.node.employments.edges)
        .reduce((prev, cur) => { return prev.concat(cur) }, [])
        .map(item => item.node.employment.user.logicTest.edges)
        .reduce((prev, cur) => { return cur.length > 0 ? prev.concat(cur[0].node.score) : prev}, [])
    };

    render() {
        return (
            <MainWrapper>
                <LargeHeader>Welcome to Alva Labs!</LargeHeader>
                <PlainText>Here you can see logic test scores for employees in each team in an organization</PlainText>
                <WithOrganizations onError={this.renderError} organizationId={CONFIG.ORGANIZATION_ID}>
                    {({loading, data}) => {
                        if (loading) {
                            return <PlainText>Loading</PlainText>;
                        }

                        const orgTestScores = this.extractTestScores(data.organization);
                        const orgAvgScore = calcAvgScore(orgTestScores);
                        const orgStDev = calcStDev(orgTestScores);

                        return (
                          <Wrapper>
                            <OrgData orgData={data.organization} orgNumTests={orgTestScores.length} orgAvgScore={orgAvgScore} orgStDev={orgStDev}></OrgData>
                            <LargeHeader>Team stats</LargeHeader>
                            {data.organization.teams.edges.map(team => {
                              return (<TeamData key={team.node.id} teamData={team} orgAvgScore={orgAvgScore} orgStDev={orgStDev}></TeamData>)
                            })}
                          </Wrapper>
                        );
                    }}
                </WithOrganizations>
            </MainWrapper>
        );
    }
}

export default Home;
