import React from 'react';

// function Hello({match}) {
//   return (
//     <div className="Hello">
//       Hello {match.params.name}
//     </div>
//   );
// }

function Hello({
  match: {
    params: { name },
  },
}) {
  return <div className="Hello">Hello {name}</div>;
}

export default Hello;
