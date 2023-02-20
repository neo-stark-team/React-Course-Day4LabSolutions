function DisplayList(props)
{
  const content=(
  <ul>
      {
             props.posts.map((post) =>
        <li key={post.id}>
          {post.Lang}
        </li>)}
    </ul>
  )

  return (
      <div>
        {content}
      </div>
  );

}

const languages=[
   {id:1 ,Lang:'C'},
   {id:2 ,Lang:'C++'},
   {id:3 ,Lang:'C#'},
   {id:4 ,Lang: 'Java'},
   {id:5 ,Lang: 'Rust'}
  ]

function App() {
  return (
    <DisplayList posts={languages} />
  )
}

export default App
