import React from 'react';
// import Paragraph from './components/Paragraph';
// import MyInfo from './components/MyInfo';
import ContactCard from './components/ContactCard';

function App() {
  return (
    <div>
      <h1>Hola</h1>
      <ContactCard
        name="Felix"
        imgUrl="http://placekitten.com/300/200"
        phone="1112-3323-122"
        email="felix@gmail.com"
      />
      <ContactCard
        name="Felix"
        imgUrl="http://placekitten.com/400/200"
        phone="1112-3323-122"
        email="felix@gmail.com"
      />
      <ContactCard
        name="Felix"
        imgUrl="http://placekitten.com/400/300"
        phone="1112-3323-122"
        email="felix@gmail.com"
      />
      <ContactCard
        name="Felix"
        imgUrl="http://placekitten.com/200/100"
        phone="1112-3323-122"
        email="felix@gmail.com"
      />

    </div>
  );
}

export default App;
