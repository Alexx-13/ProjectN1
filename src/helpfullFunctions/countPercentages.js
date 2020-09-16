export function getVerticalScrollPercentage (element) {
  let p = element.parentNode,
    pos = (element.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight ) * 100;
  let percentages = Math.round(pos);
  return percentages;
};

export function returnScrollPercentages(){
  return getVerticalScrollPercentage(document.body);
};