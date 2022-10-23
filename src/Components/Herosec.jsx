import React from 'react'
import { Container } from 'react-bootstrap'
import Lottie from 'react-lottie';
import Iphonelogo from '../Resources/iphone_lottie.json'
export default function Herosec() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Iphonelogo,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };



    return (
        <Container className='mt-5 d-flex justify-content-between' >
            <div className='left_hero d-flex justify-content-center align-items-center w-50 text-white flex-column'>
                <h5> New  </h5>
                <h2>iPhone 14+ </h2>
                <h1 className='hero_head mb-3'>Big and bigger. </h1>
                <p> From ₹79900.00* before trade‑in </p>
                <p> iPhone 14 Plus available starting from 7 October.</p>
            </div>


            <div className=' right_hero w-50 d-flex justify-content-center align-items-center'>
                <Lottie
                    options={defaultOptions}
                    height={500}
                    width={500}
                />
            </div>

        </Container>
    )
}
