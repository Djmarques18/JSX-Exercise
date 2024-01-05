const Tweet = (prop) => {
return <div>
    <h3>Username: {prop.username}</h3>
    <h4>Name: {prop.name}</h4>
    <h5>Date: {prop.date}</h5>
    <p>Tweet: {prop.tweet}</p>
</div>
}