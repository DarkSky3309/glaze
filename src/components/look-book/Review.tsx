import React, {FC, useEffect, useRef, useState} from 'react';

interface ReviewProps {
    reviews: { img: string, name: string, review: string, id: number }[]
}

const Review: FC<ReviewProps> = ({reviews}) => {
    const [index, setIndex] = useState(0);
    const numberOfReview = reviews.length;
    const dotList = useRef() as React.MutableRefObject<HTMLDivElement>

    function showReview(index: number) {
        for (let i = 0; i < dotList.current.children.length; i++) {
            dotList.current.children[i].classList.replace("active", "inactive")
        }
        ;
        dotList.current.children[index].classList.replace("inactive", "active")
        setIndex(index)
    }

    useEffect(() => {
        showReview(0)
    }, [])

    return (
        <div className={"review fromBottom"}>
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
                        <div className={"inactive"} key={index} onClick={() => showReview(array[index].id)}></div>)
                })}
            </div>
        </div>
    );
};

export default Review;