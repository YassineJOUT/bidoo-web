import styled from "styled-components";

const getWidthString = (span: number) => {
  if (!span) return;
  return "width: " + (span / 12) * 100 + "%";
};

interface Props {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
}

const Row = styled.div`
  &after:: {
    content: "";
    clear: both;
    display: table;
  }
`;

const Column = styled.div<Props>`
  margin: 1px;
  float: left;
  ${({ xs }) => (xs ? getWidthString(xs) : "width: 100%")};
  @media only screen and (min-width: 768px){
    ${({ sm }) => (sm && getWidthString(sm))};
  }
  @media only screen and (min-width: 992){
    ${({ md }) => (md && getWidthString(md))};
  }
  @media only screen and (min-width: 1200px){
    ${({ lg }) => (lg && getWidthString(lg))};
  }
`;

export { Row, Column };
