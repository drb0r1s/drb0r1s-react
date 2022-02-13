import React from "react";
import { seeMoreData } from "../data";

const SeeMore = ({ setRef }) => {
    return(
        <section className="see-more" ref={setRef} id="see-more">
            <h2>want to see more?</h2>

            <div className="see-more-holder">
                {seeMoreData.map((link) => {
                    return <a href={link.path} key={link.id}>
                        <img src={link.icon} alt={link.name} />
                        <strong>{link.name}</strong>
                    </a>;
                })}
            </div>
        </section>
    );
}

export default SeeMore;