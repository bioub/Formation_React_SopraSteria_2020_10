// function Hello() {
//   const divEl = document.createElement('div');
//   divEl.className = 'Hello';

//   const textNode = document.createTextNode('Hello ');

//   const spanEl = document.createElement('span');
//   spanEl.innerText = 'Romain';

//   divEl.appendChild(textNode);
//   divEl.appendChild(spanEl);

//   const rootEl = document.getElementById('root');
//   rootEl.appendChild(divEl);

//   return '';
// }

// // <div class="Hello">Hello <span>Romain</span></div>

// export default Hello;

// import React from 'react';

// function Hello() {
//   return React.createElement('div', { className: 'Hello' },
//     'Hello ',
//     React.createElement('span', {}, 'Romain')
//   );
// }

// // <div class="Hello">Hello <span>Romain</span></div>

// export default Hello;

// import React from 'react';

// function Hello(props) {
//   return (
//     <div className="Hello">
//       Hello <span>{props.name ?? 'Romain'}</span>
//     </div>
//   );
// }

// // <div class="Hello">Hello <span>Romain</span></div>

// export default Hello;

import React from 'react';

function Hello({ name = 'Romain', age = 30 }) {
  return (
    <div className="Hello">
      Hello <span>{name}</span>, I have {age}
    </div>
  );
}

// <div class="Hello">Hello <span>Romain</span></div>

export default Hello;
