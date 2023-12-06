import React from 'react';
import { SlMagnifier } from "react-icons/sl";
const Page = () => {
    return (
        <div className='bg-color'>
            <div className='container'>
                <div className='d-flex justify-content-between text-white align-items-center mt-2'>
                    <p className='w-50 fs-1 fw-bolder '>MY FOOD</p>
                    <ul className='d-flex justify-content-between fs-6 fw-bold'>
                        <li>Home</li>
                        <li>Recipes</li>
                        <li>Tips</li>
                        <li>Contact</li>
                        <li><SlMagnifier className='fs-5 fw-bold' /></li>
                    </ul>
                </div>
            </div>
            <div className='d-flex'>
                <div className='container my-4 maincontainer'>
                    <div className='content'>
                        <h1 className='titlename fw-bolder text-white text-wrap'>BROWNIE MAGIC</h1>
                        <p className='text-white text-wrap fw-bold para'>5 tips how to make the best brownies in the game</p>
                        <div className='line my-4'></div>
                        <div className='d-flex justify-content-between align-items-center btns-box'>
                            <div className='btns'>
                                <button>How to</button>
                                <button className='mx-4'>Baking</button>
                            </div>
                            <p>
                                12 min read
                            </p>
                        </div>
                        <button>READ NOW</button>
                    </div>
                </div>
                <div className='bg-image'>
                </div>
            </div>

        </div>
    )
}

export default Page;