const App = () => (
    <div>
        <Tweet username="djmarques18" 
        name="Derrick Marques" 
        date="2/18/2024" 
        tweet="ITS MY BIRTHDAY" />

       <Tweet username="cr7" 
        name="Cristiano Ronaldo" 
        date="2/19/2024" 
        tweet="OMG happy birthday Derrick" />
    </div>
)


ReactDOM.render(<App />, document.getElementById("root"));