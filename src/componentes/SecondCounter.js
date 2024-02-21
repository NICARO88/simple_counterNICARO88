function SecondCounter(props) {
    const seconds = props.seconds;
    const onehthousands = Math.floor (seconds / 100000);
    const tenthousands = Math.floor (seconds / 10000);
    const thousands = Math.floor(seconds / 1000);
    const hundreds = Math.floor((seconds % 1000) / 100);
    const tens = Math.floor((seconds % 100) / 10);
    const units = Math.floor(seconds % 10);

    return (
        <div className = "simplecounter">
            <div className = "clock" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
            </svg></div>
            <div className="onehthousands">{onehthousands}</div>
            <div className="tenthousands">{tenthousands}</div>
            <div className="thousands">{thousands}</div>
            <div className="hundreds">{hundreds}</div>
            <div className="tens">{tens}</div>
            <div className="units">{units}</div>
        </div>
    );

}
export default SecondCounter; 