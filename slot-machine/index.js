function App() {
    return (
        <div className="App">
            <h1>Welcome to the Slot Machine!</h1>
            <p>testing git</p>
            <Machine 
            s1="😭"
            s2="😂"
            s3="🤷‍♂️"
            />
            <button>Spin</button>
            <Machine 
             s1="😭"
             s2="😭"
             s3="😭"
            />
            <Machine 
            s1="😂"
            s2="😂"
            s3="😂"
            />
            <Machine 
            s1="🤷‍♂️"
            s2="🤷‍♂️"
            s3="😂"
            />
        </div>
    )
};


ReactDOM.render(<App />, document.getElementById("root"));