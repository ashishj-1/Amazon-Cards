export default function Price({ oldPrices, newPrices }) {
    let oldStyles = {
        textDecorationLine: "line-through",
    };
    let newStyles = {
        fontWeight: "bold",
    };
    let styles = {
        backgroundColor: "#",
        height: "30px",
        width: "200px",
        borderBottomLeftRadius: "14px",
        borderBottomRightRadius: "14px",
    };

    return (
        <div style={styles}>
            <span style={oldStyles}>{oldPrices}</span>
            &nbsp;&nbsp;&nbsp;
            <span style={newStyles}>{newPrices}</span>
        </div>
    );
}