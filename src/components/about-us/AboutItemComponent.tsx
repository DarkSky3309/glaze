import React, {FC} from 'react';

interface ItemProps{
    name: string
    image: string
    profession: string
    description: string
    position:string
}
const AboutItemComponent:FC<ItemProps> = ({name, image,profession,description, position}) => {
    return (
        <div className={`about__main-item ${position + "1"}`}>
            <div className={`about__main-item-info ${position}`}>
                <img src={image} alt="our specialist" className={"mb"}/>
                <div className="about__main-item-info-name">
                    <h3>{name}</h3>
                    <h4>{profession}</h4>
                </div>
            </div>
            <img src={image} alt="our specialist" className={"ourSpecialist"}/>
            <h3 className={"name"}>{name}</h3>
            <h4 className={"profession"}>{profession}</h4>
            <p className="about_main-item-description">
                {description}
            </p>
            <div className="box"></div>
        </div>
    );
};

export default AboutItemComponent;