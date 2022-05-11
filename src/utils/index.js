export const calculate = data => data?.filter(val => val.address.suite.indexOf('Apt') == 0).length
