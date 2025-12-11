/**
 * Formats the linear equation string based on slope (m) and intercept (c).
 * Handles edge cases like m=0, m=1, m=-1, c=0, etc.
 */
export const formatLinearEquation = (m: number, c: number): string => {
  // Precision formatting to avoid long decimals
  const formatNum = (n: number) => Number(n.toFixed(2)).toString();

  const mStr = formatNum(m);
  const cStr = formatNum(Math.abs(c));

  let slopePart = "";
  
  if (m === 0) {
    slopePart = "";
  } else if (m === 1) {
    slopePart = "x";
  } else if (m === -1) {
    slopePart = "-x";
  } else {
    slopePart = `${mStr}x`;
  }

  let interceptPart = "";
  
  if (c === 0) {
    interceptPart = m === 0 ? "0" : "";
  } else if (c > 0) {
    interceptPart = m === 0 ? `${cStr}` : `+ ${cStr}`;
  } else {
    interceptPart = `- ${cStr}`;
  }

  // Combine with spacing logic
  const equation = `y = ${slopePart} ${interceptPart}`.trim();
  
  // Clean up any double spaces or leading/trailing operators if specialized cases occur
  return equation.replace(/\s+/g, ' ');
};