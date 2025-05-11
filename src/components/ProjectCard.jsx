
function ProjectCard( props) {

    return (
        <>
        <div className="d-flex projects-card p-2">
            <div className="header-section" style={{backgroundImage: props.backgroundImage ? `url(${props.backgroundImage})` : 'none'}}>
                <a href={props.demoPath}>
                    <button className="demo-button">Live Demo</button>
                </a>
            </div>
            <div className="d-flex align-items-center content pt-3 gap-2" style={{flexDirection: "column"}}>
            <h5>{props.name}</h5>
                <p>{props.description}</p>
                <div className="d-flex gap-2 justify-content-center mb-3">
                    <div className="tags">{props.tag1}</div>
                    <div className="tags">{props.tag2}</div>
                    <div className="tags">{props.tag3}</div>
                </div>
            <div className="d-flex gap-2">
                <a href={props.demoPath}>
                    <button className="normal-button" style={{width: "150px"}}>Live Demo</button>
                </a>
                <a href={props.codePath}>
                    <button className="normal-button" style={{width: "150px"}}>View Code</button>
                </a>
            </div>
            </div>
        </div>
        </>
    );
}
export default ProjectCard;
