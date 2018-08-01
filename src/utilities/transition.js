export default ({ property = 'all', length = '0.3s', ease = 'ease' }) => `
transition: ${property} ${length} ${ease}
`;

// keeping variable names in {} makes them named parameters, so that they can be invoked using their parameters names.
// All the values are defaulted while invoking empty object should be passed if default params should be applied.