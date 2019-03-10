import styled, { css } from "styled-components";

const headerStyle = css`
  font-family: "Roboto Mono", monospace;
  font-weight: bold;
  margin-bottom: 2px;
  margin-top: 20px;
`;

const tableCellStyle = css`
  border: 1px solid black;
  border-collapse: collapse;
  padding: 5px;
  font-family: "Roboto Mono", sans-serif;
  font-size: 14px;
  text-align: left;
`;

export const Header = styled.h1`
  ${headerStyle}
  font-size: 20px;
`;

export const LargeHeader = styled.h1`
  ${headerStyle}
  font-size: 24px;
`;

export const MainWrapper = styled.div`
  padding: 24px;
`;

export const Wrapper = styled.div`
  margin-top: 20px;
`;

export const PlainText = styled.p`
  font-family: "Roboto Mono", sans-serif;
  font-size: 14px;
`;

export const Table = styled.table`
  margin-top: 20px;
  border: 1px solid black;
  border-collapse: collapse;
`;

export const HeaderCell = styled.th`
  ${tableCellStyle}
  font-weight: bold;
`;

export const TableCell = styled.td`
  ${tableCellStyle}
`;
