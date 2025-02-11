import React from 'react'
import '../css/skeleton.css'
import '../css/normalize.css'
import '../css/components.css'
import { motion } from "framer-motion"
import ReactGA from 'react-ga'
//import { Link } from "react-router"




function Card(props) {

    const eventTrack = (category, action, label) => {
        console.log("GA event:", category, ":", action, ":", label);
        ReactGA.event({
            category: category,
            action: action,
            label: label,
        })
    }
    const variants = {
        visible: i => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeIn",
                type: "spring",
                stiffness: 50
            },
        }),
        hidden: { opacity: 0, y: 200 }
    }

    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer" onClick={eventTrack.bind(this, "Outbound", "Clic", props.title)} >
            <motion.div className="Card four columns"
                initial="hidden"
                animate="visible"
                custom={props.i}
                variants={variants}>
                <img className="cover" src={props.cover} alt=""></img>
                <div className="data">
                    <h2>{props.title}</h2>
                    <p>{props.subtitle}</p>
                </div>
            </motion.div>
        </a>
    )

}

export default Card
