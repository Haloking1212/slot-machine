// const emojiArr = [""]

function Machine (props) {
    const {s1, s2, s3} = props
    const winner = (s1 === s2) && (s2 === s3);

    return (
    <div>
        <p>{s1}{s2}{s3}</p>
        <p>{winner ? "Winner!" : "Not today spidy!" }</p>

    </div>
    )
}