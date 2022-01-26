import React, { useRef } from 'react';

const MyInput = React.forwardRef((props, ref) => {
  return <input ref={ref} {...props}/>;
});

export default MyInput;
