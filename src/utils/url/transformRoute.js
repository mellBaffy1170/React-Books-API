const PARAMETER_PATTERN = /:\w+/;

const transformRoute = (url, value) => {
  const transformedRoute = url.replace(PARAMETER_PATTERN, value);

  return transformedRoute;
};

export { transformRoute };
