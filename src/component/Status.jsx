const Status = ({status}) => {
    if(status === "Termine"){
        return(
            <span className="hot">{status}</span>
        );
    }
    if(status === "En Cours"){
        return(
            <span className="new">{status}</span>
        );
    }
    if(status === "Non demarrer"){
        return(
            <span className="sale">{status}</span>
        );
    }

};
export default Status;