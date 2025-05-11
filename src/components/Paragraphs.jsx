function Paragraphs ({paragraph}) {
    return (
        <>
        <div className="text-center paragraphs" style={{fontWeight: "100", color: "var(--paragraph-color)"}}>
            <p><strong>{paragraph}</strong></p>
        </div>
        </>
    );
}
export default Paragraphs;