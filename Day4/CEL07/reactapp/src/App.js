function DisplayList(props)
{
  const content=(
  <ul>
      {
             props.posts.map((post) =>
        <li >
          {post}
        </li>)}
    </ul>
  )

  return (
      <div>
        {content}
      </div>
  );

}

const languages=['C','C++','Java','Rust']
  

function App() {
  return (
    <>
    <h2>List in React</h2>
    <DisplayList posts={languages} />
    </>
  )
}

export default App
