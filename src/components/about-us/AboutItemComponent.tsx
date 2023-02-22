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
        <div className="about__main-item">
            <div className={`about__main-item-info ${position}`}>
                <img src={image} alt="our specialist"/>
                <div className="about__main-item-info-name">
                    <h3>{name}</h3>
                    <h4>{profession}</h4>
                </div>
            </div>
            <p className="about_main-item-description">
                {description}
            </p>
        </div>
    );
};

export default AboutItemComponent;