function App() {
  // regular js
  const para = document.createElement('p');
  para.textContent = 'This is also visible too';
  document.getElementById('root').append(para);
  // regular js
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible</p>
    </div>
  );
}

export default App;
