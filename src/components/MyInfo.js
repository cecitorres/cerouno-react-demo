import React from 'react';

function MyInfo() {
  const firsName = 'Cecilia';
  const lastName = 'Torres';

  const date = new Date();
  const hours = date.getHours();
  let timeText;

  if (hours < 12) {
    timeText = 'Buenos días!';
  } else if (hours >= 12 && hours < 17) {
    timeText = 'Buenas tardes!';
  } else {
    timeText = 'Buenas noches'
  }

  return (
    <div>
      <h1>{`${firsName} ${lastName}`}</h1>
      <p>{timeText}</p>
      {/* <p>Soy una desarrolladora que vive en Mty</p>
      <p>Me gustaría visitar:</p>
      <ul>
        <li>Japon</li>
        <li>Singapur</li>
        <li>Holanda</li>
      </ul> */}
    </div>
  );
}

export default MyInfo;