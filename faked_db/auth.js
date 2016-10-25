window.faked.register('auth/login', 'json', function (method, params) {
  params = parseToMap(params);

  var name = params.name;
  var password = params.password;

  if ("111" !== password) return {
    success: false,
    message: 'Use password 111',
  };

  if ("asd" !== name) return {
    success: false,
    message: 'Use name asd',
  };

  return {success: true};
});

window.faked.register('auth/pincode', 'json', function (method, params) {
  params = parseToMap(params);

  var pincode = params.pincode;

  console.log('PINCODE RECEIVED: '+pincode);

  if ("111111" !== pincode) return {
    success: false,
  };

  return {success: true};
});

