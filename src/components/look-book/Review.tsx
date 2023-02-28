import React, {FC, useEffect, useRef, useState} from 'react';
import {render} from "react-dom";

interface ReviewProps {
    reviews: { img: string, name: string, review: string, id: number }[]
    isTablet: () => boolean
}

const Review: FC<ReviewProps> = ({reviews, isTablet}) => {
    const [index, setIndex] = useState(0);
    const numberOfReview = reviews.length;
    const dotList = useRef() as React.MutableRefObject<HTMLDivElement>


    function initial(){
        for (let i = 0; i < dotList.current.children.length; i++) {
            dotList.current.children[i].classList.replace("active", "inactive")
        };
        dotList.current.children[0].classList.add("active")
        setIndex(0)

    }
    useEffect(() => {initial()},[])
    function showReview(index: number) {
        if (!isTablet()){
            for (let i = 0; i < dotList.current.children.length; i++) {
                dotList.current.children[i].classList.replace("active", "inactive")
            };
            dotList.current.children[index].classList.replace("inactive", "active")
            setIndex(index)
        } else if (isTablet()){
            for (let i = 0; i < dotList.current.children.length; i++) {
                dotList.current.children[i].classList.replace("active", "inactive")
            }
            dotList.current.children[index / 2].classList.replace("inactive", "active")
            setIndex(index)
        }
        
    }



    return (
        <div className={"review fromBottom"}>
            {!isTablet() ?
                (<>
                    <div className="review__wrapper">
                        <div className="item__wrapper">
                            <div className="review__info">
                                <div className="image fromLeft">
                                    <img src={reviews[index].img} alt="face"/>
                                </div>
                                <h3 className={"fromRight"}>{reviews[index].name}</h3>
                            </div>
                            <div className="review__feedback">
                                <span>{reviews[index].review}</span>
                            </div>
                        </div>

                    </div>
                    <div className="numeration fromRight" ref={dotList}>
                        {reviews.map((value, index, array) => {
                            return (
                                <div className={"inactive"} key={index}
                                     onClick={() => showReview(array[index].id)}></div>)
                        })}
                    </div>
                </>) :
                (<>
                    <div className="review__wrapper">
                        <div className="item__wrapper">
                            <div className="review__info">
                                <div className="image fromLeft">
                                    <img src={reviews[index].img} alt="face"/>
                                </div>
                                <h3 className={"fromRight"}>{reviews[index].name}</h3>
                            </div>
                            <div className="review__feedback">
                                <span>{reviews[index].review}</span>
                            </div>
                        </div>
                    </div>
                    <div className="review__wrapper">
                        <div className="item__wrapper">
                            <div className="review__info">
                                <div className="image fromLeft">
                                    <img src={reviews[index + 1].img} alt="face"/>
                                </div>
                                <h3 className={"fromRight"}>{reviews[index + 1].name}</h3>
                            </div>
                            <div className="review__feedback">
                                <span>{reviews[index + 1].review}</span>
                            </div>
                        </div>

                    </div>
                    <div className="numeration fromRight" ref={dotList}>
                        {reviews.map((value, index, array) => {
                            if (index % 2 === 0)
                            return (
                                <div className={"inactive"} key={index}
                                     onClick={() => showReview(array[index].id)}></div>)
                        })}
                    </div>
                </>)

            }


        </div>
    );
};

export default Review;