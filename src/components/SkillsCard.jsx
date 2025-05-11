
function SkillsCard (props) {
    return (
        <>
        <div className="col-12 col-md-6 col-lg-3 col-xl-3 mt-4 d-flex justify-content-center">
            <div className="d-flex gap-4 justify-content-center align-items-center skill-cards">
                <h4>{props.subtleHeading}</h4>
                <div className="d-flex align-items-center gap-2 the-skill">
                    <img src={props.skill1Image} alt="" className="skill-logo"/>
                    <div>{props.skill1}</div>
                </div>
                <div className="d-flex align-items-center gap-2 the-skill">
                    <img src={props.skill2Image} alt="" className="skill-logo"/>
                    <div>{props.skill2}</div>
                </div>
                <div className="d-flex align-items-center gap-2 the-skill">
                    <img src={props.skill3Image} alt="" className="skill-logo"/>
                    <div>{props.skill3}</div>
                </div>
            </div>
        </div>
        </>
    );
}
export default SkillsCard;
