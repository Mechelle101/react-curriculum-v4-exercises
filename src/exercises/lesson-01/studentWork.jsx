//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const name = 'Mechelle Presnell';
  const age = 45;
  const hobbies = [
    { id: 1, hobby: 'reading books' },
    { id: 2, hobby: 'research for blog posts' },
    { id: 3, hobby: 'blogging' },
  ];

  return (
    <div>
      <h1>{name}</h1>
      <p>I am {age} years old.</p>
      <h2>My Hobbies:</h2>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby.id}>{hobby.hobby}</li>
        ))}
      </ul>
    </div>
  );
}
